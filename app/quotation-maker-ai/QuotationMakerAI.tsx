'use client'

import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react'
import {
  MenuItem,
  menuItems,
  categoryOrder,
  normalizeCategory,
} from '@/lib/menuData'
import { predictPortions } from '@/lib/aiQuotationModel'
import {
  Search,
  RefreshCw,
  Upload,
  Image as ImageIcon,
  Check,
  Trash2,
  Download,
  X,
  Loader2,
  Sparkles,
  Lock,
  FileCheck,
  Users,
  Calendar,
  Clock,
  MapPin,
  Phone,
  User,
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

function formatServiceForPayload(val: string | number | undefined | null): string {
  if (!val) return ''
  const str = String(val).trim()
  const num = extractNumber(str)
  if (num > 0) {
    return `₹${num}`
  }
  return str
}

interface QuotationSummary {
  quotation_id: string
  host_name?: string
  event_date?: string
  created_at?: string
}

export default function QuotationMakerAI() {
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
  const [kidsCount, setKidsCount] = useState<number>(15)
  const [adultsCount, setAdultsCount] = useState<number>(10)
  const [location, setLocation] = useState('')
  const [quoteId, setQuoteId] = useState('')

  // Derived PAX string
  const pax = useMemo(() => {
    return `${kidsCount} Kids ${adultsCount} Adults`
  }, [kidsCount, adultsCount])

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

  // --- Selected Item Identifiers ---
  // In AI mode, user selects items by their exact menu index
  const [selectedMenuIndices, setSelectedMenuIndices] = useState<number[]>([])

  // --- Services (Editable standard defaults) ---
  const [chefServers, setChefServers] = useState('₹4,000')
  const [tableDecor, setTableDecor] = useState('Included')
  const [cutlery, setCutlery] = useState('₹100')
  const [chaffing, setChaffing] = useState('₹100')
  const [conveyance, setConveyance] = useState('As Per Actual')
  const [venueCharges, setVenueCharges] = useState('₹0')

  // --- Host Requirements ---
  const [tables, setTables] = useState('As Required')
  const [kitchenSpace, setKitchenSpace] = useState('As Required')

  // --- Status & PDF Modal State ---
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')
  const [pdfModalOpen, setPdfModalOpen] = useState(false)
  const [pdfDownloadUrl, setPdfDownloadUrl] = useState('')
  const [pdfFileName, setPdfFileName] = useState('quotation.pdf')

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

  useEffect(() => {
    fetchQuotationsList()
  }, [fetchQuotationsList])

  // Handle Quotation search
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
      } catch {}
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

  // Auto Quote ID generation
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
    setKidsCount(15)
    setAdultsCount(10)
    setLocation('')
    setQuoteId('')
    setSelectedMenuIndices([])
    setSelectedImages(DEFAULT_GALLERY_IMAGES)
    setSelectedQuoteIdToLoad('')
    setStatusMessage('')
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

      if (quote.event_date) {
        const parts = quote.event_date.split('/')
        if (parts.length === 3) {
          setEventDate(`${parts[2]}-${parts[1]}-${parts[0]}`)
        } else {
          setEventDate(quote.event_date)
        }
      }
      setHostName(quote.host_name || '')
      setMobile(quote.mobile_no || '')
      setLocation(quote.location || '')
      setQuoteId(quote.quotation_id || '')

      if (quote.time) {
        const m = quote.time.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i)
        if (m) {
          let h = parseInt(m[1])
          const min = m[2]
          const ampm = m[3].toUpperCase()
          if (ampm === 'PM' && h !== 12) h += 12
          if (ampm === 'AM' && h === 12) h = 0
          setTime(`${String(h).padStart(2, '0')}:${min}`)
        } else {
          setTime(quote.time)
        }
      }

      // Parse pax numbers if present
      if (quote.pax) {
        const p = String(quote.pax).toLowerCase()
        const kMatch = p.match(/(\d+)\s*kids?/)
        const aMatch = p.match(/(\d+)\s*adults?/)
        if (kMatch) setKidsCount(parseInt(kMatch[1]))
        if (aMatch) setAdultsCount(parseInt(aMatch[1]))
      }

      setChefServers(quote.chef_servers ?? quote.ChefServers ?? '₹4,000')
      setTableDecor(quote.table_decor ?? quote.TableDecor ?? 'Included')
      setCutlery(quote.cutlery ?? quote.Cutlery ?? '₹100')
      setChaffing(quote.chaffing ?? quote.Chaffing ?? '₹100')
      setConveyance(quote.conveyance ?? quote.Conveyance ?? 'As Per Actual')
      setVenueCharges(quote.venue_charges ?? quote.VenueCharges ?? '₹0')

      setTables(quote.tables ?? quote.Tables ?? 'As Required')
      setKitchenSpace(quote.kitchen_space ?? quote.KitchenSpace ?? 'As Required')

      // Map loaded items to menu indices
      let rawItems = quote.items
      if (typeof rawItems === 'string') {
        try {
          rawItems = JSON.parse(rawItems)
        } catch {
          rawItems = []
        }
      }
      if (Array.isArray(rawItems)) {
        const indices: number[] = []
        rawItems.forEach((it: any) => {
          const foundIdx = menuItems.findIndex((m) => m.Name === it.Name)
          if (foundIdx !== -1 && !indices.includes(foundIdx)) {
            indices.push(foundIdx)
          }
        })
        setSelectedMenuIndices(indices)
      }

      setStatusMessage('✓ Quotation loaded successfully!')
      setTimeout(() => setStatusMessage(''), 3000)
    } catch (err: any) {
      setStatusMessage(`Error loading quotation: ${err.message}`)
    }
  }

  // Toggle item selection
  const toggleMenuItem = (originalIndex: number) => {
    setSelectedMenuIndices((prev) => {
      if (prev.includes(originalIndex)) {
        return prev.filter((i) => i !== originalIndex)
      } else {
        return [...prev, originalIndex]
      }
    })
  }

  // Computed item list using the AI Linear Regression Model
  const computedItems = useMemo(() => {
    return selectedMenuIndices.map((idx) => {
      const item = menuItems[idx]
      const normCat = normalizeCategory(item.Category)
      const isLive = normCat === 'Live Stations'

      // Predict portions using the linear regression model:
      // portions = w_adult * adults + w_kids * kids + bias
      const aiPortions = predictPortions(item.Name, normCat, kidsCount, adultsCount)

      // Calculate total pieces if Calculate is "1"
      let calculatedPcs = ''
      if (item.Calculate === '1' && item.PcsDisplay) {
        const baseNum = extractNumber(item.PcsDisplay)
        calculatedPcs = String(baseNum * aiPortions)
      }

      // Amount:
      // Regular: portions * rate
      // Live Stations: Setup + (rate * aiPortions)
      const amount = isLive
        ? (item.Setup || 0) + (item.Rate || 0) * aiPortions
        : aiPortions * (item.Rate || 0)

      return {
        menuIdx: idx,
        item,
        normCategory: normCat,
        isLive,
        aiPortions,
        calculatedPcs,
        amount,
      }
    })
  }, [selectedMenuIndices, kidsCount, adultsCount])

  // Group items by standard category sequence
  const groupedItems = useMemo(() => {
    const map = new Map<string, typeof computedItems>()
    categoryOrder.forEach((cat) => map.set(cat, []))

    computedItems.forEach((comp) => {
      const cat = comp.normCategory
      if (!map.has(cat)) map.set(cat, [])
      map.get(cat)!.push(comp)
    })

    return Array.from(map.entries()).filter(([_, items]) => items.length > 0)
  }, [computedItems])

  // Subtotal of Items
  const itemsSubtotal = useMemo(() => {
    return computedItems.reduce((sum, it) => sum + it.amount, 0)
  }, [computedItems])

  // Services values
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

  const servicesTotal = useMemo(() => {
    return (
      servicesValues.chef +
      servicesValues.decor +
      servicesValues.cutlery +
      servicesValues.chaffing +
      servicesValues.conveyance +
      servicesValues.venue
    )
  }, [servicesValues])

  const subtotalWithServices = itemsSubtotal + servicesTotal
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

  // Group filtered menu list by category order
  const groupedFilteredMenuList = useMemo(() => {
    const map = new Map<string, Array<{ item: MenuItem; originalIndex: number }>>()
    const categoriesToInclude = currentCategoryFilter
      ? [currentCategoryFilter]
      : categoryOrder

    categoriesToInclude.forEach((cat) => map.set(cat, []))

    filteredMenuList.forEach((item, mapIdx) => {
      const originalIndex = menuItems.findIndex(
        (m) =>
          m.Name === item.Name &&
          m.VegNonVeg === item.VegNonVeg &&
          m.Category === item.Category
      )
      const effectiveIndex = originalIndex !== -1 ? originalIndex : mapIdx
      const cat = normalizeCategory(item.Category)
      if (!map.has(cat)) map.set(cat, [])
      map.get(cat)!.push({ item, originalIndex: effectiveIndex })
    })

    return Array.from(map.entries()).filter(([_, items]) => items.length > 0)
  }, [filteredMenuList, currentCategoryFilter])

  // Build payload for n8n in category order with Table Snacks -> Snacks
  const buildPayload = () => {
    const itemsPayload: any[] = []

    groupedItems.forEach(([_, groupItems]) => {
      groupItems.forEach(({ item, isLive, aiPortions, calculatedPcs, amount }) => {
        const normCat = normalizeCategory(item.Category)
        const categoryForN8n = normCat === 'Table Snacks' ? 'Snacks' : normCat

        if (isLive) {
          itemsPayload.push({
            Name: item.Name,
            Description: item.Description || '',
            Category: categoryForN8n,
            VegNonVeg: item.VegNonVeg || 'Veg',
            Setup: item.Setup || 0,
            Rate: item.Rate || 0,
            NoOfPeople: aiPortions,
            Amount: amount,
          })
        } else {
          let pcsDisplay = item.PcsDisplay || ''
          if (item.Calculate === '1') {
            const baseNum = extractNumber(item.PcsDisplay)
            pcsDisplay = String(baseNum * aiPortions)
          }
          itemsPayload.push({
            Name: item.Name,
            Description: item.Description || '',
            Category: categoryForN8n,
            VegNonVeg: item.VegNonVeg || 'Veg',
            Portions: aiPortions,
            PcsDisplay: pcsDisplay,
            Unit: item.Unit || 'PCS',
            Rate: item.Rate || 0,
            Amount: amount,
            Calculate: item.Calculate || '0',
          })
        }
      })
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
      GrandTotal: subtotalWithServices,
      ChefServers: formatServiceForPayload(chefServers),
      TableDecor: formatServiceForPayload(tableDecor),
      Cutlery: formatServiceForPayload(cutlery),
      Chaffing: formatServiceForPayload(chaffing),
      Conveyance: formatServiceForPayload(conveyance),
      VenueCharges: formatServiceForPayload(venueCharges),
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
    setStatusMessage('Generating AI quotation PDF via n8n...')

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

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl border border-[#2D3E50]/10 p-4 sm:p-8 text-[#2D3E50]">
      {/* Header */}
      <div className="border-b border-[#2D3E50]/10 pb-6 mb-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1a3a3a] tracking-tight">
                Little Jalebis AI Quotation Maker
              </h1>
              <span className="bg-[#FFCB05] text-[#2D3E50] text-xs font-black px-2 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                <Sparkles className="w-3 h-3" /> AI Model
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Select dishes — quantities are estimated automatically by our trained catering model, with locked official rates.
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
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault()
                    if (selectedQuoteIdToLoad) {
                      loadQuotation(selectedQuoteIdToLoad)
                    } else if (displayedQuotations.length > 0) {
                      const firstId = displayedQuotations[0].quotation_id
                      setSelectedQuoteIdToLoad(firstId)
                      loadQuotation(firstId)
                    }
                  }
                }}
                placeholder="Search quotations by name, date, ID..."
                className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#2D3E50]"
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
              {displayedQuotations.map((q, idx) => (
                <option
                  key={`${q.quotation_id || 'quote'}-${idx}`}
                  value={q.quotation_id}
                >
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
              title="Refresh list"
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-lg transition-colors"
            >
              <RefreshCw
                className={`w-4 h-4 ${loadingQuotations ? 'animate-spin' : ''}`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Guest Count & AI Estimator Banner */}
      <div className="mb-6 p-4 rounded-xl bg-linear-to-r from-amber-50 to-orange-50 border border-amber-200">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-[#FFCB05] text-[#2D3E50] flex items-center justify-center font-bold shadow-xs">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-extrabold text-sm text-gray-900">
                AI Guest Count & Portion Engine
              </h2>
              <p className="text-xs text-gray-600">
                Adjust Kids and Adults count below — dish portions update automatically using linear regression.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white px-4 py-2 rounded-xl border border-amber-300 shadow-xs">
            <div className="flex items-center gap-2">
              <label className="text-xs font-bold text-gray-700">Kids:</label>
              <input
                type="number"
                min="0"
                value={kidsCount}
                onChange={(e) => setKidsCount(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-16 p-1.5 text-center text-sm font-bold border border-gray-300 rounded-lg focus:outline-none focus:border-[#2D3E50]"
              />
            </div>
            <div className="h-5 w-px bg-gray-300" />
            <div className="flex items-center gap-2">
              <label className="text-xs font-bold text-gray-700">Adults:</label>
              <input
                type="number"
                min="0"
                value={adultsCount}
                onChange={(e) => setAdultsCount(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-16 p-1.5 text-center text-sm font-bold border border-gray-300 rounded-lg focus:outline-none focus:border-[#2D3E50]"
              />
            </div>
            <div className="h-5 w-px bg-gray-300" />
            <span className="text-xs font-mono font-bold text-[#2D3E50] whitespace-nowrap">
              Total: {kidsCount + adultsCount} Pax
            </span>
          </div>
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
          <label className="block text-xs font-bold text-gray-700 mb-1 flex items-center gap-1">
            <Lock className="w-3 h-3 text-gray-400" /> Quote ID
          </label>
          <input
            type="text"
            value={quoteId}
            readOnly
            placeholder="Auto-generated on Host Name"
            className="w-full p-2.5 text-sm border border-gray-200 rounded-lg font-mono bg-gray-100 text-gray-700 cursor-not-allowed select-all"
          />
        </div>

        {/* Images Selection */}
        <div className="sm:col-span-3 flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-2">
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
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-bold text-[#2D3E50]">
            Select Items from Menu
          </h2>
          <span className="text-xs text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 flex items-center gap-1">
            <Lock className="w-3 h-3" /> Rates & Setup Locked
          </span>
        </div>

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
            placeholder="Search by dish name or ingredient..."
            className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#2D3E50]"
          />
        </div>

        {/* Menu Items Scroll Box */}
        <div className="max-h-80 overflow-y-auto border border-gray-200 rounded-xl p-3 bg-gray-50/50">
          {groupedFilteredMenuList.length === 0 ? (
            <div className="text-center py-6 text-sm text-gray-400">
              No menu items match your search.
            </div>
          ) : (
            <div className="space-y-4">
              {groupedFilteredMenuList.map(([category, items]) => (
                <div key={category} className="space-y-2">
                  <div className="flex items-center gap-2 px-1 pt-1">
                    <span className="text-xs font-black uppercase tracking-wider text-[#2D3E50] bg-gray-200/90 px-2.5 py-0.5 rounded-md border border-gray-300">
                      {category}
                    </span>
                    <div className="flex-1 h-px bg-gray-200" />
                    <span className="text-[10px] font-semibold text-gray-500">
                      {items.length} {items.length === 1 ? 'item' : 'items'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {items.map(({ item, originalIndex }) => {
                      const isSelected = selectedMenuIndices.includes(originalIndex)
                      const isNonVeg = item.VegNonVeg?.toLowerCase().includes('non')

                      return (
                        <label
                          key={`${item.Category}-${item.Name}-${item.VegNonVeg}-${originalIndex}`}
                          className={`flex items-start gap-2.5 p-2 rounded-lg border text-xs cursor-pointer transition-colors ${
                            isSelected
                              ? 'bg-amber-50 border-amber-300 shadow-xs'
                              : 'bg-white border-gray-200 hover:bg-gray-50'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => toggleMenuItem(originalIndex)}
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
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Selected Items Table (Locked Prices + AI Predicted Portions) */}
      <div className="border-t border-[#2D3E50]/10 pt-6 mb-8">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold text-[#2D3E50]">
              Selected Items ({computedItems.length})
            </h2>
            <span className="text-xs bg-amber-100 text-amber-900 font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Auto-filled by Model
            </span>
          </div>
          <span className="text-xs text-gray-500">
            Portions dynamically scale with PAX count
          </span>
        </div>

        <div className="overflow-x-auto border border-gray-200 rounded-xl">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700 font-bold border-b border-gray-300">
                <th className="p-2.5 min-w-[220px]">Item</th>
                <th className="p-2.5 w-24 text-center">AI Portions</th>
                <th className="p-2.5 w-24 text-right">Locked Rate</th>
                <th className="p-2.5 w-24 text-right">Amount</th>
                <th className="p-2.5 w-24 text-center">Pcs / Serving</th>
                <th className="p-2.5 w-16 text-center">Remove</th>
              </tr>
            </thead>
            <tbody>
              {computedItems.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-gray-400 text-sm">
                    No items selected. Pick dishes from the menu above.
                  </td>
                </tr>
              ) : (
                groupedItems.map(([category, items]) => {
                  return (
                    <React.Fragment key={category}>
                      {/* Category Header */}
                      <tr className="bg-gray-100/80 font-bold text-gray-800 border-t border-b border-gray-300">
                        <td colSpan={6} className="p-2 text-xs uppercase tracking-wider">
                          {category}
                        </td>
                      </tr>

                      {/* Items */}
                      {items.map(({ menuIdx, item, isLive, aiPortions, calculatedPcs, amount }) => {
                        const isNonVeg = item.VegNonVeg?.toLowerCase().includes('non')

                        return (
                          <tr
                            key={`${item.Name}-${menuIdx}`}
                            className="border-b border-gray-200 hover:bg-gray-50/50"
                          >
                            <td className="p-2.5">
                              <div className="flex items-center gap-1.5">
                                <span
                                  className={`w-2 h-2 rounded-full flex-shrink-0 ${
                                    isNonVeg ? 'bg-red-500' : 'bg-emerald-600'
                                  }`}
                                />
                                <span className="font-bold text-gray-900">
                                  {item.Name}
                                </span>
                              </div>
                              {item.Description && (
                                <p className="text-[11px] text-gray-500 mt-0.5 line-clamp-1">
                                  {item.Description}
                                </p>
                              )}
                            </td>

                            {/* AI Estimated Portions */}
                            <td className="p-2.5 text-center">
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-amber-50 text-amber-900 border border-amber-200 rounded-lg font-black text-xs">
                                <Sparkles className="w-3 h-3 text-amber-600" />
                                {aiPortions} {isLive ? 'Guests' : 'Portions'}
                              </span>
                            </td>

                            {/* Locked Rate */}
                            <td className="p-2.5 text-right font-semibold text-gray-700 whitespace-nowrap">
                              <span className="inline-flex items-center gap-1 text-gray-600 font-mono text-xs">
                                <Lock className="w-2.5 h-2.5 text-gray-400" />
                                {isLive ? (
                                  item.Setup ? `Setup ${formatCurrency(item.Setup)}` : formatCurrency(item.Rate)
                                ) : (
                                  formatCurrency(item.Rate)
                                )}
                              </span>
                            </td>

                            {/* Amount */}
                            <td className="p-2.5 text-right font-bold text-gray-900 whitespace-nowrap">
                              {formatCurrency(amount)}
                            </td>

                            {/* Pieces / Serving */}
                            <td className="p-2.5 text-center text-gray-600">
                              {calculatedPcs ? (
                                <div>
                                  <span className="font-bold text-gray-900">
                                    {calculatedPcs} {item.Unit}
                                  </span>
                                  <div className="text-[10px] text-gray-400">
                                    ({item.PcsDisplay} {item.Unit} × {aiPortions})
                                  </div>
                                </div>
                              ) : item.PcsDisplay ? (
                                `${item.PcsDisplay} ${item.Unit}`
                              ) : (
                                '—'
                              )}
                            </td>

                            {/* Delete Action */}
                            <td className="p-2.5 text-center">
                              <button
                                type="button"
                                onClick={() => toggleMenuItem(menuIdx)}
                                className="p-1 text-red-500 hover:text-red-700 transition-colors"
                                title="Remove item"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </td>
                          </tr>
                        )
                      })}
                    </React.Fragment>
                  )
                })
              )}
            </tbody>
            {computedItems.length > 0 && (
              <tfoot>
                <tr className="bg-gray-100 font-bold text-gray-900 border-t-2 border-gray-300">
                  <td colSpan={3} className="p-2.5 text-right">
                    Total Items Amount:
                  </td>
                  <td className="p-2.5 text-right text-sm text-[#2D3E50]">
                    {formatCurrency(itemsSubtotal)}
                  </td>
                  <td colSpan={2} className="p-2.5"></td>
                </tr>
              </tfoot>
            )}
          </table>
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
              className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D3E50] focus:border-transparent outline-none"
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
              className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D3E50] focus:border-transparent outline-none"
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
              className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D3E50] focus:border-transparent outline-none"
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
              className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D3E50] focus:border-transparent outline-none"
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
              className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D3E50] focus:border-transparent outline-none"
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
              className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D3E50] focus:border-transparent outline-none"
            />
          </div>
        </div>
      </div>

      {/* Services, Taxes & Grand Total */}
      <div className="border-t border-[#2D3E50]/10 pt-6 mb-8">
        <h2 className="text-lg font-bold text-[#2D3E50] mb-3">
          Summary & Total
        </h2>
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
              className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D3E50] focus:border-transparent outline-none"
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
              className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D3E50] focus:border-transparent outline-none"
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
              Generate AI Quotation PDF
            </>
          )}
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
                  onChange={(e) => {
                    const files = e.target.files
                    if (!files || files.length === 0) return
                    setUploadError('')
                    setUploadProgress(`Uploading ${files.length} image(s)...`)

                    const uploaded: string[] = []
                    Array.from(files).forEach(async (file: File) => {
                      const fd = new FormData()
                      fd.append('file', file)
                      fd.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                      try {
                        const res = await fetch(CLOUDINARY_UPLOAD_URL, {
                          method: 'POST',
                          body: fd,
                        })
                        const d = await res.json()
                        if (d.secure_url || d.url) {
                          uploaded.push(d.secure_url || d.url)
                          setGalleryImages((prev) => [d.secure_url || d.url, ...prev])
                        }
                      } catch (err) {
                        console.error('Upload failed:', err)
                      }
                    })
                    setUploadProgress('')
                    e.target.value = ''
                  }}
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
                    onClick={() => {
                      if (tempSelectedImages.includes(url)) {
                        setTempSelectedImages((prev) => prev.filter((u) => u !== url))
                      } else {
                        if (tempSelectedImages.length >= 9) {
                          alert('You can select up to 9 images only.')
                          return
                        }
                        setTempSelectedImages((prev) => [...prev, url])
                      }
                    }}
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
              Your AI-estimated quotation PDF has been processed and is ready to download.
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
