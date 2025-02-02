// import appliancesBanner from '../asset/Electronic_appliances.webp'
// import game from './gaming.svg'
// import cart from './shopping.svg'
// import headphone from './headphone.jpeg'
// import laptop from './laptop.jpeg'
// import iphonebanner from './iphone_banner.jpeg'
// import iphone from './iphonep.jpeg'
// import iphonebanner2 from './iphone.jpeg'
// import laptopbanner from './laptopBanner.jpeg'
// // import salebanner from './megasale.jpeg'
// // import search from './search.svg'
// // import store from './store.svg'

// export const asset = {
//     appliancesBanner,
//     game,
//     cart,
//     headphone,
//     laptop,
//     iphonebanner,
//     iphone,
//     iphonebanner2,
//     laptopbanner,
//     salebanner,
//     search,
//     store
// } 


const products = [
  {
    productId: "E001",
    name: "Wireless Bluetooth Headphones",
    description: "Noise-cancelling over-ear headphones with deep bass.",
    price: 89.99,
    image: "https://via.placeholder.com/200",
    category: "Electronics",
    subCategory: "Audio",
    size: [],
    date: "2024-01-10",
    bestseller: true,
  },
  {
    productId: "E002",
    name: "Smartwatch Pro X",
    description: "Advanced smartwatch with fitness tracking and heart rate monitoring.",
    price: 149.99,
    image: "https://via.placeholder.com/200",
    category: "Electronics",
    subCategory: "Wearables",
    size: [],
    date: "2024-01-12",
    bestseller: true,
  },
  {
    productId: "E003",
    name: "Gaming Mouse RGB",
    description: "High-precision gaming mouse with customizable lighting.",
    price: 49.99,
    image: "https://via.placeholder.com/200",
    category: "Electronics",
    subCategory: "Gaming",
    size: [],
    date: "2024-01-15",
    bestseller: false,
  },
  {
    productId: "E004",
    name: "Mechanical Gaming Keyboard",
    description: "Tactile and clicky mechanical keyboard with RGB backlighting.",
    price: 79.99,
    image: "https://via.placeholder.com/200",
    category: "Electronics",
    subCategory: "Gaming",
    size: [],
    date: "2024-01-18",
    bestseller: true,
  },
  {
    productId: "E005",
    name: "Wireless Earbuds",
    description: "Compact and powerful earbuds with noise isolation.",
    price: 59.99,
    image: "https://via.placeholder.com/200",
    category: "Electronics",
    subCategory: "Audio",
    size: [],
    date: "2024-01-20",
    bestseller: true,
  },
  {
    productId: "E006",
    name: "4K Smart TV 55-inch",
    description: "Ultra HD smart TV with HDR support and built-in apps.",
    price: 499.99,
    image: "https://via.placeholder.com/200",
    category: "Electronics",
    subCategory: "TV & Display",
    size: [],
    date: "2024-01-22",
    bestseller: false,
  },
  {
    productId: "E007",
    name: "Portable Bluetooth Speaker",
    description: "Water-resistant speaker with deep bass and long battery life.",
    price: 39.99,
    image: "https://via.placeholder.com/200",
    category: "Electronics",
    subCategory: "Audio",
    size: [],
    date: "2024-01-25",
    bestseller: true,
  },
  {
    productId: "E008",
    name: "Wireless Charging Pad",
    description: "Fast wireless charger for all Qi-compatible devices.",
    price: 29.99,
    image: "https://via.placeholder.com/200",
    category: "Electronics",
    subCategory: "Accessories",
    size: [],
    date: "2024-01-28",
    bestseller: false,
  },
  {
    productId: "E009",
    name: "Laptop Cooling Pad",
    description: "Adjustable cooling pad with silent fans.",
    price: 24.99,
    image: "https://via.placeholder.com/200",
    category: "Electronics",
    subCategory: "Accessories",
    size: [],
    date: "2024-01-30",
    bestseller: false,
  },
  {
    productId: "E010",
    name: "VR Headset",
    description: "Immersive virtual reality headset for gaming and entertainment.",
    price: 199.99,
    image: "https://via.placeholder.com/200",
    category: "Electronics",
    subCategory: "Gaming",
    size: [],
    date: "2024-02-01",
    bestseller: true,
  },
  {
    productId: "E011",
    name: "Noise Cancelling Headphones",
    description: "Premium headphones with superior noise cancellation.",
    price: 129.99,
    image: "https://via.placeholder.com/200",
    category: "Electronics",
    subCategory: "Audio",
    size: [],
    date: "2024-02-05",
    bestseller: true,
  },
  {
    productId: "E012",
    name: "USB-C Hub",
    description: "Multi-port USB-C adapter for all your connectivity needs.",
    price: 34.99,
    image: "https://via.placeholder.com/200",
    category: "Electronics",
    subCategory: "Accessories",
    size: [],
    date: "2024-02-07",
    bestseller: false,
  },
  {
    productId: "E013",
    name: "Smart Home Security Camera",
    description: "WiFi-enabled security camera with night vision.",
    price: 89.99,
    image: "https://via.placeholder.com/200",
    category: "Electronics",
    subCategory: "Smart Home",
    size: [],
    date: "2024-02-10",
    bestseller: true,
  },
  {
    productId: "E014",
    name: "1080p Dash Cam",
    description: "Compact dashboard camera with loop recording.",
    price: 69.99,
    image: "https://via.placeholder.com/200",
    category: "Electronics",
    subCategory: "Car Accessories",
    size: [],
    date: "2024-02-12",
    bestseller: false,
  },
  {
    productId: "E015",
    name: "Wireless Gaming Controller",
    description: "Multi-platform gaming controller with ergonomic design.",
    price: 59.99,
    image: "https://via.placeholder.com/200",
    category: "Electronics",
    subCategory: "Gaming",
    size: [],
    date: "2024-02-15",
    bestseller: true,
  },
  {
    productId: "E016",
    name: "1080p Webcam",
    description: "Full HD webcam with noise-reducing microphone.",
    price: 39.99,
    image: "https://via.placeholder.com/200",
    category: "Electronics",
    subCategory: "Accessories",
    size: [],
    date: "2024-02-18",
    bestseller: true,
  },
  {
    productId: "E017",
    name: "Tablet with Stylus",
    description: "10-inch tablet with stylus support for artists and students.",
    price: 299.99,
    image: "https://via.placeholder.com/200",
    category: "Electronics",
    subCategory: "Tablets",
    size: [],
    date: "2024-02-20",
    bestseller: false,
  }
];

export default products;

  

  