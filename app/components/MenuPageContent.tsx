'use client'

import React, { useEffect, useState, useRef } from 'react'

interface MenuItem {
  Name: string
  Description: string
  PcsDisplay: string
  Rate: number
  Category: string
  VegNonVeg: string
  Unit?: string
  Calculate?: string
  CustomPrice?: string
}

const categories = [
  'TABLE SNACKS- VEG',
  'TABLE SNACKS- NON-VEG',
  'MAIN COURSE - VEG',
  'MAIN COURSE - NON-VEG',
  'RICE - VEG',
  'RICE - NON-VEG',
  'NOODLES - VEG',
  'NOODLES - NON-VEG',
  'DESSERT',
  'DRINKS',
  'LIVE STATIONS',
]

const menuItems: MenuItem[] = [
    // TABLE SNACKS - VEG
    {Name: "Magical Fairy Fries", Description: "Classic salted crinkle cut fries, sprinkled with magic for an enchanting mealtime.", PcsDisplay: "100", Unit: "GMS", Calculate: "0", Rate: 99, Category: "Table Snacks", VegNonVeg: "Veg"},
    {Name: "Peri Peri Space Fries", Description: "Blast off on a flavor adventure with our Peri Peri Crinkle Cut Fries.", PcsDisplay: "100", Unit: "GMS", Calculate: "0", Rate: 119, Category: "Table Snacks", VegNonVeg: "Veg"},
    {Name: "Popcorn Party Pops", Description: "Poppin' fun at its best! Regular popcorn, the ultimate party snack.", PcsDisplay: "100", Unit: "GMS", Calculate: "0", Rate: 99, Category: "Table Snacks", VegNonVeg: "Veg"},
    {Name: "Whimsical Potato Wedges", Description: "Abracadabra! Potato wedges shaped like magic wands.", PcsDisplay: "100", Unit: "GMS", Calculate: "0", Rate: 139, Category: "Table Snacks", VegNonVeg: "Veg"},
    {Name: "Surprise Potato Balls", Description: "Surprise potato balls - are filled with yummy flavoured potato making them a hit with little adventurers.", PcsDisplay: "10", Unit: "PCS", Calculate: "1", Rate: 189, Category: "Table Snacks", VegNonVeg: "Veg"},
    {Name: "Veggie Garden Finger Bites", Description: "Explore the veggie garden! Veggie fingers - crispy, colorful, and nutritious.", PcsDisplay: "6", Unit: "PCS", Calculate: "1", Rate: 159, Category: "Table Snacks", VegNonVeg: "Veg"},
    {Name: "Sunshine Cheese Corn Nuggets", Description: "Golden nuggets filled with a mix of cheese and sweet corn, crisp on the outside and irresistibly soft inside.", PcsDisplay: "6", Unit: "PCS", Calculate: "1", Rate: 179, Category: "Table Snacks", VegNonVeg: "Veg"},
    {Name: "Mini Batata Vada", Description: "Bite-sized potato vadas pack a punch of spice and comfort, perfect for a delicious snack", PcsDisplay: "6", Unit: "PCS", Calculate: "1", Rate: 189, Category: "Table Snacks", VegNonVeg: "Veg"},
    {Name: "Veg Snacker Burgers", Description: "Veggie patty topped with cheesy spread and a secret sauce with a soft bun for a flavor-packed bite", PcsDisplay: "2", Unit: "PCS", Calculate: "1", Rate: 159, Category: "Table Snacks", VegNonVeg: "Veg"},
    {Name: "Veg Dim-Sum Delights", Description: "Steamed, juicy vegetable dim sums, each with a burst of flavors wrapped in soft, delicate dough.", PcsDisplay: "6", Unit: "PCS", Calculate: "1", Rate: 329, Category: "Table Snacks", VegNonVeg: "Veg"},
    {Name: "Rings of Onion", Description: "Rings of onion are crispy, deep fried treats made by coating sliced onion with a seasoned batter.", PcsDisplay: "6", Unit: "PCS", Calculate: "1", Rate: 189, Category: "Table Snacks", VegNonVeg: "Veg"},
    {Name: "Cheese Delight Balls", Description: "Cheese ball time! Cheese balls, yummy meteorites of cheesy goodness.", PcsDisplay: "6", Unit: "PCS", Calculate: "1", Rate: 189, Category: "Table Snacks", VegNonVeg: "Veg"},
    {Name: "Mini Veg Sandwich Delights", Description: "Our bite-sized sandwiches are a delightful snack for those craving a burst of freshness in every bite!", PcsDisplay: "4", Unit: "PCS", Calculate: "1", Rate: 189, Category: "Table Snacks", VegNonVeg: "Veg"},
    {Name: "Green Hero Kebabs", Description: "A superhero feast! Packed with veggies and flavors.", PcsDisplay: "6", Unit: "PCS", Calculate: "1", Rate: 299, Category: "Table Snacks", VegNonVeg: "Veg"},
    {Name: "Pocket Cheese Jalapeño Balls", Description: "Pocket Cheese Jalapeños are packed with cheese and a spicy kick for flavor-loving kids.", PcsDisplay: "6", Unit: "PCS", Calculate: "1", Rate: 229, Category: "Table Snacks", VegNonVeg: "Veg"},
    {Name: "Yummy Chilli Paneer (Dry)", Description: "A cheesy delight! Meet the cheesy planet pals, an out-of-this-world taste adventure.", PcsDisplay: "6", Unit: "PCS", Calculate: "1", Rate: 349, Category: "Table Snacks", VegNonVeg: "Veg"},
    {Name: "Mini Pizzas", Description: "Savory delight specially crafted for young taste buds.", PcsDisplay: "2", Unit: "PCS", Calculate: "1", Rate: 119, Category: "Table Snacks", VegNonVeg: "Veg"},
    {Name: "Nachos Adventure", Description: "Dive into nachos with salsa! A thrilling combo of crunchy nachos and zesty salsa.", PcsDisplay: "100", Unit: "GMS", Calculate: "0", Rate: 199, Category: "Table Snacks", VegNonVeg: "Veg"},
    {Name: "Tomato Bruschetta Bites", Description: "Sundried Tomato Bruschetta 'aliens'.", PcsDisplay: "6", Unit: "PCS", Calculate: "1", Rate: 299, Category: "Table Snacks", VegNonVeg: "Veg"},
    {Name: "Mushroom Magic Bruschetta", Description: "Savory mushrooms atop crisp toast.", PcsDisplay: "6", Unit: "PCS", Calculate: "1", Rate: 299, Category: "Table Snacks", VegNonVeg: "Veg"},
    {Name: "Rollercoaster Veg Spring Rolls", Description: "Roll into fun! Spring Rolls - a rollercoaster of flavours.", PcsDisplay: "6", Unit: "PCS", Calculate: "1", Rate: 329, Category: "Table Snacks", VegNonVeg: "Veg"},
    {Name: "Crispy Salt n Pepper Corn", Description: "Crunchy golden corn kernels tossed with a zesty mix of salt, pepper, and mild spices—simple, tasty, and fun to munch!", PcsDisplay: "", Unit: "", Calculate: "0", Rate: 329, Category: "Table Snacks", VegNonVeg: "Veg"},
    {Name: "Honey Chilli Potato", Description: "Golden potato fingers tossed in a tangy, sweet, and spicy sauce, perfectly balanced to delight young taste buds", PcsDisplay: "", Unit: "",  Calculate: "0", Rate: 329, Category: "Table Snacks", VegNonVeg: "Veg"},
    {Name: "Paneer Tikka Magic", Description: "Marinated paneer pieces for a culinary journey.", PcsDisplay: "6", Unit: "PCS", Calculate: "1", Rate: 349, Category: "Table Snacks", VegNonVeg: "Veg"},
    {Name: "Mini Veg Tacos", Description: "A tiny fiesta in your hands.", PcsDisplay: "3", Unit: "PCS", Calculate: "1", Rate: 359, Category: "Table Snacks", VegNonVeg: "Veg"},
    {Name: "Cheesy Corn Spring Roll Twirls", Description: "Golden crispy rolls filled with cheesy corn joy.", PcsDisplay: "6", Unit: "PCS", Calculate: "1", Rate: 459, Category: "Table Snacks", VegNonVeg: "Veg"},
    {Name: "Mini Chaat Canapes", Description: "Cripy canapés loaded with zesty chaat for a burst of flavours in every nibble!", PcsDisplay: "6", Unit: "PCS", Calculate: "1", Rate: 299, Category: "Table Snacks", VegNonVeg: "Veg"},
    {Name: "Mini Paneer Popsicle Tikka Rolls", Description: "Mini paneer popsicle tikka rolls - a fun twist on classic tikka!", PcsDisplay: "3", Unit: "PCS", Calculate: "1", Rate: 299, Category: "Table Snacks", VegNonVeg: "Veg"},  

    // TABLE SNACKS - NON-VEG
    {Name: "Starship Chicken Nuggets", Description: "Chicken nuggets - on a tasty mission! Star-shaped nuggets for flavorful space rides.", PcsDisplay: "6", Unit: "PCS", Calculate: "1", Rate: 189, Category: "Table Snacks", VegNonVeg: "Non-Veg"},
    {Name: "Mini Chicken Delight Sandwiches", Description: "Mini chicken sandwich - tiny and delicious! Perfect for little munchers.", PcsDisplay: "4", Unit: "PCS", Calculate: "1", Rate: 229, Category: "Table Snacks", VegNonVeg: "Non-Veg"},
    {Name: "Chicken Popcorn Crunchies", Description: "Each bite of the chicken popcorn is a delightful burst of flavor.", PcsDisplay: "10", Unit: "PCS", Calculate: "1", Rate: 249, Category: "Table Snacks", VegNonVeg: "Non-Veg"},
    {Name: "Chicken Lollipop Galaxy", Description: "Chicken lollipop - a lollipop from space! Tasty and fun, a delightful treat for little space explorers.", PcsDisplay: "6", Unit: "PCS", Calculate: "1", Rate: 349, Category: "Table Snacks", VegNonVeg: "Non-Veg"},
    {Name: "Chicken Wings of Wonder", Description: "Chicken wings - wings of wonder! Tantalizing flavors for little food adventurers.", PcsDisplay: "6", Unit: "PCS", Calculate: "1", Rate: 349, Category: "Table Snacks", VegNonVeg: "Non-Veg"},
    {Name: "Mini Chicken Mayo Roll-ers", Description: "Mini chicken mayo rolls - like rockets ready to take off! Delicious and creamy.", PcsDisplay: "3", Unit: "PCS", Calculate: "1", Rate: 299, Category: "Table Snacks", VegNonVeg: "Non-Veg"},
    {Name: "Crispy Chicken Adventure Strips", Description: "Crispy chicken strips - a galaxy of crunch! Irresistible chicken strips that kids will adore.", PcsDisplay: "6", Unit: "PCS", Calculate: "1", Rate: 349, Category: "Table Snacks", VegNonVeg: "Non-Veg"},
    {Name: "Chicken Springtime Rolls", Description: "Chicken spring rolls - a mini fiesta! Flavorful chicken rolls for tiny hands.", PcsDisplay: "6", Unit: "PCS", Calculate: "1", Rate: 349, Category: "Table Snacks", VegNonVeg: "Non-Veg"},
    {Name: "Fin-Tastic Fish Fingers", Description: "Fish fingers - embark on a fishy voyage! Crispy fish treats for adventurous eaters.", PcsDisplay: "6", Unit: "PCS", Calculate: "1", Rate: 489, Category: "Table Snacks", VegNonVeg: "Non-Veg"},
    {Name: "Mini Chicken Tacos", Description: "Chicken mini tacos - mini delights filled with chicken goodness.", PcsDisplay: "3", Unit: "PCS", Calculate: "1", Rate: 399, Category: "Table Snacks", VegNonVeg: "Non-Veg"},
    {Name: "Rocket Chicken Seekh Kebabs", Description: "Chicken seekh kebab - like rockets of flavor! Tasty and fun chicken kebabs.", PcsDisplay: "4", Unit: "PCS", Calculate: "1", Rate: 399, Category: "Table Snacks", VegNonVeg: "Non-Veg"},
    {Name: "Zesty Chilli Chicken Crunch (Dry)", Description: "Each bite is a burst of spicy, succulent chicken that's sure to leave you craving more.", PcsDisplay: "10", Unit: "PCS", Calculate: "1", Rate: 449, Category: "Table Snacks", VegNonVeg: "Non-Veg"},
    {Name: "Chicken Zippy Burgers", Description: "Chicken patty topped with cheesy spread and a secret sauce with a soft bun for a flavor-packed bite", PcsDisplay: "2", Unit: "PCS", Calculate: "1", Rate: 199, Category: "Table Snacks", VegNonVeg: "Non-Veg"},
    {Name: "Chicken Dim-Sum Delights", Description: "Steamed, juicy chicken dim sums, each with a burst of flavors wrapped in soft, delicate dough.", PcsDisplay: "6", Unit: "PCS", Calculate: "1", Rate: 349, Category: "Table Snacks", VegNonVeg: "Non-Veg"},
    {Name: "Dim-Sum Delights", Description: "Steamed, juicy vegetable & chicken dim sums, each with a burst of flavors wrapped in soft, delicate dough.", PcsDisplay: "6", Unit: "PCS", Calculate: "1", Rate: 279, Category: "Table Snacks", VegNonVeg: "Veg & Non-Veg"},
    {Name: "Rollercoaster Spring Rolls", Description: "(Veg & Chicken) Roll into fun!, Spring Rolls - a rollercoaster of flavours", PcsDisplay: "6", Unit: "PCS", Calculate: "1", Rate: 339, Category: "Table Snacks", VegNonVeg: "Veg & Non-Veg"},
    {Name: "Assorted Veg & Chicken Burgers", Description: "Veg & Chicken Burgers made with secret sauce! Loved by kids & grown-ups.", PcsDisplay: "1", Unit: "PCS", Calculate: "1", Rate: 179, Category: "Table Snacks", VegNonVeg: "Veg & Non-Veg"},
    {Name: "Mini Paneer Popsicle Tikka Rolls", Description: "Paneer popsicles on a roll, just the right size for kiddie hands.", PcsDisplay: "3", Unit: "PCS", Calculate: "1", Rate: 299, Category: "Table Snacks", VegNonVeg: "Non-Veg"},
    {Name: "Mini Paneer Popsicle Tikka Rolls", Description: "Paneer popsicles on a roll, just the right size for kiddie hands.", PcsDisplay: "3", Unit: "PCS", Calculate: "1", Rate: 299, Category: "Table Snacks", VegNonVeg: "Veg & Non-Veg"},

    // MAIN COURSE - VEG
    {Name: "Extravaganza Butter Masala Maggi", Description: "Butter masala maggie - a masala adventure! Flavorful and spicy noodles.", PcsDisplay: "", Unit: "", Calculate: "0", Rate: 149, Category: "Main Course", VegNonVeg: "Veg"},
    {Name: "Peri Peri Magic Maggi", Description: "Peri peri maggie - spice up your meal! Noodles with a kick.", PcsDisplay: "", Unit: "", Calculate: "0", Rate: 149, Category: "Main Course", VegNonVeg: "Veg"},
    {Name: "Cheese Bliss Maggi", Description: "Cheese maggie - cheese-filled delight! Yummy and cheesy noodles.", PcsDisplay: "", Unit: "", Calculate: "0", Rate: 189, Category: "Main Course", VegNonVeg: "Veg"},
    {Name: "Mac 'n' Cheesy Spaceships", Description: "Mac n Cheese - spaceships of cheesy goodness! Creamy and delightful.", PcsDisplay: "", Unit: "", Calculate: "0", Rate: 299, Category: "Main Course", VegNonVeg: "Veg"},
    {Name: "Veggie Marvel Manchurian", Description: "Deliciously soft veggie balls tossed in a flavorful soy-based sauce, bursting with classic Indo-Chinese zest!", PcsDisplay: "", Unit: "", Calculate: "0", Rate: 369, Category: "Main Course", VegNonVeg: "Veg"},
    {Name: "Idli Delights with Sambhar & Chutney", Description: "Mini Idli with sambhar & chutney - idlis ready to fly! A tasty and cute treat.", PcsDisplay: "", Unit: "", Calculate: "0", Rate: 379, Category: "Main Course", VegNonVeg: "Veg"},
    {Name: "Playtime Bombay Pav Bhaji", Description: "Pav bhaji - a planet of flavors! Flavorful and lip-smacking.", PcsDisplay: "", Unit: "", Calculate: "0", Rate: 379, Category: "Main Course", VegNonVeg: "Veg"},
    {Name: "Tangy Chilli Paneer (Gravy)", Description: "Soft paneer cubes tossed in a spicy, tangy gravy with bell peppers and onions.", PcsDisplay: "", Unit: "", Calculate: "0", Rate: 399, Category: "Main Course", VegNonVeg: "Veg"},
    {Name: "Creamy Alfredo Whole Wheat Pasta (White Sauce)", Description: "A velvety, rich white sauce with a subtle hint of garlic, perfectly paired with wholesome whole wheat pasta.", PcsDisplay: "", Unit: "", Calculate: "0", Rate: 449, Category: "Main Course", VegNonVeg: "Veg"},
    {Name: "Planet Penne Delight Whole Wheat Pasta (Red Sauce)", Description: "Whole wheat penne pasta tossed in a flavorful red sauce, with herbs, and a hint of spice for a delightful taste.", PcsDisplay: "", Unit: "", Calculate: "0", Rate: 449, Category: "Main Course", VegNonVeg: "Veg"},
    {Name: "Pink Sauce Fusion Penne Whole Wheat Pasta (Mix Sauce)", Description: "Perfectly balanced rich pink sauce whole wheat pasta for a creamy, tangy, and savory flavors.", PcsDisplay: "", Unit: "", Calculate: "0", Rate: 449, Category: "Main Course", VegNonVeg: "Veg"},
    {Name: "Dal Makhani Marvel with Malabari Paranthas/Wheat Kulchas", Description: "A rich, creamy, and flavorful dal, perfectly complemented by soft malabari paranthas or fluffy wheat kulchas.", PcsDisplay: "", Unit: "", Calculate: "0", Rate: 469, Category: "Main Course", VegNonVeg: "Veg"},
    {Name: "Royal Rajma with Steamed Rice", Description: "Slow-cooked kidney beans simmered in a rich tomato gravy, paired perfectly with fragrant steamed rice.", PcsDisplay: "", Unit: "", Calculate: "0", Rate: 399, Category: "Main Course", VegNonVeg: "Veg"},
    {Name: "Paneer Star Makhani with Malabari Paranthas/Wheat Kulchas", Description: "Soft paneer in tomato-based gravy, bursting with rich flavors, paired with malabari paranthas or wheat kulchas.", PcsDisplay: "", Unit: "", Calculate: "0", Rate: 469, Category: "Main Course", VegNonVeg: "Veg"},
    {Name: "Kadhai Paneer Delight with Malabari Paranthas/Wheat Kulchas", Description: "Tender paneer cubes cooked in a rich, spiced tomato and capsicum gravy.", PcsDisplay: "", Unit: "", Calculate: "0", Rate: 469, Category: "Main Course", VegNonVeg: "Veg"},
    {Name: "Channa Celestial with Wheat Kulchas", Description: "Slow-cooked chickpeas in a flavorful, aromatic gravy. Served with soft Kulchas", PcsDisplay: "", Unit: "", Calculate: "0", Rate: 399, Category: "Main Course", VegNonVeg: "Veg"},
    {Name: "Green/Red/Yellow Thai Curry With Fragrant Jasmine Rice", Description: "Rich and creamy Thai curry in green, red, or yellow, with a perfect balance of spices and herbs.", PcsDisplay: "", Unit: "", Calculate: "0", Rate: 659, Category: "Main Course", VegNonVeg: "Veg"},
    {Name: "Stir Fried Vegetables in Butter Garlic Sauce/Hot Garlic Sauce", Description: "Veggies tossed in a non-spicy smooth, buttery garlic sauce with a hint of herbs.", PcsDisplay: "", Unit: "", Calculate: "0", Rate: 499, Category: "Main Course", VegNonVeg: "Veg"},
 
    // MAIN COURSE - NON-VEG
    {Name: "Green/Red/Yellow Thai Curry With Fragrant Jasmine Rice", Description: "Rich and creamy Thai curry in green, red, or yellow, with a perfect balance of spices and herbs.", PcsDisplay: "", Unit: "", Calculate: "0", Rate: 699, Category: "Main Course", VegNonVeg: "Non-Veg"},
    {Name: "Savory Shredded Chicken in Butter Garlic Sauce/Hot Garlic Sauce", Description: "Tender shredded chicken tossed in a smooth, garlic sauce with a hint of herbs.", PcsDisplay: "", Unit: "", Calculate: "0", Rate: 599, Category: "Main Course", VegNonVeg: "Non-Veg"},
    {Name: "Dynamite Chicken Chili (Gravy)", Description: "Cosmos of flavors! Spicy and scrumptious. Succulent chicken pieces in a thick, savory gravy.", PcsDisplay: "", Unit: "", Calculate: "0", Rate: 499, Category: "Main Course", VegNonVeg: "Non-Veg"},
    {Name: "Sizzling Chicken Manchurian", Description: "Juicy chicken balls cooked in a zesty soy-garlic sauce, pairs wonderfully with fried rice or noodles!", PcsDisplay: "", Unit: "", Calculate: "0", Rate: 499, Category: "Main Course", VegNonVeg: "Non-Veg"},
    {Name: "Butter Chicken Bliss with Malabari Paranthas/Wheat Kulchas", Description: "Chicken cooked in a rich tomato-based gravy that’s mild and creamy, making it a kids’ all-time favorite.", PcsDisplay: "", Unit: "", Calculate: "0", Rate: 599, Category: "Main Course", VegNonVeg: "Non-Veg"},
    {Name: "Kadhai Chicken Universe with Malabari Paranthas/Wheat Kulchas", Description: "Kadhai chicken is a burst of yumminess that’s not too spicy, just perfect for tiny taste buds.", PcsDisplay: "", Unit: "", Calculate: "0", Rate: 599, Category: "Main Course", VegNonVeg: "Non-Veg"},
    {Name: "Chicken Keema Comet With Bombay Pav", Description: "Juicy, flavorful chicken keema served with soft Bombay pav, perfect for kids & adults both!", PcsDisplay: "", Unit: "", Calculate: "0", Rate: 599, Category: "Main Course", VegNonVeg: "Non-Veg"},
    {Name: "Chicken Curry Magic with Malabari Paranthas/Wheat Kulchas", Description: "Flavorful chicken curry paired with Malabari paranthas or soft wheat kulchas. A mild, kid-friendly twist!", PcsDisplay: "", Unit: "", Calculate: "0", Rate: 599, Category: "Main Course", VegNonVeg: "Non-Veg"},
  
    // RICE - VEG
    {Name: "Steamed Bliss Rice", Description: "Soft, fluffy rice steamed to perfection! Simple and comforting.", PcsDisplay: "", Unit: "", Calculate: "0", Rate: 119, Category: "Rice", VegNonVeg: "Veg"},
    {Name: "Cumin Fusion Rice", Description: "Fragrant rice infused with cumin, offering a warm and savory flavor", PcsDisplay: "", Unit: "", Calculate: "0", Rate: 159, Category: "Rice", VegNonVeg: "Veg"},
    {Name: "Veggie Fiesta Fried Rice", Description: "A colorful medley of fresh vegetables stir-fried with perfectly cooked rice.", PcsDisplay: "", Unit: "", Calculate: "0", Rate: 299, Category: "Rice", VegNonVeg: "Veg"},
    {Name: "Veggie Galaxy Pulao", Description: "A colorful and tasty rice dish filled with vibrant veggies! It's light, fun, and perfect for everyone to enjoy.", PcsDisplay: "", Unit: "", Calculate: "0", Rate: 349, Category: "Rice", VegNonVeg: "Veg"},
    {Name: "Vegetable Temptation Biryani With Raita", Description: "Flavorful and aromatic rice loaded with veggies, topped with a special blend of spices. Served with raita.", PcsDisplay: "", Unit: "", Calculate: "0", Rate: 449, Category: "Rice", VegNonVeg: "Veg"},

    // RICE - NON-VEG
    {Name: "Eggs-cursion Fried Rice", Description: "Fun to eat, tasty to the last grain, that will keep them coming back for more!", PcsDisplay: "", Unit: "", Calculate: "0", Rate: 349, Category: "Rice", VegNonVeg: "Non-Veg"},
    {Name: "Chicken Sizzle Fried Rice", Description: "Savor the sizzle of chicken and rice coming together in harmony with our chicken sizzle fried rice.", PcsDisplay: "", Unit: "", Calculate: "0", Rate: 399, Category: "Rice", VegNonVeg: "Non-Veg"},
    {Name: "The Original Chicken Biryani With Raita", Description: "Aromatic biryani made with long-grain basmati rice, tender chicken, and a blend of spices.", PcsDisplay: "", Unit: "", Calculate: "0", Rate: 499, Category: "Rice", VegNonVeg: "Non-Veg"},

    // NOODLES - VEG
    {Name: "Vibrant Hakka Noodles", Description: "A colorful medley of stir-fried noodles, for a burst of flavor in every bite.", PcsDisplay: "", Unit: "", Calculate: "0", Rate: 299, Category: "Noodles", VegNonVeg: "Veg"},
    {Name: "Wiggly Chilli Garlic Noodles", Description: "These noodles are zesty with a hint of garlic. Perfect for anyone who loves a kick with every twist!", PcsDisplay: "", Unit: "", Calculate: "0", Rate: 299, Category: "Noodles", VegNonVeg: "Veg"},

    // NOODLES - NON-VEG
    {Name: "Eggy Zigzag Noodles", Description: "These noodles are perfect to bring a fun, fluffy texture, paired with a savory flavor.", PcsDisplay: "", Unit: "", Calculate: "0", Rate: 329, Category: "Noodles", VegNonVeg: "Non-Veg"},
    {Name: "Chicken Hakka Comet Noodles", Description: "Vibrant veggies & tender chicken strips stir-fried with perfectly cooked noodles.", PcsDisplay: "", Unit: "", Calculate: "0", Rate: 399, Category: "Noodles", VegNonVeg: "Non-Veg"},

    // DESSERTS
    {Name: "Ice Cream", Description: "Choice of vanilla/chocolate/strawberry/butterscotch ice cream with gems, sprinkles & chocolate sauce.", PcsDisplay: "", Unit: "", Calculate: "0", Rate: 59, Category: "Dessert", VegNonVeg: "Veg"},
    {Name: "Ice Cream with Eggless Brownies", Description: "Vanilla ice cream with moist eggless brownie goodness.", PcsDisplay: "", Unit: "", Calculate: "0", Rate: 79, Category: "Dessert", VegNonVeg: "Veg"},
    {Name: "Fluffy Rasgulla Clouds", Description: "Soft, spongy, and delicately sweet rasgullas — a timeless treat that melts in your mouth.", PcsDisplay: "1", Unit: "PC", Calculate: "1", Rate: 39, Category: "Dessert", VegNonVeg: "Veg"},
    {Name: "Desi Ghee Gulab Jamun Raindrops", Description: "A timeless dessert that melts in the mouth with every bite! Lovingly made in desi ghee for that rich, traditional flavor.", PcsDisplay: "1", Unit: "PC", Calculate: "1", Rate: 49, Category: "Dessert", VegNonVeg: "Veg"},
    {Name: "Gajar Halwa", Description: "A rich dessert made with tender carrots in creamy milk, gently sweetened and spiced, perfect for kids & adults.", PcsDisplay: "250", Unit: "GMS", Calculate: "0", Rate: 299, Category: "Dessert", VegNonVeg: "Veg"},
    {Name: "Kool Kulfi", Description: "Traditional frozen, creamy & decadent kulfi, blending rich flavors with a hint of nostalgia.", PcsDisplay: "1", Unit: "PC", Calculate: "1", Rate: 99, Category: "Dessert", VegNonVeg: "Veg"},
    {Name: "Magical Brownie Planet", Description: "Rich, fudgy delight with the perfect balance of chocolatey goodness and nutty crunch.", PcsDisplay: "1", Unit: "PC", Calculate: "1", Rate: 59, Category: "Dessert", VegNonVeg: "Veg"},
    {Name: "Little Jalebis With Royal Rabri", Description: "Bite-sized bursts of sweet, syrupy perfection, offering a delightful twist on a classic Indian treat", PcsDisplay: "", Unit: "", Calculate: "0", Rate: 229, Category: "Dessert", VegNonVeg: "Veg"},
    {Name: "Decadent Choco Lava Delight", Description: "Chocolava cake - lava flowing from a galaxy! Chocolatey and molten.", PcsDisplay: "1", Unit: "PC", Calculate: "1", Rate: 99, Category: "Dessert", VegNonVeg: "Veg"},
    {Name: "Chocolate Mouse Cup", Description: "Chocolate mouse cups - Cups full of chocolaty goodness! Layers of heavenly flavors.", PcsDisplay: "1", Unit: "PC", Calculate: "1", Rate: 99, Category: "Dessert", VegNonVeg: "Veg"},
    {Name: "Chocolate Donuts", Description: "Fluffy delights with chocolate topping, perfect for a sweet treat anytime!", PcsDisplay: "1", Unit: "PC", Calculate: "1", Rate: 99, Category: "Dessert", VegNonVeg: "Veg"},
    {Name: "Marshmallows with Hot Chocolate Fondue", Description: "Soft, fluffy marshmallows dipped in rich, velvety hot chocolate fondue for a sweet and indulgent treat.", PcsDisplay: "30", Unit: "PCS", Calculate: "1", Rate: 1999, Category: "Dessert", VegNonVeg: "Veg"},

// DRINKS & SOUPS
    {Name: "Fresh Lemonade", Description: "A refreshing blend of lemons, chilled water, and a hint of sweetness, perfect thirst-quenching drink.", PcsDisplay: "200", Unit: "ML", Calculate: "0", Rate: 39, Category: "Drinks", VegNonVeg: "Veg"},
    {Name: "Lemon Ice Tea", Description: "A crisp and refreshing iced tea infused with a zesty lemon flavor, served cold for a cool experience.", PcsDisplay: "200", Unit: "ML", Calculate: "0", Rate: 49, Category: "Drinks", VegNonVeg: "Veg"},
    {Name: "Blue Curacao", Description: "Blue curacao is like a splash of tropical paradise! Perfect for adding a fun twist to any drink!", PcsDisplay: "200", Unit: "ML", Calculate: "0", Rate: 79, Category: "Drinks", VegNonVeg: "Veg"},
    {Name: "Vanilla/Chocolate/Strawberry Smoothies", Description: "Choise of Vanilla, Chocolate, or Strawberry. Perfectly blended for a smooth, indulgent treat that's fully satisfying.", PcsDisplay: "200", Unit: "ML", Calculate: "0", Rate: 99, Category: "Drinks", VegNonVeg: "Veg"},
    {Name: "Hot Tea", Description: "Perfectly brewed, perfect for any time of the day.", PcsDisplay: "200", Unit: "ML", Calculate: "0", Rate: 49, Category: "Drinks", VegNonVeg: "Veg"},
    {Name: "Hot Coffee", Description: "Comforting cup of rich, aromatic coffee, brewed to perfection.", PcsDisplay: "200", Unit: "ML", Calculate: "0", Rate: 79, Category: "Drinks", VegNonVeg: "Veg"},
    {Name: "Hot Chocolate", Description: "A warm, sweet drink made with rich, melted chocolate and smooth milk.", PcsDisplay: "200", Unit: "ML", Calculate: "0", Rate: 89, Category: "Drinks", VegNonVeg: "Veg"},
    {Name: "Classic Tomato Soup", Description: "A warm and comforting cup of velvety tomato goodness, seasoned with just the right blend of spices.", PcsDisplay: "200", Unit: "ML", Calculate: "0", Rate: 89, Category: "Drinks", VegNonVeg: "Veg"},

    // LIVE STATIONS
    {Name: "LIVE Waffle Station", Description: "Freshly cooked golden waffles with a delightful array of toppings including chocolates, syrups, nuts, and ice cream.", PcsDisplay: "", Unit: "", Calculate: "0", Rate: 0, Category: "Live Stations", VegNonVeg: "Veg"},
    {Name: "LIVE Churros Station", Description: "Delicious churros served with a variety of dipping sauces.", PcsDisplay: "", Unit: "", Calculate: "0", Rate: 0, Category: "Live Stations", VegNonVeg: "Veg"},
    {Name: "LIVE Mini Pancakes", Description: "Fluffy mini pancakes served with syrup and toppings.", PcsDisplay: "", Unit: "", Calculate: "0", Rate: 0, Category: "Live Stations", VegNonVeg: "Veg"},
    {Name: "LIVE Popcorn Station", Description: "A guaranteed crowd-puller for movie nights, birthdays, or any fun gathering!", PcsDisplay: "", Unit: "", Calculate: "0", Rate: 0, Category: "Live Stations", VegNonVeg: "Veg"},
    {Name: "LIVE Cotton Candy Station", Description: "Clouds of sugary sweetness spin right before your eyes, creating a magical treat that delights kids and adults alike.", PcsDisplay: "", Unit: "", Calculate: "0", Rate: 0, Category: "Live Stations", VegNonVeg: "Veg"},
    {Name: "LIVE Chocolate Fountain", Description: "Big chocolate fountain with assortments like marshmallows, brownies, strawberries on skewers.", PcsDisplay: "", Unit: "", Calculate: "0", Rate: 0, Category: "Live Stations", VegNonVeg: "Veg"},
    {Name: "LIVE Potato Spiral", Description: "Crispy spiraled potato on a stick, a crunchy treat perfect for snacking on the go.", PcsDisplay: "", Unit: "", Calculate: "0", Rate: 0, Category: "Live Stations", VegNonVeg: "Veg"},
    {Name: "LIVE Burger Station", Description: "Mini burger station with a variety of fillings and toppings to choose from.", PcsDisplay: "", Unit: "", Calculate: "0", Rate: 300, Category: "Live Stations", VegNonVeg: "Veg"},
    {Name: "LIVE Pizza Station", Description: "Create your own mini pizzas with a variety of toppings and sauces.", PcsDisplay: "", Unit: "", Calculate: "0", Rate: 500, Category: "Live Stations", VegNonVeg: "Veg"},
    {Name: "LIVE Pasta Station", Description: "Fresh, hot pasta cooked live with your choice of sauce - Pink, White or Red Sauce.", PcsDisplay: "", Unit: "", Calculate: "0", Rate: 300, Category: "Live Stations", VegNonVeg: "Veg"},
    {Name: "LIVE Dim-Sum Station", Description: "Steamed dim-sums made live with a variety of fillings.", PcsDisplay: "", Unit: "", Calculate: "0", Rate: 200, Category: "Live Stations", VegNonVeg: "Veg"},
]

