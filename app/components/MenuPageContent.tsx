'use client'

import React, { useEffect, useState } from 'react'

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
  { Name: 'Magical Fairy Fries', Description: 'Classic Salted Crinkle Cut Fries, sprinkled with magic for an enchanting mealtime.', PcsDisplay: '100 GMS', Rate: 99, Category: 'Table Snacks', VegNonVeg: 'Veg' },
  { Name: 'Peri Peri Space Fries', Description: 'Blast off on a flavor adventure with our Peri Peri Crinkle Cut Fries.', PcsDisplay: '100 GMS', Rate: 119, Category: 'Table Snacks', VegNonVeg: 'Veg' },
  { Name: "Popcorn Party Pops", Description: "Poppin' fun at its best! Regular Popcorn, the ultimate party snack.", PcsDisplay: '100 GMS', Rate: 99, Category: 'Table Snacks', VegNonVeg: 'Veg' },
  { Name: 'Whimsical Potato Wedges', Description: 'Potato wedges shaped like magic wands.', PcsDisplay: '', Rate: 189, Category: 'Table Snacks', VegNonVeg: 'Veg' },
  { Name: 'Surprise Potato Balls', Description: 'Surprise Potato balls are filled with yummy potato making them a hit with little adventurers.', PcsDisplay: '10 PCS', Rate: 139, Category: 'Table Snacks', VegNonVeg: 'Veg' },
  { Name: 'Veggie Garden Finger Bites', Description: 'Crispy, colorful, and nutritious veggie fingers that make eating vegetables a treat.', PcsDisplay: '6 PCS', Rate: 159, Category: 'Table Snacks', VegNonVeg: 'Veg' },
  { Name: 'Sunshine Cheese Corn Nuggets', Description: 'Golden nuggets filled with cheese and sweet corn, crisp on the outside and soft inside.', PcsDisplay: '6 PCS', Rate: 179, Category: 'Table Snacks', VegNonVeg: 'Veg' },
  { Name: 'Mini Batata Vada', Description: 'Bite-sized potato vadas with a touch of spice and a whole lot of comfort.', PcsDisplay: '6 PCS', Rate: 189, Category: 'Table Snacks', VegNonVeg: 'Veg' },
  { Name: 'Veg Snacker Burgers', Description: 'Delicious veggie patty with a cheesy spread and our secret sauce on a soft bun.', PcsDisplay: '2 PCS', Rate: 159, Category: 'Table Snacks', VegNonVeg: 'Veg' },
  { Name: 'Veg Dim-Sum Delights', Description: 'Steamed, juicy vegetable dim sums wrapped in delicate dough.', PcsDisplay: '6 PCS', Rate: 329, Category: 'Table Snacks', VegNonVeg: 'Veg' },
  { Name: 'Rings of Onion', Description: 'Crispy, deep-fried treats coated with a seasoned batter.', PcsDisplay: '6 PCS', Rate: 189, Category: 'Table Snacks', VegNonVeg: 'Veg' },
  { Name: 'Cheese Delight Balls', Description: 'Tiny meteorites of cheesy goodness that kids will love.', PcsDisplay: '6 PCS', Rate: 189, Category: 'Table Snacks', VegNonVeg: 'Veg' },
  { Name: 'Mini Veg Sandwich Delights', Description: 'Bite-sized sandwiches with a burst of freshness.', PcsDisplay: '4 PCS', Rate: 189, Category: 'Table Snacks', VegNonVeg: 'Veg' },
  { Name: 'Mini Paneer Tikka Rolls', Description: 'Paneer popsicles on a roll, just the right size for kiddie hands.', PcsDisplay: '3 PCS', Rate: 299, Category: 'Table Snacks', VegNonVeg: 'Veg' },
  { Name: 'Green Hero Kebabs', Description: 'Our Hara bhara kebabs are packed with veggies and flavors.', PcsDisplay: '6 PCS', Rate: 299, Category: 'Table Snacks', VegNonVeg: 'Veg' },
  { Name: 'Pocket Cheese Jalepeno Balls', Description: 'Packed with cheese and a spicy kick for flavor-loving kids.', PcsDisplay: '6 PCS', Rate: 229, Category: 'Table Snacks', VegNonVeg: 'Veg' },
  { Name: 'Yummy Chilli Paneer (Dry)', Description: 'Cheesy planet pals taste adventure (Dry).', PcsDisplay: '6 PCS', Rate: 349, Category: 'Table Snacks', VegNonVeg: 'Veg' },
  { Name: 'Mini Pizzas', Description: 'Savory delight specially crafted for young taste buds.', PcsDisplay: '2 PCS', Rate: 119, Category: 'Table Snacks', VegNonVeg: 'Veg' },
  { Name: 'Nachos Adventure', Description: 'Crunchy nachos served with zesty salsa and dip.', PcsDisplay: '100 GMS', Rate: 199, Category: 'Table Snacks', VegNonVeg: 'Veg' },
  { Name: "Tomato Bruschetta Bites", Description: "Sundried Tomato Bruschetta 'aliens'.", PcsDisplay: '6 PCS', Rate: 299, Category: 'Table Snacks', VegNonVeg: 'Veg' },
  { Name: 'Mushroom Magic Bruschetta', Description: 'Savory mushrooms atop crisp toast.', PcsDisplay: '6 PCS', Rate: 299, Category: 'Table Snacks', VegNonVeg: 'Veg' },
  { Name: 'Rollercoaster Veg Spring Rolls', Description: 'Crispy rolls packed with stir-fried veggies.', PcsDisplay: '6 PCS', Rate: 329, Category: 'Table Snacks', VegNonVeg: 'Veg' },
  { Name: 'Crispy Salt n Pepper Corn', Description: 'Golden corn kernels tossed with salt, pepper, and mild spices.', PcsDisplay: '', Rate: 329, Category: 'Table Snacks', VegNonVeg: 'Veg' },
  { Name: 'Honey Chilli Potato', Description: 'Tangy, sweet, and spicy golden potato fingers.', PcsDisplay: '', Rate: 329, Category: 'Table Snacks', VegNonVeg: 'Veg' },
  { Name: 'Paneer Tikka Magic', Description: 'Marinated paneer pieces for a culinary journey.', PcsDisplay: '6 PCS', Rate: 349, Category: 'Table Snacks', VegNonVeg: 'Veg' },
  { Name: 'Mini Veg Tacos', Description: 'A tiny fiesta in your hands.', PcsDisplay: '3 PCS', Rate: 359, Category: 'Table Snacks', VegNonVeg: 'Veg' },
  { Name: 'Cheesy Corn Spring Roll Twirls', Description: 'Golden crispy rolls filled with cheesy corn joy.', PcsDisplay: '6 PCS', Rate: 459, Category: 'Table Snacks', VegNonVeg: 'Veg' },
  { Name: 'Mini Chaat Canapes', Description: 'Cripy canapés loaded with zesty chaat for a burst of flavours in every nibble!', PcsDisplay: '6', Rate: 299, Category: 'Table Snacks', VegNonVeg: 'Veg' },

  // TABLE SNACKS - NON-VEG
  { Name: 'Starship Chicken Nuggets', Description: 'Star-shaped nuggets for flavorful space rides.', PcsDisplay: '6 PCS', Rate: 189, Category: 'Table Snacks', VegNonVeg: 'Non-Veg' },
  { Name: 'Chicken Zippy Burgers', Description: 'Chicken patty with a cheesy spread and our secret sauce on a soft bun.', PcsDisplay: '2 PCS', Rate: 199, Category: 'Table Snacks', VegNonVeg: 'Non-Veg' },
  { Name: 'Mini Chicken Delight Sandwiches', Description: 'Tiny and delicious, perfect for little munchers.', PcsDisplay: '4 PCS', Rate: 229, Category: 'Table Snacks', VegNonVeg: 'Non-Veg' },
  { Name: 'Chicken Popcorn Crunchies', Description: 'Each bite is a delightful burst of flavor.', PcsDisplay: '10 PCS', Rate: 249, Category: 'Table Snacks', VegNonVeg: 'Non-Veg' },
  { Name: 'Mini Chicken Mayo Roll-ers', Description: 'Rocket-like rolls that are delicious and creamy.', PcsDisplay: '3 PCS', Rate: 299, Category: 'Table Snacks', VegNonVeg: 'Non-Veg' },
  { Name: 'Chicken Lollipop Galaxy', Description: 'Tasty and fun space treats for space explorers.', PcsDisplay: '3 PCS', Rate: 349, Category: 'Table Snacks', VegNonVeg: 'Non-Veg' },
  { Name: 'Chicken Wings of Wonder', Description: 'Tantalizing flavors for food adventurers.', PcsDisplay: '6 PCS', Rate: 349, Category: 'Table Snacks', VegNonVeg: 'Non-Veg' },
  { Name: 'Crispy Chicken Adventure Strips', Description: 'A galaxy of crunch that kids will adore.', PcsDisplay: '6 PCS', Rate: 349, Category: 'Table Snacks', VegNonVeg: 'Non-Veg' },
  { Name: 'Chicken Springtime Rolls', Description: 'Flavorful chicken rolls for tiny hands.', PcsDisplay: '6 PCS', Rate: 349, Category: 'Table Snacks', VegNonVeg: 'Non-Veg' },
  { Name: 'Chicken Dim-Sum Delights', Description: 'Steamed, juicy chicken dim sums wrapped in delicate dough.', PcsDisplay: '6 PCS', Rate: 349, Category: 'Table Snacks', VegNonVeg: 'Non-Veg' },
  { Name: 'Mini Chicken Tacos', Description: 'Mini delights filled with chicken goodness.', PcsDisplay: '3 PCS', Rate: 399, Category: 'Table Snacks', VegNonVeg: 'Non-Veg' },
  { Name: 'Rocket Chicken Seekh Kebabs', Description: 'Tasty and fun rockets of flavor.', PcsDisplay: '4 PCS', Rate: 399, Category: 'Table Snacks', VegNonVeg: 'Non-Veg' },
  { Name: 'Zesty Chilli Chicken Crunch (Dry)', Description: 'Spicy and succulent chicken bursts.', PcsDisplay: '10 PCS', Rate: 449, Category: 'Table Snacks', VegNonVeg: 'Non-Veg' },
  { Name: 'Fin-Tastic Fish Fingers', Description: 'Crispy fish treats for adventurous eaters.', PcsDisplay: '6 PCS', Rate: 489, Category: 'Table Snacks', VegNonVeg: 'Non-Veg' },

  // MAIN COURSE - VEG
  { Name: 'Extravaganza Masala Maggi', Description: 'A masala adventure with flavorful and spicy noodles.', PcsDisplay: '', Rate: 149, Category: 'Main Course', VegNonVeg: 'Veg' },
  { Name: 'Peri Peri Magic Maggi', Description: 'Noodles with a kick to spice up the meal.', PcsDisplay: '', Rate: 149, Category: 'Main Course', VegNonVeg: 'Veg' },
  { Name: 'Cheese Bliss Maggi', Description: 'Yummy and cheesy noodle delight.', PcsDisplay: '', Rate: 189, Category: 'Main Course', VegNonVeg: 'Veg' },
  { Name: "Mac 'n' Cheesy Spaceships", Description: 'Creamy spaceships of cheesy goodness.', PcsDisplay: '', Rate: 299, Category: 'Main Course', VegNonVeg: 'Veg' },
  { Name: 'Veggie Marvel Manchurian', Description: 'Soft veggie balls in a flavorful soy-based sauce.', PcsDisplay: '', Rate: 369, Category: 'Main Course', VegNonVeg: 'Veg' },
  { Name: 'Idli Delights', Description: 'Mini Idlis with Sambhar & Chutney.', PcsDisplay: '', Rate: 379, Category: 'Main Course', VegNonVeg: 'Veg' },
  { Name: 'Playtime Bombay Pav Bhaji', Description: 'A planet of flavorful, lip-smacking flavors.', PcsDisplay: '', Rate: 379, Category: 'Main Course', VegNonVeg: 'Veg' },
  { Name: 'Royal Rajma with Steamed Rice', Description: 'Kidney beans in rich tomato gravy with steamed rice.', PcsDisplay: '', Rate: 399, Category: 'Main Course', VegNonVeg: 'Veg' },
  { Name: 'Tangy Chilli Paneer (Gravy)', Description: 'Paneer cubes in spicy and tangy gravy with bell peppers.', PcsDisplay: '', Rate: 399, Category: 'Main Course', VegNonVeg: 'Veg' },
  { Name: 'Channa Celestial', Description: 'Chickpeas in aromatic gravy with wheat kulchas.', PcsDisplay: '', Rate: 399, Category: 'Main Course', VegNonVeg: 'Veg' },
  { Name: 'Creamy Alfredo Pasta', Description: 'Velvety white sauce whole-wheat pasta with a hint of garlic.', PcsDisplay: '', Rate: 449, Category: 'Main Course', VegNonVeg: 'Veg' },
  { Name: 'Planet Penne Delight', Description: 'Whole wheat penne in flavorful red sauce with herbs.', PcsDisplay: '', Rate: 449, Category: 'Main Course', VegNonVeg: 'Veg' },
  { Name: 'Pink Sauce Fusion Penne', Description: 'Balanced creamy, tangy, and savory mix sauce whole-wheat pasta.', PcsDisplay: '', Rate: 449, Category: 'Main Course', VegNonVeg: 'Veg' },
  { Name: 'Dal Makhani Marvel', Description: 'Served with Malabari Paranthas or Wheat Kulchas.', PcsDisplay: '', Rate: 469, Category: 'Main Course', VegNonVeg: 'Veg' },
  { Name: 'Paneer Star Makhani', Description: 'Soft paneer in rich tomato-based gravy with Paranthas/Kulchas.', PcsDisplay: '', Rate: 469, Category: 'Main Course', VegNonVeg: 'Veg' },
  { Name: 'Kadhai Paneer Delight', Description: 'Served with Malabari Paranthas or Wheat Kulchas.', PcsDisplay: '', Rate: 469, Category: 'Main Course', VegNonVeg: 'Veg' },
  { Name: 'Stir Fried Vegetables', Description: 'Veggies in Butter Garlic/Hot Garlic Sauce.', PcsDisplay: '', Rate: 499, Category: 'Main Course', VegNonVeg: 'Veg' },
  { Name: 'Thai Curry (Veg)', Description: 'Green/Red/Yellow Thai Curry with Jasmine Rice.', PcsDisplay: '', Rate: 659, Category: 'Main Course', VegNonVeg: 'Veg' },

  // MAIN COURSE - NON-VEG
  { Name: 'Dynamite Chicken Chili (Gravy)', Description: 'Succulent chicken pieces in a thick, savory gravy.', PcsDisplay: '', Rate: 499, Category: 'Main Course', VegNonVeg: 'Non-Veg' },
  { Name: 'Sizzling Chicken Manchurian', Description: 'Juicy chicken balls in a zesty soy-garlic sauce.', PcsDisplay: '', Rate: 499, Category: 'Main Course', VegNonVeg: 'Non-Veg' },
  { Name: 'Savory Shredded Chicken', Description: 'Tossed in Butter Garlic/Hot Garlic Sauce.', PcsDisplay: '', Rate: 599, Category: 'Main Course', VegNonVeg: 'Non-Veg' },
  { Name: 'Butter Chicken Bliss', Description: 'Mild and creamy tomato-based gravy with Paranthas/Kulchas.', PcsDisplay: '', Rate: 599, Category: 'Main Course', VegNonVeg: 'Non-Veg' },
  { Name: 'Kadhai Chicken Universe', Description: 'A burst of yumminess perfect for tiny taste buds with Paranthas/Kulchas.', PcsDisplay: '', Rate: 599, Category: 'Main Course', VegNonVeg: 'Non-Veg' },
  { Name: 'Chicken Keema Comet', Description: 'Flavorful chicken keema served with soft Bombay pav.', PcsDisplay: '', Rate: 599, Category: 'Main Course', VegNonVeg: 'Non-Veg' },
  { Name: 'Chicken Curry Magic', Description: 'Mild, kid-friendly curry with Paranthas/Kulchas.', PcsDisplay: '', Rate: 599, Category: 'Main Course', VegNonVeg: 'Non-Veg' },
  { Name: 'Thai Curry (Non-Veg)', Description: 'Green/Red/Yellow Thai Curry with Jasmine Rice.', PcsDisplay: '', Rate: 699, Category: 'Main Course', VegNonVeg: 'Non-Veg' },

  // RICE & NOODLES
  { Name: 'Steamed Bliss Rice', Description: 'Soft, warm, and perfectly prepared steamed rice.', PcsDisplay: '', Rate: 119, Category: 'Rice', VegNonVeg: 'Veg' },
  { Name: 'Cumin Fusion Rice', Description: 'Fragrance fused with cumin for a savory taste.', PcsDisplay: '', Rate: 159, Category: 'Rice', VegNonVeg: 'Veg' },
  { Name: 'Veggie Fiesta Fried Rice', Description: 'A colorful bounce of fresh vegetables and fried rice.', PcsDisplay: '', Rate: 299, Category: 'Rice', VegNonVeg: 'Veg' },
  { Name: 'Veggie Galaxy Pulao', Description: 'A light rice dish filled with colorful veggies.', PcsDisplay: '', Rate: 349, Category: 'Rice', VegNonVeg: 'Veg' },
  { Name: 'Vegetable Temptation Biryani', Description: 'Aromatic rice and veggies served with Raita.', PcsDisplay: '', Rate: 449, Category: 'Rice', VegNonVeg: 'Veg' },
  { Name: "Eggs-cursion Fried Rice", Description: 'Embark on a tasty adventure with egg-citing fried rice.', PcsDisplay: '', Rate: 349, Category: 'Rice', VegNonVeg: 'Non-Veg' },
  { Name: 'Chicken Sizzle Fried Rice', Description: 'Sizzling dance of chicken and rice.', PcsDisplay: '', Rate: 399, Category: 'Rice', VegNonVeg: 'Non-Veg' },
  { Name: 'Original Chicken Biryani', Description: 'Aromatic rice with succulent chicken and Raita.', PcsDisplay: '', Rate: 499, Category: 'Rice', VegNonVeg: 'Non-Veg' },
  { Name: 'Vibrant Hakka Noodles', Description: 'Colorful noodles for a flavor-packed experience.', PcsDisplay: '', Rate: 299, Category: 'Noodles', VegNonVeg: 'Veg' },
  { Name: 'Wiggly Chilli Garlic Noodles', Description: 'Thin noodles with a hint of garlic.', PcsDisplay: '', Rate: 289, Category: 'Noodles', VegNonVeg: 'Veg' },
  { Name: 'Eggy Zigzag Noodles', Description: 'Deliciously tangled world of egg-filled noodles.', PcsDisplay: '', Rate: 329, Category: 'Noodles', VegNonVeg: 'Non-Veg' },
  { Name: 'Chicken Haaka Comet Noodles', Description: 'Vibrant noodles with a splash of flavor.', PcsDisplay: '', Rate: 399, Category: 'Noodles', VegNonVeg: 'Non-Veg' },

  // DESSERTS & DRINKS
  { Name: 'Desi Ghee Gulab Jamun', Description: 'Traditional sweet treats; soft and melt-in-the-mouth.', PcsDisplay: '1 PC', Rate: 49, Category: 'Dessert', VegNonVeg: 'Veg' },
  { Name: 'Fluffy Rasgulla Clouds', Description: 'Soft, spongy, and sugar-syrup-soaked treats.', PcsDisplay: '1 PC', Rate: 39, Category: 'Dessert', VegNonVeg: 'Veg' },
  { Name: 'Ice Cream', Description: 'Choice of Vanilla, Chocolate, Strawberry, or Butterscotch.', PcsDisplay: '', Rate: 59, Category: 'Dessert', VegNonVeg: 'Veg' },
  { Name: 'Magical Brownie Planet', Description: 'Moist eggless brownie, perfect for chocolate lovers.', PcsDisplay: '1 PC', Rate: 59, Category: 'Dessert', VegNonVeg: 'Veg' },
  { Name: 'Ice Cream with Brownies', Description: 'Vanilla ice cream with moist eggless brownie goodness.', PcsDisplay: '', Rate: 79, Category: 'Dessert', VegNonVeg: 'Veg' },
  { Name: 'Kool Kulfi', Description: 'Traditional rich and creamy frozen kulfi.', PcsDisplay: '1 PC', Rate: 89, Category: 'Dessert', VegNonVeg: 'Veg' },
  { Name: 'Decadent Choco Lava Delight', Description: 'Warm dessert with a gooey chocolate center.', PcsDisplay: '1 PC', Rate: 99, Category: 'Dessert', VegNonVeg: 'Veg' },
  { Name: 'Chocolate Mousse Cup', Description: 'Light and airy chocolate mousse.', PcsDisplay: '1 PC', Rate: 99, Category: 'Dessert', VegNonVeg: 'Veg' },
  { Name: 'Chocolate Donuts', Description: 'Delightfully soft chocolate donuts.', PcsDisplay: '1 PC', Rate: 99, Category: 'Dessert', VegNonVeg: 'Veg' },
  { Name: 'Little Jalebis With Rabri', Description: 'Traditional jalebis paired with creamy rabri.', PcsDisplay: '', Rate: 229, Category: 'Dessert', VegNonVeg: 'Veg' },
  { Name: 'Gajar Halwa', Description: 'Rich dessert made with grated carrots and milk.', PcsDisplay: '250 GMS', Rate: 299, Category: 'Dessert', VegNonVeg: 'Veg' },
  { Name: 'Hot Chocolate Fondue', Description: 'Marshmallows with hot chocolate fondue.', PcsDisplay: '30 PCS', Rate: 1999, Category: 'Dessert', VegNonVeg: 'Veg' },
  { Name: 'Fresh Lemonade', Description: 'Refreshing blend of lemons and sweetness.', PcsDisplay: '200 ml', Rate: 39, Category: 'Drinks', VegNonVeg: 'Veg' },
  { Name: 'Lemon Ice Tea', Description: 'Refreshing tea infused with citrus goodness.', PcsDisplay: '200 ml', Rate: 49, Category: 'Drinks', VegNonVeg: 'Veg' },
  { Name: 'Hot Tea', Description: 'Perfectly brewed hot tea.', PcsDisplay: '200 ml', Rate: 49, Category: 'Drinks', VegNonVeg: 'Veg' },
  { Name: 'Blue Curacao', Description: 'A sweet and vibrant tropical sensation.', PcsDisplay: '200 ml', Rate: 79, Category: 'Drinks', VegNonVeg: 'Veg' },
  { Name: 'Hot Coffee', Description: 'Steaming cup of rich, aromatic coffee.', PcsDisplay: '200 ml', Rate: 79, Category: 'Drinks', VegNonVeg: 'Veg' },
  { Name: 'Hot Chocolate', Description: 'Warm, sweet drink made with rich cocoa.', PcsDisplay: '200 ml', Rate: 89, Category: 'Drinks', VegNonVeg: 'Veg' },
  { Name: 'Classic Tomato Soup', Description: 'Comforting cup of velvety tomato goodness.', PcsDisplay: '200 ml', Rate: 89, Category: 'Drinks', VegNonVeg: 'Veg' },
  { Name: 'Smoothies', Description: 'Choice of Vanilla, Chocolate, or Strawberry.', PcsDisplay: '200 ml', Rate: 99, Category: 'Drinks', VegNonVeg: 'Veg' },

  // LIVE STATIONS
  { Name: 'Waffle Station', Description: 'Freshly cooked golden waffles with a delightful array of toppings including chocolates, syrups, nuts, and ice cream.', PcsDisplay: '', Rate: 9999, Category: 'Live Stations', VegNonVeg: 'Veg' },
  { Name: 'Churros Station', Description: 'Delicious churros served with a variety of dipping sauces.', PcsDisplay: '', Rate: 9999, Category: 'Live Stations', VegNonVeg: 'Veg' },
  { Name: 'Mini Pancakes', Description: 'Fluffy mini pancakes served with syrup and toppings.', PcsDisplay: '', Rate: 9999, Category: 'Live Stations', VegNonVeg: 'Veg' },
  { Name: 'Popcorn Station', Description: 'A guaranteed crowd-puller for movie nights, birthdays, or any fun gathering!', PcsDisplay: '', Rate: 7999, Category: 'Live Stations', VegNonVeg: 'Veg' },
  { Name: 'Cotton Candy Station', Description: 'Clouds of sugary sweetness spin right before your eyes, creating a magical treat that delights kids and adults alike.', PcsDisplay: '', Rate: 7999, Category: 'Live Stations', VegNonVeg: 'Veg' },
  { Name: 'Chocolate Fountain', Description: 'Big chocolate fountain with assortments like marshmallows, brownies, strawberries on skewers.', PcsDisplay: '', Rate: 7999, Category: 'Live Stations', VegNonVeg: 'Veg' },
  { Name: 'Potato Spiral', Description: 'Crispy spiraled potato on a stick, a crunchy treat perfect for snacking on the go.', PcsDisplay: '', Rate: 7999, Category: 'Live Stations', VegNonVeg: 'Veg' },
  { Name: 'Burger Station', Description: 'Mini burger station with a variety of fillings and toppings to choose from.', PcsDisplay: '', Rate: 0, Category: 'Live Stations', VegNonVeg: 'Veg', CustomPrice: '₹2500 setup + ₹300/- per person' },
  { Name: 'Pizza Station', Description: 'Create your own mini pizzas with a variety of toppings and sauces.', PcsDisplay: '', Rate: 0, Category: 'Live Stations', VegNonVeg: 'Veg', CustomPrice: '₹5000 setup + ₹500/- per person' },
  { Name: 'Pasta Station', Description: 'Fresh, hot pasta cooked live with your choice of sauce - Pink, White or Red Sauce.', PcsDisplay: '', Rate: 0, Category: 'Live Stations', VegNonVeg: 'Veg', CustomPrice: '₹2500 setup + ₹300 per person' },
  { Name: 'Dim-Sum Station', Description: 'Steamed dim-sums made live with a variety of fillings.', PcsDisplay: '', Rate: 0, Category: 'Live Stations', VegNonVeg: 'Veg', CustomPrice: '₹2000 setup + ₹200 per person' },
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
      <div className="w-full max-w-[1000px] mx-auto text-center">
        <header className="flex flex-col items-center mb-4 sm:mb-6">
          <div className="flex items-center gap-2 sm:gap-3 w-full">
            <button
              onClick={() => setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length)}
              aria-label="Previous category"
              className="bg-[#FFCB05] border-2 sm:border-3 border-[#FFCB05] px-2 sm:px-3 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl font-bold cursor-pointer shadow-[3px_3px_0_#F26522] sm:shadow-[6px_6px_0_#F26522] text-sm sm:text-lg hover:scale-105 transition-transform flex-shrink-0"
            >
              ←
            </button>
            <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-black text-[#F26522] uppercase my-0 flex-1 line-clamp-2" style={{ textShadow: '1px 1px #FFCB05' }}>
              ✨ {formatLabel(label)} ✨
            </h2>
            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % categories.length)}
              aria-label="Next category"
              className="bg-[#FFCB05] border-2 sm:border-3 border-[#FFCB05] px-2 sm:px-3 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl font-bold cursor-pointer shadow-[3px_3px_0_#F26522] sm:shadow-[6px_6px_0_#F26522] text-sm sm:text-lg hover:scale-105 transition-transform flex-shrink-0"
            >
              →
            </button>
          </div>
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
                    <span className="line-clamp-2">{item.Name}</span>
                  </div>
                  {mounted && isMobile && (
                    <div className="text-xs sm:text-sm font-bold text-[#F26522] ml-2 flex-shrink-0">
                      {item.Rate === 0 ? (item.CustomPrice ? item.CustomPrice.split(' ')[0] : 'N/A') : '₹' + item.Rate + '/-'}
                    </div>
                  )}
                </div>

                {mounted && isMobile ? (
                  <div className="flex justify-between items-start w-full gap-2">
                    <p className="text-xs sm:text-sm font-bold leading-relaxed text-[#333333] flex-1">
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
                    <p className="text-sm md:text-lg font-bold leading-relaxed text-[#333333] mb-3 sm:mb-4 flex-1">
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
