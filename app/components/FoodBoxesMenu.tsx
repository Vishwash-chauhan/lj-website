'use client'

import React from 'react'

const FoodBoxesMenu = () => {
  const boxTypes = [
    { name: "Happy Box", price: "RS. 385", items: "Snacks + 1 Main + 1 Dessert" },
    { name: "Super Happy Box", price: "RS. 445", items: "1 Treat + 2 Snacks + 1 Main + 1 Dessert" }
  ]

  const menuSections = [
    {
      title: "Treats",
      note: "Choose any one",
      items: ["French Fries", "Peri Peri Fries", "Popcorn Party Pops", "Roasted Butter Makhanas"]
    },
    {
      title: "Snacks",
      note: "Choose any two (2-pcs each)",
      veg: ["Mini Pizza", "Veg Springrolls", "Cigar Rolls", "Veggie Finger Bites", "Cheese Corn Nuggets", "Cheese Delight Balls", "Hara Bhara Kebabs", "Mini Bata Vadas"],
      nonVeg: ["Starship Chicken Nuggets", "Chicken Popcorn Crunchies", "Crispy Chicken Adventure Strips", "Chicken Wings of Wonder"]
    },
    {
      title: "Main Course",
      note: "Choose any one",
      veg: ["Masala Maggi", "Veg Haaka Noodles", "Veg Puffs (2)", "Mac in Cheese", "White/Red/Mix Sauce Pasta", "Vegetable Sandwich", "Veg Hotdog", "Veg Snacker Burger"],
      nonVeg: ["Chicken Sandwich", "Chicken Zippy Burger", "Chicken Mayo Roll", "Chicken Hot Dog", "Egg-Fried Rice", "Chicken Noodles"]
    },
    {
      title: "Desserts",
      note: "Choose any one",
      items: ["Chocolava Cake Delight", "Chocolate Donut", "Chocolate Brownie", "Chocolate Mouse Cups", "Muffin Cakes (Vanilla/Choc)", "Large Cookie"]
    }
  ]

  return (
    <section className="py-20 px-6 bg-[#FFF9F2]" style={{ fontFamily: "'Comic Neue', cursive" }}>
      <div className="max-w-6xl mx-auto">
        
        {/* --- Box Tier Selection --- */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-[#333333] mb-6">Tailored <span className="text-[#F26522]">Kiddie Boxes</span></h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            {boxTypes.map((box, i) => (
              <div key={i} className="bg-white border-4 border-[#333333] p-8 rounded-[2rem] shadow-[8px_8px_0px_#F26522] flex-1">
                <h3 className="text-3xl font-black text-[#F26522] uppercase">{box.name}</h3>
                <p className="text-xl font-bold opacity-70 mt-2 mb-4">{box.items}</p>
                <div className="inline-block bg-[#FFCB05] px-6 py-2 rounded-full font-black text-2xl border-2 border-[#333333]">
                  {box.price}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- Menu Options Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menuSections.map((section, idx) => (
            <div key={idx} className="bg-white border-4 border-[#333333] rounded-[2.5rem] p-8 shadow-[8px_8px_0px_#333333] flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="text-3xl font-black text-[#333333]">{section.title}</h4>
                  <p className="text-[#F26522] font-bold text-sm uppercase tracking-wider">{section.note}</p>
                </div>
                <div className="text-4xl">
                  {section.title === "Treats" && "🍟"}
                  {section.title === "Snacks" && "🥟"}
                  {section.title === "Main Course" && "🍔"}
                  {section.title === "Desserts" && "🍩"}
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-4">
                {section.items ? (
                  <div className="grid grid-cols-1 gap-2">
                    {section.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 font-bold opacity-80">
                        <span className="text-[#FFCB05] font-black">●</span> {item}
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    {/* Veg Section */}
                    <div>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-md text-xs font-black uppercase mb-3 inline-block">Veg</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {section.veg?.map((item, i) => (
                          <div key={i} className="text-sm font-bold opacity-80 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-[#F26522] rounded-full"></span> {item}
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Non-Veg Section */}
                    <div className="mt-4 pt-4 border-t-2 border-dashed border-[#333333]/10">
                      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-md text-xs font-black uppercase mb-3 inline-block">Non-Veg</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {section.nonVeg?.map((item, i) => (
                          <div key={i} className="text-sm font-bold opacity-80 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-[#333333] rounded-full"></span> {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* --- Footer Note --- */}
        <div className="mt-16 bg-[#333333] text-white p-8 rounded-[2rem] text-center border-4 border-[#FFCB05]">
          <p className="text-xl font-bold italic">
            "Mixing and matching is encouraged! Contact us for bespoke kiddie boxes tailored to your party theme."
          </p>
        </div>
      </div>
    </section>
  )
}

export default FoodBoxesMenu