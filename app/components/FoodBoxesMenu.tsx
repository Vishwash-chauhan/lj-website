'use client'

import React from 'react'

const CompactFoodMenu = () => {
  const tiers = [
    { 
      name: "Happy Box", 
      price: "₹385", 
      detail: "Snacks + 1 Main + 1 Dessert",
      bestFor: "Perfect for lighter appetites"
    },
    { 
      name: "Super Happy Box", 
      price: "₹445", 
      detail: "1 Treat + 2 Snacks + 1 Main + 1 Dessert",
      bestFor: "The ultimate party feast"
    }
  ]

  return (
    <section className="py-12 px-4 bg-[#FFF9F2]" style={{ fontFamily: "'Comic Neue', cursive" }}>
      <div className="max-w-6xl mx-auto">
        
        {/* Header - Richer Text to Fill Space */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6 border-b-4 border-[#333333] pb-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black text-[#333333] leading-tight">
              Tailored <span className="text-[#F26522]">Kiddie Boxes</span>
            </h2>
            <p className="font-bold text-lg opacity-80 mt-2">
              Delicious, nutritious, and mess-free meals delivered in our signature eco-friendly packaging. 
              Pick your tier and customize your flavors below!
            </p>
          </div>
          <div className="flex gap-4">
            {tiers.map((t, i) => (
              <div key={i} className="bg-white border-2 border-[#333333] p-4 rounded-2xl shadow-[6px_6px_0px_#FFCB05] flex flex-col items-center min-w-[140px]">
                <span className="text-xs font-black uppercase text-[#F26522] mb-1">{t.name}</span>
                <span className="text-3xl font-black text-[#333333]">{t.price}</span>
                <span className="text-[10px] font-bold opacity-60 mt-1">{t.detail}</span>
              </div>
            ))}
          </div>
        </div>

        {/* The Grid - Packed with Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Column 1: The Fun Extras */}
          <div className="flex flex-col gap-6">
            <div className="bg-white border-2 border-[#333333] rounded-[2rem] p-6 shadow-[6px_6px_0px_#333333] hover:translate-y-[-4px] transition-transform">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-black text-xl text-[#F26522]">🍟 TREATS</h4>
                <span className="text-[10px] bg-[#FFCB05] px-2 py-1 rounded-md font-black italic">Salty & Crunchy</span>
              </div>
              <ul className="text-sm font-bold space-y-2 opacity-80">
                <li className="flex items-center gap-2"><span>✨</span> French Fries</li>
                <li className="flex items-center gap-2"><span>✨</span> Peri Peri Fries</li>
                <li className="flex items-center gap-2"><span>✨</span> Popcorn Party Pops</li>
                <li className="flex items-center gap-2"><span>✨</span> Roasted Butter Makhanas</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-[#333333] rounded-[2rem] p-6 shadow-[6px_6px_0px_#333333] hover:translate-y-[-4px] transition-transform">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-black text-xl text-[#F26522]">🍩 DESSERTS</h4>
                <span className="text-[10px] bg-[#FFCB05] px-2 py-1 rounded-md font-black italic">Sweet Finisher</span>
              </div>
              <ul className="text-sm font-bold space-y-2 opacity-80">
                <li className="flex items-center gap-2"><span>🍭</span> Chocolava Cake Delight</li>
                <li className="flex items-center gap-2"><span>🍭</span> Chocolate Donut</li>
                <li className="flex items-center gap-2"><span>🍭</span> Chocolate Brownie</li>
                <li className="flex items-center gap-2"><span>🍭</span> Chocolate Mouse Cups</li>
                <li className="flex items-center gap-2"><span>🍭</span> Muffin Cakes (Any Flavor)</li>
                <li className="flex items-center gap-2"><span>🍭</span> Signature Large Cookie</li>
              </ul>
            </div>
          </div>

          {/* Column 2: The Snacks (Veg & Non-Veg) */}
          <div className="bg-white border-2 border-[#333333] rounded-[2rem] p-6 shadow-[6px_6px_0px_#333333] hover:translate-y-[-4px] transition-transform flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-black text-xl text-[#F26522]">🥟 SNACKS</h4>
              <span className="text-[10px] bg-[#FFCB05] px-2 py-1 rounded-md font-black italic">Perfect Bites</span>
            </div>
            
            <div className="space-y-6">
              <div>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-[10px] font-black uppercase mb-3 inline-block">Garden Fresh (Veg)</span>
                <div className="grid grid-cols-1 gap-2 text-xs font-bold opacity-80">
                  <span>• Mini Pizza Rounds</span>
                  <span>• Crispy Veg Springrolls</span>
                  <span>• Cheese Cigar Rolls</span>
                  <span>• Veggie Finger Bites</span>
                  <span>• Cheese Corn Nuggets</span>
                  <span>• Cheese Delight Balls</span>
                  <span>• Hara Bhara Kebabs</span>
                  <span>• Mini Bata Vadas</span>
                </div>
              </div>
              <div className="border-t-2 border-dashed border-[#333333]/10 pt-4">
                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-[10px] font-black uppercase mb-3 inline-block">Protein Packed (Non-Veg)</span>
                <div className="grid grid-cols-1 gap-2 text-xs font-bold opacity-80">
                  <span>• Starship Chicken Nuggets</span>
                  <span>• Chicken Popcorn Crunchies</span>
                  <span>• Chicken Adventure Strips</span>
                  <span>• Chicken Wings of Wonder</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: The Main Event */}
          <div className="bg-white border-2 border-[#333333] rounded-[2rem] p-6 shadow-[6px_6px_0px_#333333] hover:translate-y-[-4px] transition-transform flex flex-col">
             <div className="flex justify-between items-center mb-4">
              <h4 className="font-black text-xl text-[#F26522]">🍔 MAIN COURSE</h4>
              <span className="text-[10px] bg-[#FFCB05] px-2 py-1 rounded-md font-black italic">The Big Meal</span>
            </div>

            <div className="space-y-6">
              <div>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-[10px] font-black uppercase mb-3 inline-block">Veggie Classics</span>
                <div className="grid grid-cols-1 gap-2 text-xs font-bold opacity-80">
                  <span>• Classic Masala Maggi</span>
                  <span>• Veg Haaka Noodles</span>
                  <span>• Golden Veg Puffs (2)</span>
                  <span>• Creamy Mac in Cheese</span>
                  <span>• White/Red/Mix Sauce Pasta</span>
                  <span>• Fresh Vegetable Sandwich</span>
                  <span>• Veggie Delight Hotdog</span>
                  <span>• Veg Snacker Burger</span>
                </div>
              </div>
              <div className="border-t-2 border-dashed border-[#333333]/10 pt-4">
                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-[10px] font-black uppercase mb-3 inline-block">Non-Veg Favorites</span>
                <div className="grid grid-cols-1 gap-2 text-xs font-bold opacity-80">
                  <span>• Classic Chicken Sandwich</span>
                  <span>• Chicken Zippy Burger</span>
                  <span>• Creamy Chicken Mayo Roll</span>
                  <span>• Jumbo Chicken Hot Dog</span>
                  <span>• Savory Egg-Fried Rice</span>
                  <span>• Authentic Chicken Noodles</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* New "How it Works" Bottom Bar to fill space professionally */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 border-t-4 border-[#333333] pt-8">
           <div className="flex items-center gap-4">
              <span className="text-2xl">📦</span>
              <p className="text-xs font-bold leading-tight">Minimum order of 10 boxes per event.</p>
           </div>
           <div className="flex items-center gap-4">
              <span className="text-2xl">🚚</span>
              <p className="text-xs font-bold leading-tight">Freshly prepared and delivered 30 mins before party time.</p>
           </div>
           <div className="flex items-center gap-4">
              <span className="text-2xl">🎨</span>
              <p className="text-xs font-bold leading-tight">Custom theme stickers available on bulk orders!</p>
           </div>
        </div>

        {/* Final CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between bg-[#333333] text-white p-6 rounded-[2rem] gap-4">
          <p className="font-bold text-center sm:text-left">Ready to build your custom kiddie box menu?</p>
          <button className="bg-[#F26522] text-white px-10 py-3 rounded-full font-black hover:scale-105 transition-transform shadow-[4px_4px_0px_#FFCB05]">
            Order Now
          </button>
        </div>
      </div>
    </section>
  )
}

export default CompactFoodMenu