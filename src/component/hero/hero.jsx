import React from 'react'
import iphonebanner from '../../asset/iphone_banner.jpeg'
import Tilt from 'react-parallax-tilt';
import salebanner from '../../asset/megasale.jpeg'

const heroComp = () => {
    return (
        <section className="bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-black py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12">
  {/* Left Side */}
  <div className="max-w-xl space-y-6 text-center md:text-left">
    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
      Discover Your <span className="text-indigo-600">Next Favorite</span> Product
    </h1>
    <p className="text-lg text-gray-600 dark:text-gray-300">
      Quality you deserve, with deals you can’t resist. Browse thousands of products tailored for your lifestyle.
    </p>
    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
      <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition">
        Shop Now
      </button>
      <button className="px-6 py-3 bg-white border border-gray-300 rounded-xl shadow hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
        Explore Categories
      </button>
    </div>
  </div>

  {/* Right Side */}
  <div className="relative">
    <Tilt
  tiltMaxAngleX={20}
  tiltMaxAngleY={20}
  perspective={1000}
  transitionSpeed={1000}
  scale={1.05}
  className="w-[320px] md:w-[400px] rounded-xl shadow-xl"
>
    <img
      src={iphonebanner}
      alt="Featured Product"
      className="w-[320px] md:w-[400px] object-contain drop-shadow-2xl"
    /></Tilt>
    <span className="absolute top-4 left-4 bg-yellow-300 text-black px-3 py-1 rounded-full text-sm font-bold shadow-lg">
      New Arrival
    </span>
  </div>
</section>

    )
}

export default heroComp