function formatLabel(label: string): string {
  label = label.replace(/\s*-\s*/, ' - ')
  const parts = label.split(' - ')
  const base = parts[0]
    .toLowerCase()
    .split(' ')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
  if (parts[1]) {
    const veg = parts[1].toLowerCase()
    const vegFormatted = veg === 'non-veg' ? 'Non-Veg' : veg === 'veg' ? 'Veg' : parts[1]
    return base + ' - ' + vegFormatted
  }
  return base
}

function parseCategoryLabel(label: string): { base: string; veg: string | null } {
  const m = label.match(/(.+?)(?:\s*-\s*(VEG|NON-VEG))?$/i)
  const base = m?.[1]?.trim() || label
  const veg = m?.[2]?.toUpperCase() || null
  return { base, veg }
}

function matchesItem(item: MenuItem, label: string): boolean {
  const { base, veg } = parseCategoryLabel(label)
  if (item.Category.toLowerCase() !== base.toLowerCase()) return false
  if (!veg) return true
  if (veg === 'VEG') return !!(item.VegNonVeg && item.VegNonVeg.toLowerCase().startsWith('veg'))
  if (veg === 'NON-VEG') return !!(item.VegNonVeg && item.VegNonVeg.toLowerCase().startsWith('non'))
  return true
}

