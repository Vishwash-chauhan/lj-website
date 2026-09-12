export interface ModelCoefficients {
  w_adult: number
  w_kids: number
  bias: number
  n_samples?: number
  cv_mae?: number
  category?: string
}

export interface AIModelData {
  min_samples_dish: number
  min_samples_category: number
  global: ModelCoefficients
  categories: Record<string, ModelCoefficients>
  dishes: Record<string, ModelCoefficients>
  dish_to_category: Record<string, string>
}

export const aiModel: AIModelData = {
  "min_samples_dish": 12,
  "min_samples_category": 8,
  "global": {
    "w_adult": 0.2463,
    "w_kids": 0.4397,
    "bias": 2.247,
    "n_samples": 8511,
    "cv_mae": 9.834
  },
  "categories": {
    "Dessert": {
      "w_adult": 0.6221,
      "w_kids": 0.9798,
      "bias": -2.057,
      "n_samples": 1097,
      "cv_mae": 14.075
    },
    "Drinks": {
      "w_adult": 0.8181,
      "w_kids": 1.0212,
      "bias": 9.723,
      "n_samples": 369,
      "cv_mae": 10.183
    },
    "Live Stations": {
      "w_adult": 0.9894,
      "w_kids": 1.0239,
      "bias": -0.682,
      "n_samples": 22,
      "cv_mae": 0.664
    },
    "Main Course": {
      "w_adult": 0.1796,
      "w_kids": 0.1628,
      "bias": 0.375,
      "n_samples": 2692,
      "cv_mae": 1.019
    },
    "Noodles": {
      "w_adult": 0.0,
      "w_kids": 0.7157,
      "bias": -0.855,
      "n_samples": 10,
      "cv_mae": 0.34
    },
    "Snacks": {
      "w_adult": 0.2905,
      "w_kids": 0.0,
      "bias": 10.74,
      "n_samples": 30,
      "cv_mae": 6.018
    },
    "Table Snacks": {
      "w_adult": 0.2808,
      "w_kids": 0.3948,
      "bias": 1.544,
      "n_samples": 4287,
      "cv_mae": 6.701
    }
  },
  "dishes": {
    "Assorted Veg & Chicken Burgers": {
      "w_adult": 0.481,
      "w_kids": 0.472,
      "bias": 1.469,
      "n_samples": 29,
      "cv_mae": 1.103,
      "category": "Table Snacks"
    },
    "Channa Celestial": {
      "w_adult": 0.1299,
      "w_kids": 0.1683,
      "bias": 0.477,
      "n_samples": 54,
      "cv_mae": 0.523,
      "category": "Main Course"
    },
    "Channa Celestial with Wheat Kulchas": {
      "w_adult": 0.1577,
      "w_kids": 0.1554,
      "bias": 0.549,
      "n_samples": 447,
      "cv_mae": 0.732,
      "category": "Main Course"
    },
    "Cheese Delight Balls": {
      "w_adult": 0.1903,
      "w_kids": 0.2362,
      "bias": 1.312,
      "n_samples": 114,
      "cv_mae": 1.249,
      "category": "Table Snacks"
    },
    "Chicken Keema Comet": {
      "w_adult": 0.169,
      "w_kids": 0.1288,
      "bias": 0.343,
      "n_samples": 14,
      "cv_mae": 0.418,
      "category": "Main Course"
    },
    "Chicken Keema Comet With Bombay Pav": {
      "w_adult": 0.1803,
      "w_kids": 0.0945,
      "bias": 0.689,
      "n_samples": 60,
      "cv_mae": 0.723,
      "category": "Main Course"
    },
    "Creamy Alfredo Whole Wheat Pasta (White Sauce)": {
      "w_adult": 0.1533,
      "w_kids": 0.2659,
      "bias": 0.15,
      "n_samples": 18,
      "cv_mae": 0.764,
      "category": "Main Course"
    },
    "Dal Makhani Marvel with Malabari Paranthas": {
      "w_adult": 0.2034,
      "w_kids": 0.1961,
      "bias": 0.076,
      "n_samples": 39,
      "cv_mae": 0.725,
      "category": "Main Course"
    },
    "Dal Makhani Marvel with Malabari Paranthas/Steamed Rice": {
      "w_adult": 0.1653,
      "w_kids": 0.2164,
      "bias": 0.535,
      "n_samples": 24,
      "cv_mae": 0.55,
      "category": "Main Course"
    },
    "Dal Makhani Marvel with Malabari Paranthas/Wheat Kulchas": {
      "w_adult": 0.1999,
      "w_kids": 0.1748,
      "bias": 0.294,
      "n_samples": 75,
      "cv_mae": 0.595,
      "category": "Main Course"
    },
    "Desi Ghee Gulab Jamun Raindrops": {
      "w_adult": 1.3374,
      "w_kids": 0.7348,
      "bias": -4.264,
      "n_samples": 16,
      "cv_mae": 13.941,
      "category": "Dessert"
    },
    "Dim-Sum Delights": {
      "w_adult": 0.29,
      "w_kids": 0.3383,
      "bias": -1.104,
      "n_samples": 91,
      "cv_mae": 1.609,
      "category": "Table Snacks"
    },
    "Fresh Lemonade": {
      "w_adult": 1.0568,
      "w_kids": 1.2377,
      "bias": 7.302,
      "n_samples": 253,
      "cv_mae": 5.975,
      "category": "Drinks"
    },
    "Green Hero Kebabs": {
      "w_adult": 0.2195,
      "w_kids": 0.2849,
      "bias": 0.219,
      "n_samples": 78,
      "cv_mae": 1.555,
      "category": "Table Snacks"
    },
    "Green Thai Curry With Fragrant Jasmine Rice": {
      "w_adult": 0.1535,
      "w_kids": 0.1011,
      "bias": 1.199,
      "n_samples": 18,
      "cv_mae": 0.778,
      "category": "Main Course"
    },
    "Green/Red/Yellow Thai Curry With Fragrant Jasmine Rice": {
      "w_adult": 0.1143,
      "w_kids": 0.1648,
      "bias": 0.601,
      "n_samples": 16,
      "cv_mae": 1.488,
      "category": "Main Course"
    },
    "Honey Chilli Potato": {
      "w_adult": 0.1701,
      "w_kids": 0.1634,
      "bias": 1.138,
      "n_samples": 103,
      "cv_mae": 0.667,
      "category": "Table Snacks"
    },
    "Hot Tea": {
      "w_adult": 0.8294,
      "w_kids": 0.7964,
      "bias": -0.988,
      "n_samples": 26,
      "cv_mae": 9.112,
      "category": "Drinks"
    },
    "Hot Tea/Coffee": {
      "w_adult": 1.5693,
      "w_kids": 0.2581,
      "bias": -0.49,
      "n_samples": 23,
      "cv_mae": 8.645,
      "category": "Drinks"
    },
    "Ice Cream": {
      "w_adult": 0.9708,
      "w_kids": 1.027,
      "bias": 0.241,
      "n_samples": 370,
      "cv_mae": 0.54,
      "category": "Dessert"
    },
    "Ice Cream with Eggless Brownies": {
      "w_adult": 0.9937,
      "w_kids": 0.9976,
      "bias": 0.201,
      "n_samples": 290,
      "cv_mae": 0.351,
      "category": "Dessert"
    },
    "Idli Delights with Sambhar & Chutney": {
      "w_adult": 0.2359,
      "w_kids": 0.089,
      "bias": 1.22,
      "n_samples": 14,
      "cv_mae": 1.152,
      "category": "Main Course"
    },
    "Kadhai Paneer Delight with Malabari Paranthas": {
      "w_adult": 0.1786,
      "w_kids": 0.1987,
      "bias": -0.607,
      "n_samples": 34,
      "cv_mae": 1.124,
      "category": "Main Course"
    },
    "Kadhai Paneer Delight with Malabari Paranthas/Wheat Kulchas": {
      "w_adult": 0.1594,
      "w_kids": 0.1443,
      "bias": 0.824,
      "n_samples": 59,
      "cv_mae": 0.637,
      "category": "Main Course"
    },
    "Little Jalebis With Rabri": {
      "w_adult": 0.1348,
      "w_kids": 0.0061,
      "bias": 4.696,
      "n_samples": 50,
      "cv_mae": 0.662,
      "category": "Dessert"
    },
    "Little Jalebis With Royal Rabri": {
      "w_adult": 0.1568,
      "w_kids": 0.0897,
      "bias": 2.999,
      "n_samples": 299,
      "cv_mae": 0.83,
      "category": "Dessert"
    },
    "Magical Fairy Fries": {
      "w_adult": 0.3891,
      "w_kids": 0.5462,
      "bias": 0.878,
      "n_samples": 607,
      "cv_mae": 1.382,
      "category": "Table Snacks"
    },
    "Mini Chaat Canapes": {
      "w_adult": 0.2078,
      "w_kids": 0.0761,
      "bias": 0.999,
      "n_samples": 351,
      "cv_mae": 0.902,
      "category": "Table Snacks"
    },
    "Mini Chocolate Donuts": {
      "w_adult": 0.2582,
      "w_kids": 1.295,
      "bias": 0.27,
      "n_samples": 18,
      "cv_mae": 2.686,
      "category": "Dessert"
    },
    "Mini Paneer Popsicle Tikka Rolls": {
      "w_adult": 0.311,
      "w_kids": 0.3309,
      "bias": 0.631,
      "n_samples": 231,
      "cv_mae": 0.428,
      "category": "Table Snacks"
    },
    "Mini Pizzas": {
      "w_adult": 0.7247,
      "w_kids": 0.763,
      "bias": -0.207,
      "n_samples": 726,
      "cv_mae": 1.793,
      "category": "Table Snacks"
    },
    "Mini Veg Sandwich Delights": {
      "w_adult": 0.255,
      "w_kids": 0.2442,
      "bias": 0.284,
      "n_samples": 40,
      "cv_mae": 1.131,
      "category": "Table Snacks"
    },
    "Mini Veg Tacos": {
      "w_adult": 0.3423,
      "w_kids": 0.3116,
      "bias": 0.376,
      "n_samples": 15,
      "cv_mae": 0.663,
      "category": "Table Snacks"
    },
    "Mushroom Magic Bruschetta": {
      "w_adult": 0.1866,
      "w_kids": 0.1225,
      "bias": 1.172,
      "n_samples": 15,
      "cv_mae": 1.183,
      "category": "Table Snacks"
    },
    "Paneer Star Makhani with Malabari Paranthas/Wheat Kulchas": {
      "w_adult": 0.1525,
      "w_kids": 0.1127,
      "bias": 1.301,
      "n_samples": 23,
      "cv_mae": 0.612,
      "category": "Main Course"
    },
    "Paneer Tikka Magic": {
      "w_adult": 0.2654,
      "w_kids": 0.2008,
      "bias": -0.461,
      "n_samples": 103,
      "cv_mae": 1.616,
      "category": "Table Snacks"
    },
    "Pink Sauce Fusion Penne": {
      "w_adult": 0.2024,
      "w_kids": 0.1965,
      "bias": 0.057,
      "n_samples": 61,
      "cv_mae": 0.264,
      "category": "Main Course"
    },
    "Pink Sauce Fusion Penne Whole Wheat Pasta (Mix Sauce)": {
      "w_adult": 0.1969,
      "w_kids": 0.1835,
      "bias": 0.215,
      "n_samples": 506,
      "cv_mae": 0.487,
      "category": "Main Course"
    },
    "Playtime Bombay Pav Bhaji": {
      "w_adult": 0.1692,
      "w_kids": 0.1388,
      "bias": 0.308,
      "n_samples": 351,
      "cv_mae": 0.629,
      "category": "Main Course"
    },
    "Popcorn Party Pops": {
      "w_adult": 0.2816,
      "w_kids": 0.3283,
      "bias": 1.765,
      "n_samples": 29,
      "cv_mae": 4.088,
      "category": "Table Snacks"
    },
    "Rollercoaster Spring Rolls": {
      "w_adult": 0.238,
      "w_kids": 0.3388,
      "bias": -1.939,
      "n_samples": 67,
      "cv_mae": 1.386,
      "category": "Table Snacks"
    },
    "Rollercoaster Veg Spring Rolls": {
      "w_adult": 0.2015,
      "w_kids": 0.1145,
      "bias": 1.418,
      "n_samples": 546,
      "cv_mae": 1.023,
      "category": "Table Snacks"
    },
    "Starship Chicken Nuggets": {
      "w_adult": 0.1242,
      "w_kids": 0.2761,
      "bias": 2.291,
      "n_samples": 20,
      "cv_mae": 2.073,
      "category": "Table Snacks"
    },
    "Stir Fried Vegetables": {
      "w_adult": 0.172,
      "w_kids": 0.1361,
      "bias": -0.096,
      "n_samples": 16,
      "cv_mae": 0.412,
      "category": "Main Course"
    },
    "Stir Fried Vegetables in Butter Garlic Sauce": {
      "w_adult": 0.1555,
      "w_kids": 0.1297,
      "bias": 0.74,
      "n_samples": 34,
      "cv_mae": 0.775,
      "category": "Main Course"
    },
    "Stir Fried Vegetables in Butter Garlic Sauce/Hot Garlic Sauce": {
      "w_adult": 0.1756,
      "w_kids": 0.1749,
      "bias": -0.821,
      "n_samples": 121,
      "cv_mae": 0.719,
      "category": "Main Course"
    },
    "Sunshine Cheese Corn Nuggets": {
      "w_adult": 0.2863,
      "w_kids": 0.3048,
      "bias": 0.444,
      "n_samples": 133,
      "cv_mae": 1.214,
      "category": "Table Snacks"
    },
    "Veg & Chicken Snacker Burgers": {
      "w_adult": 0.4782,
      "w_kids": 0.5027,
      "bias": 0.574,
      "n_samples": 37,
      "cv_mae": 0.544,
      "category": "Table Snacks"
    },
    "Veg Dim-Sum Delights": {
      "w_adult": 0.2349,
      "w_kids": 0.2184,
      "bias": 1.091,
      "n_samples": 43,
      "cv_mae": 1.446,
      "category": "Table Snacks"
    },
    "Veg Snacker Burgers": {
      "w_adult": 0.4915,
      "w_kids": 0.4912,
      "bias": 0.509,
      "n_samples": 202,
      "cv_mae": 0.679,
      "category": "Table Snacks"
    },
    "Vegetable Temptation Biryani With Raita": {
      "w_adult": 0.1968,
      "w_kids": 0.1989,
      "bias": -0.359,
      "n_samples": 66,
      "cv_mae": 0.876,
      "category": "Main Course"
    },
    "Veggie Fiesta Fried Rice": {
      "w_adult": 0.1637,
      "w_kids": 0.1055,
      "bias": 2.173,
      "n_samples": 12,
      "cv_mae": 0.549,
      "category": "Main Course"
    },
    "Veggie Garden Finger Bites": {
      "w_adult": 0.2308,
      "w_kids": 0.1495,
      "bias": 4.921,
      "n_samples": 69,
      "cv_mae": 2.106,
      "category": "Table Snacks"
    },
    "Veggie Marvel Manchurian": {
      "w_adult": 0.1728,
      "w_kids": 0.1272,
      "bias": 0.207,
      "n_samples": 142,
      "cv_mae": 0.516,
      "category": "Main Course"
    },
    "Vibrant Hakka Noodles": {
      "w_adult": 0.2,
      "w_kids": 0.1929,
      "bias": 0.331,
      "n_samples": 746,
      "cv_mae": 0.42,
      "category": "Main Course"
    },
    "Vibrant Hakka Noodles with Hot Garlic Sauce": {
      "w_adult": 0.2121,
      "w_kids": 0.2244,
      "bias": -0.329,
      "n_samples": 14,
      "cv_mae": 0.625,
      "category": "Main Course"
    },
    "Whimsical Potato Wedges": {
      "w_adult": 0.4554,
      "w_kids": 0.0,
      "bias": 3.182,
      "n_samples": 37,
      "cv_mae": 4.54,
      "category": "Table Snacks"
    },
    "Yummy Chilli Paneer (Dry)": {
      "w_adult": 0.2702,
      "w_kids": 0.1032,
      "bias": 0.688,
      "n_samples": 19,
      "cv_mae": 1.132,
      "category": "Table Snacks"
    }
  },
  "dish_to_category": {
    "Assorted Veg & Chicken Burgers": "Table Snacks",
    "Channa Celestial with Wheat Kulchas": "Main Course",
    "Cheese Delight Balls": "Table Snacks",
    "Chicken Keema Comet With Bombay Pav": "Main Course",
    "Creamy Alfredo Whole Wheat Pasta (White Sauce)": "Main Course",
    "Dal Makhani Marvel with Malabari Paranthas/Wheat Kulchas": "Main Course",
    "Desi Ghee Gulab Jamun Raindrops": "Dessert",
    "Dim-Sum Delights": "Table Snacks",
    "Fresh Lemonade": "Drinks",
    "Green Hero Kebabs": "Table Snacks",
    "Green/Red/Yellow Thai Curry With Fragrant Jasmine Rice": "Main Course",
    "Honey Chilli Potato": "Table Snacks",
    "Hot Tea": "Drinks",
    "Hot Coffee": "Drinks",
    "Ice Cream": "Dessert",
    "Ice Cream with Eggless Brownies": "Dessert",
    "Idli Delights with Sambhar & Chutney": "Main Course",
    "Kadhai Paneer Delight with Malabari Paranthas/Wheat Kulchas": "Main Course",
    "Little Jalebis With Royal Rabri": "Dessert",
    "Magical Fairy Fries": "Table Snacks",
    "Mini Chaat Canapes": "Table Snacks",
    "Mini Paneer Popsicle Tikka Rolls": "Table Snacks",
    "Mini Pizzas": "Table Snacks",
    "Mini Veg Sandwich Delights": "Table Snacks",
    "Mini Veg Tacos": "Table Snacks",
    "Mushroom Magic Bruschetta": "Table Snacks",
    "Paneer Star Makhani with Malabari Paranthas/Wheat Kulchas": "Main Course",
    "Paneer Tikka Magic": "Table Snacks",
    "Pink Sauce Fusion Penne Whole Wheat Pasta (Mix Sauce)": "Main Course",
    "Playtime Bombay Pav Bhaji": "Main Course",
    "Popcorn Party Pops": "Table Snacks",
    "Rollercoaster Veg Spring Rolls": "Table Snacks",
    "Starship Chicken Nuggets": "Table Snacks",
    "Stir Fried Vegetables in Butter Garlic Sauce/Hot Garlic Sauce": "Main Course",
    "Sunshine Cheese Corn Nuggets": "Table Snacks",
    "Veg Dim-Sum Delights": "Table Snacks",
    "Veg Snacker Burgers": "Table Snacks",
    "Vegetable Temptation Biryani With Raita": "Main Course",
    "Veggie Fiesta Fried Rice": "Main Course",
    "Veggie Garden Finger Bites": "Table Snacks",
    "Veggie Marvel Manchurian": "Main Course",
    "Vibrant Hakka Noodles": "Main Course",
    "Whimsical Potato Wedges": "Table Snacks",
    "Yummy Chilli Paneer (Dry)": "Table Snacks"
  }
}

/**
 * Predicts portions or quantity using the linear regression model:
 * y = w_adult * adults + w_kids * kids + bias
 */
export function predictPortions(
  dishName: string,
  category: string,
  kids: number,
  adults: number
): number {
  if (kids <= 0 && adults <= 0) return 1

  // 1. Try dish-level coefficients
  if (aiModel.dishes[dishName]) {
    const coeff = aiModel.dishes[dishName]
    const val = coeff.w_adult * adults + coeff.w_kids * kids + coeff.bias
    return Math.max(1, Math.round(val))
  }

  // 2. Try category-level coefficients
  const normCategory = category === 'Snacks' ? 'Table Snacks' : category
  if (aiModel.categories[normCategory]) {
    const coeff = aiModel.categories[normCategory]
    const val = coeff.w_adult * adults + coeff.w_kids * kids + coeff.bias
    return Math.max(1, Math.round(val))
  }

  // 3. Fallback to global coefficients
  const g = aiModel.global
  const val = g.w_adult * adults + g.w_kids * kids + g.bias
  return Math.max(1, Math.round(val))
}
