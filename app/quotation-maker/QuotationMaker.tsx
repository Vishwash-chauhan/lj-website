'use client'

import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react'
import {
  MenuItem,
  menuItems,
  categoryOrder,
  normalizeCategory,
} from '@/lib/menuData'
import {
  Search,
  RefreshCw,
  Upload,
  Image as ImageIcon,
  Check,
  ChevronUp,
  ChevronDown,
  Trash2,
  Plus,
  Download,
  X,
  Loader2,
  Sparkles,
  AlertCircle,
  FileCheck,
} from 'lucide-react'

// --- Configuration Constants ---
const SUPABASE_URL = 'https://wtqtnpjliyhcwxjkincj.supabase.co/rest/v1/quotations'
const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0cXRucGpsaXloY3d4amtpbmNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk0MjgyMjQsImV4cCI6MjA4NTAwNDIyNH0.AlfAv9B1Qx4fRYFio90Qa6Md4viQ2bw6F7p-DKT_aFs'

const CLOUDINARY_CLOUD_NAME = 'dwffrfajl'
const CLOUDINARY_UPLOAD_PRESET = 'little_jalabies_quotation_uploads'
const CLOUDINARY_UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/upload`

const DEFAULT_GALLERY_IMAGES = [
  'https://res.cloudinary.com/dwffrfajl/image/upload/v1768137613/vxmqwdko70izz8eq0nwa.jpg',
  'https://res.cloudinary.com/dwffrfajl/image/upload/v1768137613/fkuyydfqcbqxv1imes0t.jpg',
  'https://res.cloudinary.com/dwffrfajl/image/upload/v1768137612/pgn4s96hid5x2btqns8h.jpg',
  'https://res.cloudinary.com/dwffrfajl/image/upload/v1768137611/zszkne05cdh6li8lgyl5.jpg',
  'https://res.cloudinary.com/dwffrfajl/image/upload/v1768137610/zqx0o0qtmatlfkbcsgvm.jpg',
  'https://res.cloudinary.com/dwffrfajl/image/upload/v1768137610/kyq7og2hhgdgwgo1e0ja.jpg',
  'https://res.cloudinary.com/dwffrfajl/image/upload/v1768137609/x10yyd8230wxf2rnpjzv.jpg',
  'https://res.cloudinary.com/dwffrfajl/image/upload/v1768137608/tn7rcoy1w0g5sw0clnvx.jpg',
  'https://res.cloudinary.com/dwffrfajl/image/upload/v1768137607/xftinqmucmx8bj6xrfjs.jpg',
]

const DEFAULT_WEBHOOK_URL =
  'https://n8n.littlejalebis.com/webhook/9b2f3be4-e30e-42e8-9ca7-afce486bf02e'
const DEFAULT_WEBHOOK_TOKEN = 'a-string-secret-at-least-256-bits-long'

export interface SelectedItem {
  id: string
  menuIdx?: number
  isCustom?: boolean
  Name: string
  Description: string
  Category: string
  VegNonVeg: string
  Portions: number
  Rate: number
  PcsDisplay: string
  Unit: string
  Calculate: string // "0" | "1"
  Setup: number
  NoOfPeople: number
}

interface QuotationSummary {
  quotation_id: string
  host_name?: string
  event_date?: string
  created_at?: string
}

function formatCurrency(v: number): string {
  if (isNaN(v)) return '₹0'
  return (
    '₹' +
    (Number.isInteger(v)
      ? v.toLocaleString('en-IN')
      : v.toLocaleString('en-IN', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }))
  )
}

function extractNumber(val: string | number | undefined | null): number {
  if (val === undefined || val === null) return 0
  if (typeof val === 'number') return isNaN(val) ? 0 : val
  const str = String(val).trim()
  const match = str.match(/[\d.,]+/)
  if (!match) return 0
  return Number(match[0].replace(/,/g, '')) || 0
}

function parsePaxNumbers(paxStr: string) {
  if (!paxStr) return { kids: 0, adults: 0, total: 0 }
  const s = String(paxStr).toLowerCase()
  let kids = 0,
    adults = 0
  const kMatch = s.match(/(\d+)(?:\s*-\s*\d+)?\s*kids?/)
  if (kMatch) kids = parseInt(kMatch[1])
  const aMatch = s.match(/(\d+)(?:\s*-\s*\d+)?\s*adults?/)
  if (aMatch) adults = parseInt(aMatch[1])
  const paxMatch = s.match(/(\d+)(?:\s*-\s*\d+)?\s*pax/)
  let total = kids + adults
  if (total === 0) {
    if (paxMatch) {
      total = parseInt(paxMatch[1])
    } else {
      const nums = (s.match(/\d+/g) || []).map((n) => parseInt(n))
      if (nums.length) total = nums.reduce((a, b) => a + b, 0)
    }
  }
  return { kids, adults, total }
}

export default function QuotationMaker() {
  // --- Existing Quotations state ---
  const [allQuotations, setAllQuotations] = useState<QuotationSummary[]>([])
  const [displayedQuotations, setDisplayedQuotations] = useState<QuotationSummary[]>([])
  const [quotationSearch, setQuotationSearch] = useState('')
  const [selectedQuoteIdToLoad, setSelectedQuoteIdToLoad] = useState('')
  const [loadingQuotations, setLoadingQuotations] = useState(false)
  const searchDebounceRef = useRef<NodeJS.Timeout | null>(null)

  // --- Event Details ---
  const [eventDate, setEventDate] = useState('')
  const [hostName, setHostName] = useState('')
  const [mobile, setMobile] = useState('')
  const [time, setTime] = useState('')
  const [pax, setPax] = useState('')
  const [location, setLocation] = useState('')
  const [quoteId, setQuoteId] = useState('')
  const [paxAutoStatus, setPaxAutoStatus] = useState('')

  // --- Webhook ---
  const [webhookUrl] = useState(DEFAULT_WEBHOOK_URL)
  const [webhookToken] = useState(DEFAULT_WEBHOOK_TOKEN)

  // --- Image Gallery State ---
  const [galleryImages, setGalleryImages] = useState<string[]>(DEFAULT_GALLERY_IMAGES)
  const [selectedImages, setSelectedImages] = useState<string[]>(DEFAULT_GALLERY_IMAGES)
  const [tempSelectedImages, setTempSelectedImages] = useState<string[]>(DEFAULT_GALLERY_IMAGES)
  const [showImageModal, setShowImageModal] = useState(false)
  const [uploadProgress, setUploadProgress] = useState('')
  const [uploadError, setUploadError] = useState('')

  // --- Menu Selection & Filter ---
  const [currentCategoryFilter, setCurrentCategoryFilter] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  // --- Selected Items in Table ---
  const [selectedItems, setSelectedItems] = useState<SelectedItem[]>([])

  // --- Custom Item State ---
  const [customName, setCustomName] = useState('')
  const [customDesc, setCustomDesc] = useState('')
  const [customCategory, setCustomCategory] = useState('Table Snacks')
  const [customVegNonVeg, setCustomVegNonVeg] = useState('Veg')
  const [customPcs, setCustomPcs] = useState('')
  const [customPortions, setCustomPortions] = useState(1)
  const [customRate, setCustomRate] = useState('')
  const [customSetup, setCustomSetup] = useState(0)
  const [customNoPeople, setCustomNoPeople] = useState(0)

  // --- Other Services State ---
  const [chefServers, setChefServers] = useState('₹4,000')
  const [tableDecor, setTableDecor] = useState('Included')
  const [cutlery, setCutlery] = useState('₹100')
  const [chaffing, setChaffing] = useState('₹100')
  const [conveyance, setConveyance] = useState('As Per Actual')
  const [venueCharges, setVenueCharges] = useState('₹0')

  // --- To Be Provided by Host ---
  const [tables, setTables] = useState('As Required')
  const [kitchenSpace, setKitchenSpace] = useState('As Required')

  // --- Status & PDF Modal State ---
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')
  const [pdfModalOpen, setPdfModalOpen] = useState(false)
  const [pdfDownloadUrl, setPdfDownloadUrl] = useState('')
  const [pdfFileName, setPdfFileName] = useState('quotation.pdf')

  // --- Sample Quotations for PAX Engine ---
  const [quotationSamples, setQuotationSamples] = useState<any[]>([])

  // Fetch quotations list from Supabase
  const fetchQuotationsList = useCallback(async () => {
    setLoadingQuotations(true)
    try {
      const res = await fetch(
        `${SUPABASE_URL}?select=quotation_id,host_name,event_date,created_at&order=created_at.desc&limit=100`,
        {
          headers: {
            apikey: SUPABASE_KEY,
            Authorization: `Bearer ${SUPABASE_KEY}`,
          },
        }
      )
      if (res.ok) {
        const data = await res.json()
        const items = Array.isArray(data) ? data : []
        setAllQuotations(items)
        setDisplayedQuotations(items)
      }
    } catch (err) {
      console.error('Error fetching quotations from Supabase:', err)
    } finally {
      setLoadingQuotations(false)
    }
  }, [])

  // Load quotation samples for PAX engine
  const loadQuotationSamples = useCallback(async () => {
    try {
      const res = await fetch('/quotations_samples.json')
      if (res.ok) {
        const data = await res.json()
        setQuotationSamples(data)
      }
    } catch {
      // Fallback: samples will be pulled from Supabase if needed
    }
  }, [])

  useEffect(() => {
    fetchQuotationsList()
    loadQuotationSamples()
  }, [fetchQuotationsList, loadQuotationSamples])

  // Handle Quotation search input
  const handleQuotationSearch = (val: string) => {
    setQuotationSearch(val)
    if (searchDebounceRef.current) clearTimeout(searchDebounceRef.current)

    const trimmed = val.trim()
    if (!trimmed) {
      setDisplayedQuotations(allQuotations)
      return
    }

    searchDebounceRef.current = setTimeout(async () => {
      try {
        const safeTerm = encodeURIComponent(trimmed.replace(/[(),]/g, ''))
        const queryParam = `or=(quotation_id.ilike.*${safeTerm}*,host_name.ilike.*${safeTerm}*,event_date.ilike.*${safeTerm}*)`
        const res = await fetch(
          `${SUPABASE_URL}?select=quotation_id,host_name,event_date,created_at&${queryParam}&order=created_at.desc&limit=50`,
          {
            headers: {
              apikey: SUPABASE_KEY,
              Authorization: `Bearer ${SUPABASE_KEY}`,
            },
          }
        )
        if (res.ok) {
          const data = await res.json()
          if (Array.isArray(data) && data.length > 0) {
            setDisplayedQuotations(data)
            return
          }
        }
      } catch {
        // Fallback local search
      }
      const lower = trimmed.toLowerCase()
      const filtered = allQuotations.filter((q) => {
        return (
          (q.quotation_id || '').toLowerCase().includes(lower) ||
          (q.host_name || '').toLowerCase().includes(lower) ||
          (q.event_date || '').toLowerCase().includes(lower)
        )
      })
      setDisplayedQuotations(filtered)
    }, 300)
  }

  // Quote ID auto generation on host name change
  const handleHostNameBlur = () => {
    if (!hostName.trim()) return
    try {
      const key = `quoteCounter_${hostName.trim()}`
      let count = localStorage.getItem(key)
      const nextCount = (parseInt(count || '0') || 0) + 1
      localStorage.setItem(key, String(nextCount))
      setQuoteId(`${hostName.trim()}${String(nextCount).padStart(3, '0')}`)
    } catch {
      setQuoteId(`${hostName.trim()}001`)
    }
  }

  // Clear form
  const handleClearForm = () => {
    setEventDate('')
    setHostName('')
    setMobile('')
    setTime('')
    setPax('')
    setLocation('')
    setQuoteId('')
    setSelectedItems([])
    setChefServers('₹4,000')
    setTableDecor('Included')
    setCutlery('₹100')
    setChaffing('₹100')
    setConveyance('As Per Actual')
    setVenueCharges('₹0')
    setTables('As Required')
    setKitchenSpace('As Required')
    setSelectedImages(DEFAULT_GALLERY_IMAGES)
    setSelectedQuoteIdToLoad('')
    setStatusMessage('')
  }

  // Populate form with quotation data
  const populateFormData = (q: any, options: { skipCustomerDetails?: boolean } = {}) => {
    const { skipCustomerDetails = false } = options

    let rawItems = q.items
    if (typeof rawItems === 'string') {
      try {
        rawItems = JSON.parse(rawItems)
      } catch {
        rawItems = []
      }
    }
    const itemsList: any[] = Array.isArray(rawItems) ? rawItems : []

    let rawImages = q.image_grid
    if (typeof rawImages === 'string') {
      try {
        rawImages = JSON.parse(rawImages)
      } catch {
        rawImages = []
      }
    }

    if (!skipCustomerDetails) {
      if (q.event_date) {
        const parts = q.event_date.split('/')
        if (parts.length === 3) {
          setEventDate(`${parts[2]}-${parts[1]}-${parts[0]}`)
        } else {
          setEventDate(q.event_date)
        }
      }
      setHostName(q.host_name || '')
      setMobile(q.mobile_no || '')

      if (q.time) {
        const m = q.time.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i)
        if (m) {
          let h = parseInt(m[1])
          const min = m[2]
          const ampm = m[3].toUpperCase()
          if (ampm === 'PM' && h !== 12) h += 12
          if (ampm === 'AM' && h === 12) h = 0
          setTime(`${String(h).padStart(2, '0')}:${min}`)
        } else {
          setTime(q.time)
        }
      }

      setPax(q.pax || '')
      setLocation(q.location || '')
      setQuoteId(q.quotation_id || '')

      if (Array.isArray(rawImages) && rawImages.length > 0) {
        setSelectedImages(rawImages.slice(0, 9))
      }
    }

    setChefServers(q.chef_servers ?? q.ChefServers ?? '')
    setTableDecor(q.table_decor ?? q.TableDecor ?? 'Included')
    setCutlery(q.cutlery ?? q.Cutlery ?? '')
    setChaffing(q.chaffing ?? q.Chaffing ?? '')
    setConveyance(q.conveyance ?? q.Conveyance ?? 'As Per Actual')
    setVenueCharges(q.venue_charges ?? q.VenueCharges ?? '')

    setTables(q.tables ?? q.Tables ?? 'As Required')
    setKitchenSpace(q.kitchen_space ?? q.KitchenSpace ?? 'As Required')

    // Map items to selectedItems
    const newSelected: SelectedItem[] = itemsList.map((item: any, i: number) => {
      const normCat = normalizeCategory(item.Category || '')
      const isLive = normCat === 'Live Stations'
      const matchedIdx = menuItems.findIndex((m) => m.Name === item.Name)

      let basePcs = item.PcsDisplay || (matchedIdx !== -1 ? menuItems[matchedIdx].PcsDisplay : '') || ''
      const portions = Number(item.Portions) || 1
      const calcFlag = String(item.Calculate ?? (matchedIdx !== -1 ? menuItems[matchedIdx].Calculate : '0'))
      if (calcFlag === '1' && portions && basePcs) {
        const num = extractNumber(basePcs)
        if (num) basePcs = String(num / portions)
      }

      return {
        id: `loaded_${i}_${Date.now()}`,
        menuIdx: matchedIdx !== -1 ? matchedIdx : undefined,
        isCustom: matchedIdx === -1,
        Name: item.Name || 'Unnamed Item',
        Description: item.Description || (matchedIdx !== -1 ? menuItems[matchedIdx].Description : '') || '',
        Category: normCat,
        VegNonVeg: item.VegNonVeg || (matchedIdx !== -1 ? menuItems[matchedIdx].VegNonVeg : 'Veg') || 'Veg',
        Portions: portions,
        Rate: Number(item.Rate) || (matchedIdx !== -1 ? menuItems[matchedIdx].Rate : 0) || 0,
        PcsDisplay: basePcs,
        Unit: item.Unit || (matchedIdx !== -1 ? menuItems[matchedIdx].Unit : 'PCS') || 'PCS',
        Calculate: calcFlag,
        Setup: Number(item.Setup) || (matchedIdx !== -1 ? menuItems[matchedIdx].Setup : 0) || 0,
        NoOfPeople: Number(item.NoOfPeople) || 0,
      }
    })

    setSelectedItems(newSelected)
  }

  // Load a single quotation from Supabase
  const loadQuotation = async (qId: string) => {
    if (!qId) {
      handleClearForm()
      return
    }
    setStatusMessage('Loading quotation...')
    try {
      const res = await fetch(`${SUPABASE_URL}?quotation_id=eq.${encodeURIComponent(qId)}&limit=1`, {
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
        },
      })
      if (!res.ok) throw new Error('Failed to load quotation')
      const data = await res.json()
      const quote = Array.isArray(data) ? data[0] : data
      if (!quote) throw new Error('Quotation not found')
      populateFormData(quote)
      setStatusMessage('✓ Quotation loaded successfully!')
      setTimeout(() => setStatusMessage(''), 3000)
    } catch (err: any) {
      setStatusMessage(`Error loading quotation: ${err.message}`)
    }
  }

  // PAX Auto Load matching
  const handleAutoLoadPax = async () => {
    if (!pax.trim()) {
      alert('Please enter a PAX value first (e.g., "15 Kids 10 Adults").')
      return
    }

    let samples = quotationSamples
    // If no local samples, try to fetch top quotations from Supabase
    if (!samples || samples.length === 0) {
      try {
        const res = await fetch(`${SUPABASE_URL}?select=*&limit=30&order=created_at.desc`, {
          headers: {
            apikey: SUPABASE_KEY,
            Authorization: `Bearer ${SUPABASE_KEY}`,
          },
        })
        if (res.ok) {
          samples = await res.json()
          setQuotationSamples(samples)
        }
      } catch {
        // Continue
      }
    }

    if (!samples || samples.length === 0) {
      alert('No previous quotations available for auto-loading menu.')
      return
    }

    const target = parsePaxNumbers(pax)
    if (target.total === 0) {
      alert('Could not determine number of guests from PAX text. Try e.g. "15 Kids 10 Adults".')
      return
    }

    const scored = samples
      .map((s: any) => {
        const sp = parsePaxNumbers(s.pax)
        let dist = 0
        if (target.kids > 0 && target.adults > 0 && sp.kids > 0 && sp.adults > 0) {
          dist =
            Math.abs(target.kids - sp.kids) * 1.5 +
            Math.abs(target.adults - sp.adults) +
            Math.abs(target.total - sp.total) * 0.5
        } else {
          dist = Math.abs(target.total - sp.total)
        }

        let items = s.items || []
        if (typeof items === 'string') {
          try {
            items = JSON.parse(items)
          } catch {
            items = []
          }
        }
        return { dist, itemCount: items.length, data: { ...s, items } }
      })
      .filter((s: any) => s.itemCount > 0)

    scored.sort((a: any, b: any) => (a.dist !== b.dist ? a.dist - b.dist : b.itemCount - a.itemCount))

    if (scored.length > 0) {
      const best = scored[0].data
      populateFormData(best, { skipCustomerDetails: true })
      setPaxAutoStatus('✓ Menu Auto-Loaded')
      setTimeout(() => setPaxAutoStatus(''), 4000)
    } else {
      alert(`No matching quotation found for PAX "${pax}".`)
    }
  }

  // Handle menu item checkbox toggle
  const toggleMenuItem = (menuItem: MenuItem, idx: number) => {
    const existingIndex = selectedItems.findIndex((item) => item.menuIdx === idx)
    if (existingIndex !== -1) {
      // Remove item
      setSelectedItems((prev) => prev.filter((_, i) => i !== existingIndex))
    } else {
      // Add item
      const normCat = normalizeCategory(menuItem.Category)
      const newItem: SelectedItem = {
        id: `item_${idx}_${Date.now()}`,
        menuIdx: idx,
        isCustom: false,
        Name: menuItem.Name,
        Description: menuItem.Description || '',
        Category: normCat,
        VegNonVeg: menuItem.VegNonVeg || 'Veg',
        Portions: 1,
        Rate: menuItem.Rate || 0,
        PcsDisplay: menuItem.PcsDisplay || '',
        Unit: menuItem.Unit || 'PCS',
        Calculate: menuItem.Calculate ? String(menuItem.Calculate) : '0',
        Setup: menuItem.Setup || 0,
        NoOfPeople: 0,
      }
      setSelectedItems((prev) => [...prev, newItem])
    }
  }

  // Add custom item
  const handleAddCustomItem = (e: React.FormEvent) => {
    e.preventDefault()
    if (!customName.trim()) {
      alert('Please enter an item name.')
      return
    }

    const normCat = normalizeCategory(customCategory)
    const isLive = normCat === 'Live Stations'

    const newItem: SelectedItem = {
      id: `custom_${Date.now()}`,
      isCustom: true,
      Name: customName.trim(),
      Description: customDesc.trim(),
      Category: normCat,
      VegNonVeg: customVegNonVeg,
      Portions: isLive ? 1 : Number(customPortions) || 1,
      Rate: Number(customRate) || 0,
      PcsDisplay: isLive ? '' : customPcs.trim(),
      Unit: isLive ? '' : 'PCS',
      Calculate: '0',
      Setup: isLive ? Number(customSetup) || 0 : 0,
      NoOfPeople: isLive ? Number(customNoPeople) || 0 : 0,
    }

    setSelectedItems((prev) => [...prev, newItem])
    setCustomName('')
    setCustomDesc('')
    setCustomPcs('')
    setCustomPortions(1)
    setCustomRate('')
    setCustomSetup(0)
    setCustomNoPeople(0)
  }

  // Update a selected item
  const updateSelectedItem = (id: string, updates: Partial<SelectedItem>) => {
    setSelectedItems((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item
        return { ...item, ...updates }
      })
    )
  }

  // Delete item
  const deleteSelectedItem = (id: string) => {
    setSelectedItems((prev) => prev.filter((item) => item.id !== id))
  }

  // Move item up or down within entire list
  const moveItem = (index: number, direction: 'up' | 'down') => {
    setSelectedItems((prev) => {
      const copy = [...prev]
      const targetIndex = direction === 'up' ? index - 1 : index + 1
      if (targetIndex < 0 || targetIndex >= copy.length) return prev
      const temp = copy[index]
      copy[index] = copy[targetIndex]
      copy[targetIndex] = temp
      return copy
    })
  }

  // Cycle Veg/Non-Veg
  const cycleVeg = (id: string, current: string) => {
    let next = 'Veg'
    if (current === 'Veg') next = 'Non-Veg'
    else if (current === 'Non-Veg') next = 'Veg & Non-Veg'
    else next = 'Veg'
    updateSelectedItem(id, { VegNonVeg: next })
  }

  // Switch item category
  const changeItemCategory = (id: string, newCat: string) => {
    const norm = normalizeCategory(newCat)
    updateSelectedItem(id, { Category: norm })
  }

  // Image Upload to Cloudinary
  const handleUploadImages = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return
    setUploadError('')
    setUploadProgress(`Uploading ${files.length} image(s)...`)

    const uploadedUrls: string[] = []
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const fd = new FormData()
      fd.append('file', file)
      fd.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)

      try {
        const res = await fetch(CLOUDINARY_UPLOAD_URL, {
          method: 'POST',
          body: fd,
        })
        const data = await res.json()
        if (data.secure_url || data.url) {
          uploadedUrls.push(data.secure_url || data.url)
        }
      } catch (err: any) {
        console.error('Image upload failed:', err)
        setUploadError('One or more images failed to upload.')
      }
    }

    if (uploadedUrls.length > 0) {
      setGalleryImages((prev) => [...uploadedUrls, ...prev])
      setTempSelectedImages((prev) => {
        const remaining = 9 - prev.length
        if (remaining > 0) {
          return [...prev, ...uploadedUrls.slice(0, remaining)]
        }
        return prev
      })
    }
    setUploadProgress('')
    e.target.value = ''
  }

  const toggleGallerySelect = (url: string) => {
    if (tempSelectedImages.includes(url)) {
      setTempSelectedImages((prev) => prev.filter((u) => u !== url))
    } else {
      if (tempSelectedImages.length >= 9) {
        alert('You can select up to 9 images only.')
        return
      }
      setTempSelectedImages((prev) => [...prev, url])
    }
  }

  // Group selected items by category order
  const groupedSelectedItems = useMemo(() => {
    const map = new Map<string, { item: SelectedItem; globalIndex: number }[]>()
    categoryOrder.forEach((cat) => map.set(cat, []))

    selectedItems.forEach((item, globalIndex) => {
      const cat = normalizeCategory(item.Category)
      if (!map.has(cat)) map.set(cat, [])
      map.get(cat)!.push({ item, globalIndex })
    })

    return Array.from(map.entries()).filter(([_, items]) => items.length > 0)
  }, [selectedItems])

  // Subtotal of Items
  const itemsSubtotal = useMemo(() => {
    return selectedItems.reduce((sum, item) => {
      const isLive = normalizeCategory(item.Category) === 'Live Stations'
      const amt = isLive
        ? (item.Setup || 0) + (item.Rate || 0) * (item.NoOfPeople || 0)
        : (item.Portions || 0) * (item.Rate || 0)
      return sum + amt
    }, 0)
  }, [selectedItems])

  // Services Calculations
  const servicesValues = useMemo(() => {
    return {
      chef: extractNumber(chefServers),
      decor: extractNumber(tableDecor),
      cutlery: extractNumber(cutlery),
      chaffing: extractNumber(chaffing),
      conveyance: extractNumber(conveyance),
      venue: extractNumber(venueCharges),
    }
  }, [chefServers, tableDecor, cutlery, chaffing, conveyance, venueCharges])

  const servicesSubtotal = useMemo(() => {
    return (
      servicesValues.chef +
      servicesValues.decor +
      servicesValues.cutlery +
      servicesValues.chaffing +
      servicesValues.conveyance +
      servicesValues.venue
    )
  }, [servicesValues])

  const subtotalWithServices = itemsSubtotal + servicesSubtotal
  const gstAmount = subtotalWithServices * 0.05
  const grandTotal = subtotalWithServices + gstAmount

  // Filtered menu list for picker
  const filteredMenuList = useMemo(() => {
    const q = searchQuery.toLowerCase().trim()
    return menuItems.filter((item) => {
      const cat = normalizeCategory(item.Category)
      const matchesCategory =
        currentCategoryFilter === null || cat === currentCategoryFilter
      const matchesSearch =
        !q ||
        item.Name.toLowerCase().includes(q) ||
        (item.Description || '').toLowerCase().includes(q)
      return matchesCategory && matchesSearch
    })
  }, [searchQuery, currentCategoryFilter])

  // Construct n8n payload
  const buildPayload = () => {
    const itemsPayload = selectedItems.map((item) => {
      const isLive = normalizeCategory(item.Category) === 'Live Stations'
      if (isLive) {
        const amt = (item.Setup || 0) + (item.Rate || 0) * (item.NoOfPeople || 0)
        return {
          Name: item.Name,
          Description: item.Description,
          Category: item.Category,
          VegNonVeg: item.VegNonVeg,
          Setup: item.Setup,
          Rate: item.Rate,
          NoOfPeople: item.NoOfPeople,
          Amount: amt,
        }
      } else {
        let pcsDisplay = item.PcsDisplay
        if (item.Calculate === '1') {
          const baseNum = extractNumber(item.PcsDisplay)
          pcsDisplay = String(baseNum * item.Portions)
        }
        return {
          Name: item.Name,
          Description: item.Description,
          Category: item.Category,
          VegNonVeg: item.VegNonVeg,
          Portions: item.Portions,
          PcsDisplay: pcsDisplay,
          Unit: item.Unit,
          Rate: item.Rate,
          Amount: item.Portions * item.Rate,
          Calculate: item.Calculate,
        }
      }
    })

    let dateFormatted = ''
    if (eventDate) {
      const [yyyy, mm, dd] = eventDate.split('-')
      dateFormatted = `${dd}/${mm}/${yyyy}`
    }

    let timeFormatted = ''
    if (time) {
      const [hStr, mStr] = time.split(':')
      const h = parseInt(hStr)
      const m = parseInt(mStr)
      const ampm = h >= 12 ? 'PM' : 'AM'
      const h12 = h % 12 || 12
      timeFormatted = `${String(h12).padStart(2, '0')}:${String(m).padStart(2, '0')} ${ampm}`
    }

    return {
      EventDate: dateFormatted,
      HostName: hostName,
      QuotationId: quoteId,
      MobileNo: mobile,
      Time: timeFormatted,
      Pax: pax,
      Location: location,
      Items: itemsPayload,
      Total: itemsSubtotal,
      GrandTotal: subtotalWithServices, // In form.html, grandTotal = itemsTotal + servicesTotal
      ChefServers: chefServers,
      TableDecor: tableDecor,
      Cutlery: cutlery,
      Chaffing: chaffing,
      Conveyance: conveyance,
      VenueCharges: venueCharges,
      Tables: tables,
      KitchenSpace: kitchenSpace,
      ImageGrid: selectedImages.slice(0, 9),
    }
  }

  // Handle Form Submission to n8n Webhook
  const handleSubmit = async () => {
    if (!webhookUrl.trim()) {
      alert('Please set the n8n Webhook URL.')
      return
    }

    const payload = buildPayload()
    setIsSubmitting(true)
    setStatusMessage('Generating quotation PDF via n8n...')

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 45000)

    try {
      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-webhook-token': webhookToken,
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      if (!res.ok) {
        throw new Error(`n8n webhook error: HTTP ${res.status}`)
      }

      const contentType = res.headers.get('content-type') || ''
      if (contentType.includes('application/pdf')) {
        const blob = await res.blob()
        const url = URL.createObjectURL(blob)

        let filename = ''
        const cd = res.headers.get('content-disposition') || ''
        const match = cd.match(/filename\*?=([^;]+)/i)
        if (match) {
          filename = match[1].trim().replace(/UTF-8''/i, '').replace(/^"|"$/g, '')
          try {
            filename = decodeURIComponent(filename)
          } catch {}
        }
        if (!filename) {
          const safeHost = (hostName.trim() || 'quotation').replace(/[^A-Za-z0-9_-]+/g, '_')
          const safeDate = (eventDate || '').replace(/-/g, '_')
          filename = `${safeHost}_${safeDate}.pdf`
        }

        setPdfDownloadUrl(url)
        setPdfFileName(filename)
        setPdfModalOpen(true)
        setStatusMessage('✓ Quotation PDF generated successfully!')
      } else {
        const data = await res.json()
        let remoteUrl = ''
        if (Array.isArray(data) && data.length > 0) {
          remoteUrl = data[0].signedUrl || data[0].pdfUrl || data[0].url || ''
        } else if (typeof data === 'object' && data !== null) {
          remoteUrl = data.signedUrl || data.pdfUrl || data.url || ''
        }

        if (remoteUrl) {
          const safeHost = (hostName.trim() || 'quotation').replace(/[^A-Za-z0-9_-]+/g, '_')
          const safeDate = (eventDate || '').replace(/-/g, '_')
          setPdfDownloadUrl(remoteUrl)
          setPdfFileName(`${safeHost}_${safeDate}.pdf`)
          setPdfModalOpen(true)
          setStatusMessage('✓ Quotation ready!')
        } else {
          setStatusMessage('Quotation submitted! Check n8n console.')
        }
      }
    } catch (err: any) {
      clearTimeout(timeoutId)
      if (err.name === 'AbortError') {
        setStatusMessage('Request timed out (45s). n8n may be slow or offline.')
      } else {
        setStatusMessage(`Submission failed: ${err.message}`)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  // Download raw payload JSON
  const handleDownloadJson = () => {
    const payload = buildPayload()
    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: 'application/json',
    })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `quotation_${quoteId || 'draft'}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl border border-[#2D3E50]/10 p-4 sm:p-8 text-[#2D3E50]">
      {/* Header */}
      <div className="border-b border-[#2D3E50]/10 pb-6 mb-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1a3a3a] tracking-tight">
              Little Jalebis Quotation Maker
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Create, customize, and generate professional event catering quotations.
            </p>
          </div>
          <button
            type="button"
            onClick={handleClearForm}
            className="text-xs sm:text-sm font-semibold text-gray-600 hover:text-red-600 bg-gray-100 hover:bg-red-50 border border-gray-300 rounded-lg px-3 py-1.5 transition-colors"
          >
            Clear Form
          </button>
        </div>

        {/* Load Existing Quotation Bar */}
        <div className="mt-6 p-4 bg-[#f5f9ff] border-2 border-[#2D3E50] rounded-xl">
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
            <span className="font-bold text-sm text-[#2D3E50] whitespace-nowrap">
              Load Existing:
            </span>
            <div className="relative flex-1 min-w-[200px]">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={quotationSearch}
                onChange={(e) => handleQuotationSearch(e.target.value)}
                placeholder="Search quotations by name, date, ID..."
                className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#2D3E50] focus:ring-1 focus:ring-[#2D3E50]"
              />
            </div>
            <select
              value={selectedQuoteIdToLoad}
              onChange={(e) => {
                setSelectedQuoteIdToLoad(e.target.value)
                if (e.target.value) loadQuotation(e.target.value)
              }}
              className="flex-1 min-w-[220px] py-2 px-3 text-sm bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#2D3E50]"
            >
              <option value="">-- Select or Start New Quotation --</option>
              {displayedQuotations.map((q) => (
                <option key={q.quotation_id} value={q.quotation_id}>
                  {q.quotation_id} - {q.host_name || 'Unknown'} ({q.event_date || 'No Date'})
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={() => loadQuotation(selectedQuoteIdToLoad)}
              disabled={!selectedQuoteIdToLoad}
              className="bg-[#F6B27A] hover:bg-[#e09e66] text-[#2D3E50] font-bold text-sm px-4 py-2 rounded-lg transition-colors disabled:opacity-50"
            >
              Load
            </button>
            <button
              type="button"
              onClick={fetchQuotationsList}
              title="Refresh quotations list"
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-lg transition-colors"
            >
              <RefreshCw
                className={`w-4 h-4 ${loadingQuotations ? 'animate-spin' : ''}`}
              />
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Search by host name or quotation ID to load a previously drafted quote.
          </p>
        </div>
      </div>

      {/* Event Details Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">Event Date</label>
          <input
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            className="w-full p-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#2D3E50]"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">Host Name</label>
          <input
            type="text"
            value={hostName}
            onChange={(e) => setHostName(e.target.value)}
            onBlur={handleHostNameBlur}
            placeholder="e.g. Sharma Family"
            className="w-full p-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#2D3E50]"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">Mobile No</label>
          <input
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="+91 98765 43210"
            className="w-full p-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#2D3E50]"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">Time</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full p-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#2D3E50]"
          />
        </div>
        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="text-xs font-bold text-gray-700">Pax</label>
            {paxAutoStatus && (
              <span className="text-xs font-bold text-emerald-600 animate-pulse">
                {paxAutoStatus}
              </span>
            )}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={pax}
              onChange={(e) => setPax(e.target.value)}
              placeholder="e.g. 15 Kids 10 Adults"
              className="flex-1 p-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#2D3E50]"
            />
            <button
              type="button"
              onClick={handleAutoLoadPax}
              className="bg-[#F6B27A] hover:bg-[#e09e66] text-[#2D3E50] font-bold text-xs px-3 rounded-lg flex items-center gap-1 shadow-sm transition-all"
              title="Zero-click instant auto load matching menu"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Auto Load
            </button>
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g. Vasant Kunj, New Delhi"
            className="w-full p-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#2D3E50]"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">Quote ID</label>
          <input
            type="text"
            value={quoteId}
            onChange={(e) => setQuoteId(e.target.value)}
            placeholder="Generated upon entering Host Name"
            className="w-full p-2.5 text-sm border border-gray-300 rounded-lg font-mono bg-gray-50 focus:outline-none focus:border-[#2D3E50]"
          />
        </div>

        {/* Manage Images Button & Preview */}
        <div className="sm:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => {
              setTempSelectedImages(selectedImages)
              setShowImageModal(true)
            }}
            className="bg-[#F6B27A] hover:bg-[#e09e66] text-[#2D3E50] font-bold text-sm px-4 py-2.5 rounded-lg flex items-center gap-2 shadow-sm transition-all"
          >
            <ImageIcon className="w-4 h-4" />
            Manage Images ({selectedImages.length}/9)
          </button>
          <div className="flex flex-wrap gap-1.5 items-center">
            {selectedImages.slice(0, 9).map((url, i) => (
              <img
                key={i}
                src={url}
                alt={`thumb-${i}`}
                className="w-9 h-9 object-cover rounded border border-gray-300"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Menu Item Selection Section */}
      <div className="border-t border-[#2D3E50]/10 pt-6 mb-8">
        <h2 className="text-lg font-bold text-[#2D3E50] mb-3">
          Search & Select Menu Items
        </h2>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-3">
          <button
            type="button"
            onClick={() => setCurrentCategoryFilter(null)}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-all ${
              currentCategoryFilter === null
                ? 'bg-[#2D3E50] text-white border-[#2D3E50]'
                : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
            }`}
          >
            All Items
          </button>
          {categoryOrder.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCurrentCategoryFilter(cat)}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-all ${
                currentCategoryFilter === cat
                  ? 'bg-[#2D3E50] text-white border-[#2D3E50]'
                  : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Box */}
        <div className="relative mb-3">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by dish name or ingredient (e.g., Chicken, Paneer, Fries, Waffle)..."
            className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#2D3E50]"
          />
        </div>

        {/* Menu Items Scroll Box */}
        <div className="max-h-72 overflow-y-auto border border-gray-200 rounded-xl p-3 bg-gray-50/50">
          {filteredMenuList.length === 0 ? (
            <div className="text-center py-6 text-sm text-gray-400">
              No menu items match your search.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {filteredMenuList.map((item) => {
                const originalIndex = menuItems.findIndex((m) => m.Name === item.Name)
                const isSelected = selectedItems.some((s) => s.menuIdx === originalIndex)
                const isNonVeg = item.VegNonVeg?.toLowerCase().includes('non')

                return (
                  <label
                    key={item.Name}
                    className={`flex items-start gap-2.5 p-2 rounded-lg border text-xs cursor-pointer transition-colors ${
                      isSelected
                        ? 'bg-amber-50 border-amber-300 shadow-xs'
                        : 'bg-white border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleMenuItem(item, originalIndex)}
                      className="mt-0.5 w-4 h-4 rounded text-[#2D3E50] focus:ring-0 cursor-pointer"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`w-2 h-2 rounded-full flex-shrink-0 ${
                            isNonVeg ? 'bg-red-500' : 'bg-emerald-600'
                          }`}
                        />
                        <span className="font-bold text-gray-900 truncate">
                          {item.Name}
                        </span>
                      </div>
                      {item.Description && (
                        <p className="text-[11px] text-gray-500 line-clamp-1 mt-0.5">
                          {item.Description}
                        </p>
                      )}
                    </div>
                    <div className="text-right whitespace-nowrap pl-1">
                      {item.Rate ? (
                        <div className="font-bold text-gray-800">
                          {formatCurrency(item.Rate)}
                        </div>
                      ) : item.Setup ? (
                        <div className="font-bold text-gray-800">
                          Setup {formatCurrency(item.Setup)}
                        </div>
                      ) : null}
                      {item.PcsDisplay && (
                        <div className="text-[10px] text-gray-500">
                          {item.PcsDisplay} {item.Unit}
                        </div>
                      )}
                    </div>
                  </label>
                )
              })}
            </div>
          )}
        </div>
      </div>

      {/* Selected Items Table Section */}
      <div className="border-t border-[#2D3E50]/10 pt-6 mb-8">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-bold text-[#2D3E50]">
            Selected Items ({selectedItems.length})
          </h2>
          <span className="text-xs text-gray-500">
            Reorder with up/down arrows or adjust quantities directly
          </span>
        </div>

        <div className="overflow-x-auto border border-gray-200 rounded-xl">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700 font-bold border-b border-gray-300">
                <th className="p-2.5 min-w-[220px]">Item Details</th>
                <th className="p-2.5 w-16 text-center">Portions</th>
                <th className="p-2.5 w-20 text-right">Rate</th>
                <th className="p-2.5 w-24 text-right">Amount</th>
                <th className="p-2.5 w-20 text-center">Pcs.</th>
                <th className="p-2.5 w-20 text-center">Unit</th>
                <th className="p-2.5 w-12 text-center" title="Auto calculate PCS × Portions">
                  Calc.
                </th>
                <th className="p-2.5 w-24 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {selectedItems.length === 0 ? (
                <tr>
                  <td colSpan={8} className="p-8 text-center text-gray-400 text-sm">
                    No items selected yet. Choose items from the menu above or add a custom item below.
                  </td>
                </tr>
              ) : (
                groupedSelectedItems.map(([category, items]) => {
                  const isLiveStationCat = category === 'Live Stations'

                  return (
                    <React.Fragment key={category}>
                      {/* Category Header Row */}
                      <tr className="bg-gray-100/80 font-bold text-gray-800 border-t border-b border-gray-300">
                        {isLiveStationCat ? (
                          <>
                            <td colSpan={2} className="p-2 text-xs uppercase tracking-wider">
                              {category}
                            </td>
                            <td className="p-2 text-center text-[11px]">Setup (₹)</td>
                            <td className="p-2 text-center text-[11px]">Rate (₹)</td>
                            <td className="p-2 text-center text-[11px]">No. People</td>
                            <td className="p-2 text-right text-[11px]">Amount</td>
                            <td colSpan={2} className="p-2 text-center text-[11px]">
                              Actions
                            </td>
                          </>
                        ) : (
                          <td colSpan={8} className="p-2 text-xs uppercase tracking-wider">
                            {category}
                          </td>
                        )}
                      </tr>

                      {/* Items in Category */}
                      {items.map(({ item, globalIndex }) => {
                        const isLive = normalizeCategory(item.Category) === 'Live Stations'
                        const isNonVeg = item.VegNonVeg.toLowerCase().includes('non')
                        const itemAmount = isLive
                          ? (item.Setup || 0) + (item.Rate || 0) * (item.NoOfPeople || 0)
                          : (item.Portions || 0) * (item.Rate || 0)

                        const calculatedPcs =
                          item.Calculate === '1'
                            ? String(extractNumber(item.PcsDisplay) * item.Portions)
                            : ''

                        if (isLive) {
                          return (
                            <tr
                              key={item.id}
                              className="border-b border-gray-200 hover:bg-gray-50/50"
                            >
                              <td colSpan={2} className="p-2">
                                <div className="flex items-center gap-1.5 flex-wrap">
                                  <input
                                    type="text"
                                    value={item.Name}
                                    onChange={(e) =>
                                      updateSelectedItem(item.id, { Name: e.target.value })
                                    }
                                    className="font-bold text-gray-900 border-none bg-transparent flex-1 min-w-[130px] p-0 text-xs focus:ring-0"
                                  />
                                  <button
                                    type="button"
                                    onClick={() => cycleVeg(item.id, item.VegNonVeg)}
                                    className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold border transition-colors ${
                                      isNonVeg
                                        ? 'bg-red-50 text-red-700 border-red-200'
                                        : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                    }`}
                                  >
                                    {item.VegNonVeg}
                                  </button>
                                  <select
                                    value={normalizeCategory(item.Category)}
                                    onChange={(e) => changeItemCategory(item.id, e.target.value)}
                                    className="text-[10px] py-0.5 px-1 border border-gray-300 rounded bg-white text-gray-700"
                                  >
                                    {categoryOrder.map((c) => (
                                      <option key={c} value={c}>
                                        {c}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                                <textarea
                                  value={item.Description}
                                  onChange={(e) =>
                                    updateSelectedItem(item.id, { Description: e.target.value })
                                  }
                                  placeholder="Description..."
                                  rows={1}
                                  className="w-full mt-1 p-1 text-[11px] text-gray-600 border border-gray-200 rounded focus:border-[#2D3E50]"
                                />
                              </td>
                              <td className="p-2 text-center">
                                <input
                                  type="number"
                                  min="0"
                                  value={item.Setup}
                                  onChange={(e) =>
                                    updateSelectedItem(item.id, {
                                      Setup: Number(e.target.value) || 0,
                                    })
                                  }
                                  className="w-16 p-1 text-right text-xs border border-gray-300 rounded"
                                />
                              </td>
                              <td className="p-2 text-center">
                                <input
                                  type="number"
                                  min="0"
                                  value={item.Rate}
                                  onChange={(e) =>
                                    updateSelectedItem(item.id, {
                                      Rate: Number(e.target.value) || 0,
                                    })
                                  }
                                  className="w-16 p-1 text-right text-xs border border-gray-300 rounded"
                                />
                              </td>
                              <td className="p-2 text-center">
                                <input
                                  type="number"
                                  min="0"
                                  value={item.NoOfPeople}
                                  onChange={(e) =>
                                    updateSelectedItem(item.id, {
                                      NoOfPeople: Number(e.target.value) || 0,
                                    })
                                  }
                                  className="w-14 p-1 text-center text-xs border border-gray-300 rounded"
                                />
                              </td>
                              <td className="p-2 text-right font-bold text-gray-900 whitespace-nowrap">
                                {formatCurrency(itemAmount)}
                              </td>
                              <td colSpan={2} className="p-2 text-center">
                                <div className="flex items-center justify-center gap-1">
                                  <button
                                    type="button"
                                    onClick={() => moveItem(globalIndex, 'up')}
                                    disabled={globalIndex === 0}
                                    className="p-1 text-gray-500 hover:text-[#2D3E50] disabled:opacity-30"
                                    title="Move up"
                                  >
                                    <ChevronUp className="w-3.5 h-3.5" />
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => moveItem(globalIndex, 'down')}
                                    disabled={globalIndex === selectedItems.length - 1}
                                    className="p-1 text-gray-500 hover:text-[#2D3E50] disabled:opacity-30"
                                    title="Move down"
                                  >
                                    <ChevronDown className="w-3.5 h-3.5" />
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => deleteSelectedItem(item.id)}
                                    className="p-1 text-red-500 hover:text-red-700"
                                    title="Delete"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          )
                        }

                        // Regular Item Row
                        return (
                          <tr
                            key={item.id}
                            className="border-b border-gray-200 hover:bg-gray-50/50"
                          >
                            <td className="p-2">
                              <div className="flex items-center gap-1.5 flex-wrap">
                                <input
                                  type="text"
                                  value={item.Name}
                                  onChange={(e) =>
                                    updateSelectedItem(item.id, { Name: e.target.value })
                                  }
                                  className="font-bold text-gray-900 border-none bg-transparent flex-1 min-w-[130px] p-0 text-xs focus:ring-0"
                                />
                                <button
                                  type="button"
                                  onClick={() => cycleVeg(item.id, item.VegNonVeg)}
                                  className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold border transition-colors ${
                                    isNonVeg
                                      ? 'bg-red-50 text-red-700 border-red-200'
                                      : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                  }`}
                                >
                                  {item.VegNonVeg}
                                </button>
                                <select
                                  value={normalizeCategory(item.Category)}
                                  onChange={(e) => changeItemCategory(item.id, e.target.value)}
                                  className="text-[10px] py-0.5 px-1 border border-gray-300 rounded bg-white text-gray-700"
                                >
                                  {categoryOrder.map((c) => (
                                    <option key={c} value={c}>
                                      {c}
                                    </option>
                                  ))}
                                </select>
                              </div>
                              <textarea
                                value={item.Description}
                                onChange={(e) =>
                                  updateSelectedItem(item.id, { Description: e.target.value })
                                }
                                placeholder="Description..."
                                rows={1}
                                className="w-full mt-1 p-1 text-[11px] text-gray-600 border border-gray-200 rounded focus:border-[#2D3E50]"
                              />
                            </td>
                            <td className="p-2 text-center">
                              <input
                                type="number"
                                min="0"
                                value={item.Portions}
                                onChange={(e) =>
                                  updateSelectedItem(item.id, {
                                    Portions: Number(e.target.value) || 0,
                                  })
                                }
                                className="w-14 p-1 text-center text-xs border border-gray-300 rounded"
                              />
                            </td>
                            <td className="p-2 text-right">
                              <input
                                type="number"
                                min="0"
                                step="0.01"
                                value={item.Rate}
                                onChange={(e) =>
                                  updateSelectedItem(item.id, {
                                    Rate: Number(e.target.value) || 0,
                                  })
                                }
                                className="w-16 p-1 text-right text-xs border border-gray-300 rounded"
                              />
                            </td>
                            <td className="p-2 text-right font-bold text-gray-900 whitespace-nowrap">
                              {formatCurrency(itemAmount)}
                            </td>
                            <td className="p-2 text-center">
                              <input
                                type="text"
                                value={item.PcsDisplay}
                                onChange={(e) =>
                                  updateSelectedItem(item.id, { PcsDisplay: e.target.value })
                                }
                                placeholder="0"
                                className="w-12 p-1 text-center text-xs border border-gray-300 rounded"
                              />
                              {calculatedPcs && (
                                <div className="text-[10px] text-gray-500 font-semibold mt-0.5">
                                  → {calculatedPcs}
                                </div>
                              )}
                            </td>
                            <td className="p-2 text-center">
                              <select
                                value={item.Unit}
                                onChange={(e) =>
                                  updateSelectedItem(item.id, { Unit: e.target.value })
                                }
                                className="w-16 p-1 text-xs border border-gray-300 rounded"
                              >
                                <option value="">NA</option>
                                <option value="PCS">PCS</option>
                                <option value="PC">PC</option>
                                <option value="GMS">GMS</option>
                                <option value="ML">ML</option>
                                <option value="ml per portion">ml/portion</option>
                              </select>
                            </td>
                            <td className="p-2 text-center">
                              <input
                                type="checkbox"
                                checked={item.Calculate === '1'}
                                onChange={(e) =>
                                  updateSelectedItem(item.id, {
                                    Calculate: e.target.checked ? '1' : '0',
                                  })
                                }
                                className="w-4 h-4 rounded text-[#2D3E50] cursor-pointer"
                                title="Auto calculate PCS × Portions"
                              />
                            </td>
                            <td className="p-2 text-center">
                              <div className="flex items-center justify-center gap-1">
                                <button
                                  type="button"
                                  onClick={() => moveItem(globalIndex, 'up')}
                                  disabled={globalIndex === 0}
                                  className="p-1 text-gray-500 hover:text-[#2D3E50] disabled:opacity-30"
                                  title="Move up"
                                >
                                  <ChevronUp className="w-3.5 h-3.5" />
                                </button>
                                <button
                                  type="button"
                                  onClick={() => moveItem(globalIndex, 'down')}
                                  disabled={globalIndex === selectedItems.length - 1}
                                  className="p-1 text-gray-500 hover:text-[#2D3E50] disabled:opacity-30"
                                  title="Move down"
                                >
                                  <ChevronDown className="w-3.5 h-3.5" />
                                </button>
                                <button
                                  type="button"
                                  onClick={() => deleteSelectedItem(item.id)}
                                  className="p-1 text-red-500 hover:text-red-700"
                                  title="Delete"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        )
                      })}
                    </React.Fragment>
                  )
                })
              )}
            </tbody>
            {selectedItems.length > 0 && (
              <tfoot>
                <tr className="bg-gray-100 font-bold text-gray-900 border-t-2 border-gray-300">
                  <td colSpan={3} className="p-2.5 text-right">
                    Total Items Amount:
                  </td>
                  <td className="p-2.5 text-right text-sm text-[#2D3E50]">
                    {formatCurrency(itemsSubtotal)}
                  </td>
                  <td colSpan={4} className="p-2.5"></td>
                </tr>
              </tfoot>
            )}
          </table>
        </div>

        {/* Add Custom Item Box */}
        <div className="mt-6 p-4 border-2 border-dashed border-gray-300 rounded-xl bg-gray-50/50">
          <h3 className="font-bold text-sm text-[#2D3E50] mb-3 flex items-center gap-1.5">
            <Plus className="w-4 h-4" /> Add Custom Item
          </h3>
          <form onSubmit={handleAddCustomItem} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Item Name
              </label>
              <input
                type="text"
                value={customName}
                onChange={(e) => setCustomName(e.target.value)}
                placeholder="e.g. Signature Dim Sum"
                className="w-full p-2 text-xs border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-[#2D3E50]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Description
              </label>
              <input
                type="text"
                value={customDesc}
                onChange={(e) => setCustomDesc(e.target.value)}
                placeholder="Item description"
                className="w-full p-2 text-xs border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-[#2D3E50]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Category
              </label>
              <select
                value={customCategory}
                onChange={(e) => setCustomCategory(e.target.value)}
                className="w-full p-2 text-xs border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-[#2D3E50]"
              >
                {categoryOrder.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Veg / Non-Veg
              </label>
              <select
                value={customVegNonVeg}
                onChange={(e) => setCustomVegNonVeg(e.target.value)}
                className="w-full p-2 text-xs border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-[#2D3E50]"
              >
                <option value="Veg">Veg</option>
                <option value="Non-Veg">Non-Veg</option>
                <option value="Veg & Non-Veg">Veg & Non-Veg</option>
              </select>
            </div>

            {normalizeCategory(customCategory) === 'Live Stations' ? (
              <>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Setup (₹)
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={customSetup}
                    onChange={(e) => setCustomSetup(Number(e.target.value) || 0)}
                    className="w-full p-2 text-xs border border-gray-300 rounded-lg bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    No. of People
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={customNoPeople}
                    onChange={(e) => setCustomNoPeople(Number(e.target.value) || 0)}
                    className="w-full p-2 text-xs border border-gray-300 rounded-lg bg-white"
                  />
                </div>
              </>
            ) : (
              <>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Pcs. / Serving
                  </label>
                  <input
                    type="text"
                    value={customPcs}
                    onChange={(e) => setCustomPcs(e.target.value)}
                    placeholder="e.g. 6 PCS or 250 GMS"
                    className="w-full p-2 text-xs border border-gray-300 rounded-lg bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Portions
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={customPortions}
                    onChange={(e) => setCustomPortions(Number(e.target.value) || 1)}
                    className="w-full p-2 text-xs border border-gray-300 rounded-lg bg-white"
                  />
                </div>
              </>
            )}

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Rate (₹)
              </label>
              <input
                type="number"
                min="0"
                step="0.01"
                value={customRate}
                onChange={(e) => setCustomRate(e.target.value)}
                placeholder="₹0"
                className="w-full p-2 text-xs border border-gray-300 rounded-lg bg-white"
              />
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                className="w-full bg-[#2D3E50] hover:bg-[#1a2535] text-white font-bold text-xs py-2 px-3 rounded-lg transition-colors"
              >
                + Add Custom Item
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Other Services Section */}
      <div className="border-t border-[#2D3E50]/10 pt-6 mb-8">
        <h2 className="text-lg font-bold text-[#2D3E50] mb-3">Other Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              Chef + Servers + Helper
            </label>
            <input
              type="text"
              value={chefServers}
              onChange={(e) => setChefServers(e.target.value)}
              className="w-full p-2 text-sm border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              Table Décor (As Per Theme)
            </label>
            <input
              type="text"
              value={tableDecor}
              onChange={(e) => setTableDecor(e.target.value)}
              className="w-full p-2 text-sm border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              Cutlery & Crockery
            </label>
            <input
              type="text"
              value={cutlery}
              onChange={(e) => setCutlery(e.target.value)}
              className="w-full p-2 text-sm border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              Chaffing Dishes & Snack Warmers
            </label>
            <input
              type="text"
              value={chaffing}
              onChange={(e) => setChaffing(e.target.value)}
              className="w-full p-2 text-sm border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              Conveyance
            </label>
            <input
              type="text"
              value={conveyance}
              onChange={(e) => setConveyance(e.target.value)}
              className="w-full p-2 text-sm border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              Venue Charges
            </label>
            <input
              type="text"
              value={venueCharges}
              onChange={(e) => setVenueCharges(e.target.value)}
              className="w-full p-2 text-sm border border-gray-300 rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Summary & Total Table */}
      <div className="border-t border-[#2D3E50]/10 pt-6 mb-8">
        <h2 className="text-lg font-bold text-[#2D3E50] mb-3">Summary & Total</h2>
        <div className="overflow-x-auto border border-gray-200 rounded-xl">
          <table className="w-full text-xs">
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="p-2.5 font-medium text-gray-700">Subtotal (Items)</td>
                <td className="p-2.5 text-right font-semibold text-gray-900">
                  {formatCurrency(itemsSubtotal)}
                </td>
              </tr>
              <tr>
                <td className="p-2.5 text-gray-600">Chef + Servers + Helper</td>
                <td className="p-2.5 text-right text-gray-800">
                  {servicesValues.chef > 0 ? formatCurrency(servicesValues.chef) : chefServers || '—'}
                </td>
              </tr>
              <tr>
                <td className="p-2.5 text-gray-600">Table Décor (As Per Theme)</td>
                <td className="p-2.5 text-right text-gray-800">
                  {servicesValues.decor > 0 ? formatCurrency(servicesValues.decor) : tableDecor || '—'}
                </td>
              </tr>
              <tr>
                <td className="p-2.5 text-gray-600">Cutlery & Crockery</td>
                <td className="p-2.5 text-right text-gray-800">
                  {servicesValues.cutlery > 0 ? formatCurrency(servicesValues.cutlery) : cutlery || '—'}
                </td>
              </tr>
              <tr>
                <td className="p-2.5 text-gray-600">Chaffing Dishes & Snack Warmers</td>
                <td className="p-2.5 text-right text-gray-800">
                  {servicesValues.chaffing > 0 ? formatCurrency(servicesValues.chaffing) : chaffing || '—'}
                </td>
              </tr>
              <tr>
                <td className="p-2.5 text-gray-600">Conveyance</td>
                <td className="p-2.5 text-right text-gray-800">
                  {servicesValues.conveyance > 0 ? formatCurrency(servicesValues.conveyance) : conveyance || '—'}
                </td>
              </tr>
              <tr>
                <td className="p-2.5 text-gray-600">Venue Charges</td>
                <td className="p-2.5 text-right text-gray-800">
                  {servicesValues.venue > 0 ? formatCurrency(servicesValues.venue) : venueCharges || '—'}
                </td>
              </tr>
              <tr className="bg-gray-50 font-bold">
                <td className="p-2.5 text-gray-800">Subtotal (With Services)</td>
                <td className="p-2.5 text-right text-gray-900">
                  {formatCurrency(subtotalWithServices)}
                </td>
              </tr>
              <tr className="bg-gray-50 font-bold">
                <td className="p-2.5 text-gray-800">GST 5%</td>
                <td className="p-2.5 text-right text-gray-900">
                  {formatCurrency(gstAmount)}
                </td>
              </tr>
              <tr className="bg-[#2D3E50] text-white font-extrabold text-sm sm:text-base">
                <td className="p-3">TOTAL AMOUNT</td>
                <td className="p-3 text-right">{formatCurrency(grandTotal)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* To Be Provided By Host */}
      <div className="border-t border-[#2D3E50]/10 pt-6 mb-8">
        <h2 className="text-lg font-bold text-[#2D3E50] mb-3">To Be Provided By Host</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              Tables with covers for the food display
            </label>
            <input
              type="text"
              value={tables}
              onChange={(e) => setTables(e.target.value)}
              className="w-full p-2 text-sm border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              Kitchen Space & Table to be provided
            </label>
            <input
              type="text"
              value={kitchenSpace}
              onChange={(e) => setKitchenSpace(e.target.value)}
              className="w-full p-2 text-sm border border-gray-300 rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Action Buttons & Status */}
      <div className="border-t border-[#2D3E50]/10 pt-6 flex flex-col sm:flex-row items-center gap-4">
        <button
          type="button"
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm px-6 py-3 rounded-lg shadow transition-all flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Generating PDF...
            </>
          ) : (
            <>
              <FileCheck className="w-4 h-4" />
              Submit & Generate Quotation
            </>
          )}
        </button>

        <button
          type="button"
          onClick={handleDownloadJson}
          className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-sm px-4 py-3 rounded-lg border border-gray-300 transition-colors flex items-center justify-center gap-2"
        >
          <Download className="w-4 h-4" />
          Download JSON
        </button>

        {statusMessage && (
          <div className="text-xs sm:text-sm font-semibold text-[#2D3E50] flex items-center gap-2 animate-fadeIn">
            {isSubmitting && <Loader2 className="w-4 h-4 animate-spin text-amber-600" />}
            {statusMessage}
          </div>
        )}
      </div>

      {/* Image Gallery Modal */}
      {showImageModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center pb-3 border-b border-gray-200">
              <h3 className="font-bold text-lg text-gray-900">Manage Quotation Images</h3>
              <button
                type="button"
                onClick={() => setShowImageModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-gray-500 my-2">
              Select 9 images for the 3×3 grid in the quotation.
            </p>

            <div className="flex flex-col sm:flex-row gap-2 justify-between items-start sm:items-center my-3 bg-gray-50 p-2.5 rounded-lg">
              <label className="cursor-pointer bg-white border border-gray-300 hover:border-gray-400 text-gray-700 font-bold text-xs px-3 py-1.5 rounded-lg shadow-xs flex items-center gap-1.5">
                <Upload className="w-3.5 h-3.5" />
                <span>Upload New Images</span>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleUploadImages}
                  className="hidden"
                />
              </label>
              <div className="text-xs font-bold text-gray-700">
                {tempSelectedImages.length} / 9 selected
              </div>
            </div>

            {uploadProgress && (
              <div className="text-xs text-blue-600 font-semibold mb-2">
                {uploadProgress}
              </div>
            )}
            {uploadError && (
              <div className="text-xs text-red-600 font-semibold mb-2">
                {uploadError}
              </div>
            )}

            {/* Gallery Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 my-4">
              {galleryImages.map((url, idx) => {
                const isSelected = tempSelectedImages.includes(url)
                return (
                  <div
                    key={idx}
                    onClick={() => toggleGallerySelect(url)}
                    className={`relative rounded-lg overflow-hidden border-2 cursor-pointer transition-all aspect-square ${
                      isSelected
                        ? 'border-[#F6B27A] shadow-md ring-2 ring-[#F6B27A]/40'
                        : 'border-gray-200 hover:border-gray-400 opacity-80'
                    }`}
                  >
                    <img
                      src={url}
                      alt={`gallery-${idx}`}
                      className="w-full h-full object-cover"
                    />
                    {isSelected && (
                      <div className="absolute top-1.5 right-1.5 bg-[#F6B27A] text-[#2D3E50] rounded-full w-5 h-5 flex items-center justify-center font-bold text-xs shadow-xs">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            <div className="flex justify-end gap-2 pt-3 border-t border-gray-200">
              <button
                type="button"
                onClick={() => setShowImageModal(false)}
                className="text-xs font-semibold px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedImages(tempSelectedImages)
                  setShowImageModal(false)
                }}
                className="text-xs font-bold px-4 py-2 rounded-lg bg-[#2D3E50] text-white hover:bg-[#1a2535]"
              >
                Save Selection
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PDF Ready Modal */}
      {pdfModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 text-center shadow-2xl">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
              <FileCheck className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-xl text-gray-900 mb-1">
              Quotation Generated!
            </h3>
            <p className="text-sm text-gray-600 mb-5">
              Your quotation PDF has been successfully processed and is ready.
            </p>

            <div className="flex flex-col sm:flex-row gap-2.5 justify-center">
              <a
                href={pdfDownloadUrl}
                download={pdfFileName}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2D3E50] hover:bg-[#1a2535] text-white font-bold text-sm px-6 py-2.5 rounded-lg inline-flex items-center justify-center gap-2 transition-colors"
              >
                <Download className="w-4 h-4" /> Download PDF
              </a>
              <button
                type="button"
                onClick={() => setPdfModalOpen(false)}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-sm px-4 py-2.5 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
