'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

// 1. Data Structure with your Cloudinary Links
const GALLERY_DATA = [
  // --- VENUE IMAGES ---
  { id: 1, category: 'venue', src: 'https://res.cloudinary.com/dwffrfajl/image/upload/v1773428481/Venue_Img_1_erlysh.jpg', alt: 'Little Jalebis Party Venue', size: 'large' },
  { id: 2, category: 'venue', src: 'https://res.cloudinary.com/dwffrfajl/image/upload/v1773428485/Venue_Img_2_lp20j3.jpg', alt: 'Indoor Party Area', size: 'small' },
  { id: 3, category: 'venue', src: 'https://res.cloudinary.com/dwffrfajl/image/upload/v1773428482/Venue_Img_3_azcqrh.jpg', alt: 'Kids Play Zone', size: 'medium' },
  { id: 4, category: 'venue', src: 'https://res.cloudinary.com/dwffrfajl/image/upload/v1773428485/Venue_Img_4_l3elwf.jpg', alt: 'Venue Decor', size: 'small' },
  { id: 5, category: 'venue', src: 'https://res.cloudinary.com/dwffrfajl/image/upload/v1773428480/Venue_Img_5_ovdiiy.jpg', alt: 'Celebration Space', size: 'small' },
  { id: 6, category: 'venue', src: 'https://res.cloudinary.com/dwffrfajl/image/upload/v1773428480/Venue_Img_6_swsmwv.jpg', alt: 'Activity Corner', size: 'medium' },
  { id: 7, category: 'venue', src: 'https://res.cloudinary.com/dwffrfajl/image/upload/v1773428480/Venue_Img_7_hk6pyv.jpg', alt: 'Venue Lighting', size: 'small' },
  { id: 8, category: 'venue', src: 'https://res.cloudinary.com/dwffrfajl/image/upload/v1773428482/Venue_Img_8_ro4rso.jpg', alt: 'Party Setup', size: 'small' },

  // --- CATERING IMAGES ---
  { id: 9, category: 'catering', src: 'https://res.cloudinary.com/dwffrfajl/image/upload/v1773428715/Catering_Img_1_zplwhq.jpg', alt: 'Kid-Friendly Catering', size: 'large' },
  { id: 10, category: 'catering', src: 'https://res.cloudinary.com/dwffrfajl/image/upload/v1773428715/Catering_Img_2_dd4six.jpg', alt: 'Fresh Party Snacks', size: 'small' },
  { id: 11, category: 'catering', src: 'https://res.cloudinary.com/dwffrfajl/image/upload/v1773428715/Catering_Img_3_f0mwrm.jpg', alt: 'Delicious Bites', size: 'medium' },
  { id: 12, category: 'catering', src: 'https://res.cloudinary.com/dwffrfajl/image/upload/v1773428713/Catering_Img_4_rynoqn.jpg', alt: 'Hygienic Food Setup', size: 'small' },
  { id: 13, category: 'catering', src: 'https://res.cloudinary.com/dwffrfajl/image/upload/v1773428713/Catering_Img_5_mi7gul.jpg', alt: 'Custom Menu Options', size: 'small' },
  { id: 14, category: 'catering', src: 'https://res.cloudinary.com/dwffrfajl/image/upload/v1773428713/Catering_Img_6_c0lus9.jpg', alt: 'Party Catering Service', size: 'medium' },
  { id: 15, category: 'catering', src: 'https://res.cloudinary.com/dwffrfajl/image/upload/v1773428713/Catering_Img_7_yrwgrj.jpg', alt: 'Healthy Kids Meals', size: 'small' },
  { id: 16, category: 'catering', src: 'https://res.cloudinary.com/dwffrfajl/image/upload/v1773428713/Catering_Img_8_vge2xr.jpg', alt: 'Dessert Station', size: 'small' },
  { id: 17, category: 'catering', src: 'https://res.cloudinary.com/dwffrfajl/image/upload/v1773428716/Catering_Img_9_d17xod.jpg', alt: 'Signature Drinks', size: 'small' },
]

const GalleryComponent = () => {
  const [filter, setFilter] = useState<'all' | 'catering' | 'venue'>('all')

  const filteredImages = filter === 'all' 
    ? GALLERY_DATA 
    : GALLERY_DATA.filter(img => img.category === filter)

  return (
    <section className="py-24 px-6 bg-[#FFF9F2]" style={{ fontFamily: "'Comic Neue', cursive" }}>
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header --- */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black text-[#333333] mb-8">
            Our <span className="text-[#F26522]">Magic</span> Moments
          </h2>
          
          {/* --- Filter Buttons --- */}
          <div className="flex flex-wrap justify-center gap-4">
            {['all', 'catering', 'venue'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-10 py-4 rounded-2xl font-black text-xl transition-all border-4 border-[#333333] ${
                  filter === cat 
                    ? 'bg-[#FFCB05] shadow-[6px_6px_0px_#333333] -translate-y-1' 
                    : 'bg-white opacity-60 hover:opacity-100 hover:shadow-[4px_4px_0px_#333333]'
                }`}
              >
                {cat === 'all' ? 'Everything' : cat === 'venue' ? 'Party House' : 'Catering'}
              </button>
            ))}
          </div>
        </div>

        {/* --- Gallery Grid (Bento Style) --- */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]"
        >
          <AnimatePresence mode='popLayout'>
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, ease: "circOut" }}
                className={`relative rounded-[2.5rem] overflow-hidden border-4 border-[#333333] group bg-white ${
                  image.size === 'large' ? 'md:row-span-3 md:col-span-2' : 
                  image.size === 'medium' ? 'md:col-span-2 md:row-span-2' : 
                  'md:col-span-1 md:row-span-1'
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                
                {/* --- Subtle Hover Overlay --- */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <p className="text-white font-black text-lg">
                    {image.alt}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default GalleryComponent