export default function MenuPageContent() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)

  const tabsRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!tabsRef.current) return
    const activeBtn = tabsRef.current.querySelector<HTMLButtonElement>(`[data-index="${currentIndex}"]`)
    activeBtn?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }, [currentIndex, mounted])

  useEffect(() => {
    setMounted(true)
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length)
      }
      if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev + 1) % categories.length)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const label = categories[currentIndex]
  const items = menuItems.filter((item) => matchesItem(item, label))

  return (
    <div className="pt-20 md:pt-24 lg:pt-28 bg-[#FFF9F2] text-[#333333] min-h-screen px-3 sm:px-5 md:p-8">
      <div className="w-full max-w-[1000px] mx-auto">
        <header className="flex flex-col items-center mb-4 sm:mb-6">
          <div className="w-full mb-3">
            <div
              ref={tabsRef}
              role="tablist"
              aria-label="Categories"
              className="flex gap-2 overflow-x-auto py-1 px-1 sm:px-0"
            >
              {categories.map((cat, i) => {
                const isActive = i === currentIndex
                return (
                  <button
                    key={cat}
                    data-index={i}
                    role="tab"
                    aria-selected={isActive}
                    tabIndex={0}
                    onClick={() => setCurrentIndex(i)}
                    className={`flex-shrink-0 px-3 py-1 rounded-full font-black text-sm sm:text-base whitespace-nowrap transition-transform ${
                      isActive
                        ? 'bg-[#F26522] text-white shadow-[4px_4px_0_#F26522] scale-105'
                        : 'bg-white border-2 border-[#FFCB05] text-[#F26522] hover:scale-105'
                    }`}
                  >
                    {formatLabel(cat)}
                  </button>
                )
              })}
            </div>
          </div>

          <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-black text-[#F26522] uppercase my-0 line-clamp-2" style={{ textShadow: '1px 1px #FFCB05' }}>
            ✨ {formatLabel(label)} ✨
          </h2>
        </header>

        {items.length === 0 ? (
          <div className="col-span-full p-6 sm:p-10 border-2 border-dashed border-opacity-10 rounded-lg text-gray-400 bg-opacity-60 bg-white text-sm sm:text-base">
            No items in this category yet.
          </div>
        ) : (
          <div className={mounted && isMobile ? 'space-y-3' : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8'}>
            {items.map((item, idx) => (
              <div
                key={idx}
                className={mounted && isMobile ? 'flex flex-col border-b border-dashed border-gray-300 pb-3' : 'flex flex-col bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-5 border-3 sm:border-4 border-[#FFCB05] shadow-[4px_4px_0px_#F26522] sm:shadow-[8px_8px_0px_#F26522] hover:scale-105 hover:rotate-1 transition-transform'}
              >
                <div className={mounted && isMobile ? 'flex justify-between items-start w-full mb-2' : 'flex justify-center items-center mb-2 sm:mb-3'}>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[#F26522] text-lg sm:text-2xl font-black">
                    <span
                      className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full flex-shrink-0 ${
                        item.VegNonVeg?.toLowerCase().startsWith('non') ? 'bg-red-500' : 'bg-teal-500'
                      }`}
                    />
                    <span className="line-clamp-2 text-left md:text-center">{item.Name}</span>
                  </div>
                  {mounted && isMobile && (
                    <div className="text-xs sm:text-sm font-bold text-[#F26522] ml-2 flex-shrink-0">
                      {item.Rate === 0 ? (item.CustomPrice ? item.CustomPrice.split(' ')[0] : 'N/A') : '₹' + item.Rate + '/-'}
                    </div>
                  )}
                </div>

                {mounted && isMobile ? (
                  <div className="flex justify-between items-start w-full gap-2">
                    <p className="text-xs sm:text-sm font-bold leading-relaxed text-[#333333] flex-1 text-left">
                      {item.Description}
                    </p>
                    {item.PcsDisplay && (
                      <span className="bg-[#FFCB05] px-2.5 py-1 rounded-lg sm:rounded-2xl font-bold text-xs whitespace-nowrap flex-shrink-0">
                        {item.PcsDisplay}
                      </span>
                    )}
                  </div>
                ) : (
                  <>
                    <p className="text-sm md:text-lg font-bold leading-relaxed text-[#333333] mb-3 sm:mb-4 flex-1 text-left md:text-center">
                      {item.Description}
                    </p>
                    <div className="flex justify-between items-center border-t-2 border-dashed border-[#FFCB05] pt-3 sm:pt-4">
                      {item.PcsDisplay && (
                        <span className="bg-[#FFCB05] px-2.5 sm:px-3 py-1 rounded-lg sm:rounded-2xl font-bold text-xs">
                          {item.PcsDisplay}
                        </span>
                      )}
                      <span className="text-sm md:text-lg font-black text-[#333333] ml-auto">
                        {item.Rate === 0 && item.CustomPrice ? item.CustomPrice : '₹' + item.Rate + '/-'}
                      </span>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <button
        onClick={() => window.open('https://wa.me/918130964374', '_blank')}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-12 sm:w-14 h-12 sm:h-14 bg-[#25D366] rounded-full p-2.5 sm:p-3 cursor-pointer shadow-lg hover:shadow-xl hover:scale-110 transition-all flex items-center justify-center z-[99999999]"
        aria-label="Chat on WhatsApp"
      >
        <svg width="100%" height="100%" viewBox="0 0 1219.547 1225.016" style={{ maxWidth: '40px' }}>
          <path fill="#E0E0E0" d="M1041.858 178.02C927.206 63.289 774.753.07 612.325 0 277.617 0 5.232 272.298 5.098 606.991c-.039 106.986 27.915 211.42 81.048 303.476L0 1225.016l321.898-84.406c88.689 48.368 188.547 73.855 290.166 73.896h.258.003c334.654 0 607.08-272.346 607.222-607.023.056-162.208-63.052-314.724-177.689-429.463zm-429.533 933.963h-.197c-90.578-.048-179.402-24.366-256.878-70.339l-18.438-10.93-191.021 50.083 51-186.176-12.013-19.087c-50.525-80.336-77.198-173.175-77.16-268.504.111-278.186 226.507-504.503 504.898-504.503 134.812.056 261.519 52.604 356.814 147.965 95.289 95.36 147.728 222.128 147.688 356.948-.118 278.195-226.522 504.543-504.693 504.543z" />
          <path fill="#25D366" d="M27.875 1190.114l82.211-300.18c-50.719-87.852-77.391-187.523-77.359-289.602.133-319.398 260.078-579.25 579.469-579.25 155.016.07 300.508 60.398 409.898 169.891 109.414 109.492 169.633 255.031 169.57 409.812-.133 319.406-260.094 579.281-579.445 579.281-.023 0 .016 0 0 0h-.258c-96.977-.031-192.266-24.375-276.898-70.5l-307.188 80.548z" />
          <path fill="#FFF" fillRule="evenodd" clipRule="evenodd" d="M462.273 349.294c-11.234-24.977-23.062-25.477-33.75-25.914-8.742-.375-18.75-.352-28.742-.352-10 0-26.25 3.758-39.992 18.766-13.75 15.008-52.5 51.289-52.5 125.078 0 73.797 53.75 145.102 61.242 155.117 7.5 10 103.758 166.266 256.203 226.383 126.695 49.961 152.477 40.023 179.977 37.523s88.734-36.273 101.234-71.297c12.5-35.016 12.5-65.031 8.75-71.305-3.75-6.25-13.75-10-28.75-17.5s-88.734-43.789-102.484-48.789-23.75-7.5-33.75 7.516c-10 15-38.727 48.773-47.477 58.773-8.75 10.023-17.5 11.273-32.5 3.773-15-7.523-63.305-23.344-120.609-74.438-44.586-39.75-74.688-88.844-83.438-103.859-8.75-15-.938-23.125 6.586-30.602 6.734-6.719 15-17.508 22.5-26.266 7.484-8.758 9.984-15.008 14.984-25.008 5-10.016 2.5-18.773-1.25-26.273s-32.898-81.67-46.234-111.326z" />
        </svg>
      </button>
    </div>
  )
}
