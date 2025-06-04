import React, { useContext } from 'react'
import { ShopContext } from '../../context/Shopcontext'
import { Link } from 'react-router-dom';

const ProductItem = ({id,image,price,name}) => {
    const {currency }= useContext(ShopContext);
  return (
    <Link
      to={`/product/${id}`}
      className="w-64 h-96 p-4 m-6 bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-lg hover:scale-[1.03] transition-transform duration-300 group"
    >
      {/* Image Section */}
      <div className="w-full h-56 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content Section */}
      <div className="mt-4 px-1 flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">{name}</h2>

        <div className="flex justify-between items-center">
          <p className="text-lg font-bold text-red-500">${price}</p>
          <span className="text-sm bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
            ★ 4.5
          </span>
        </div>
      </div>
    </Link>
  )
}

export default ProductItem