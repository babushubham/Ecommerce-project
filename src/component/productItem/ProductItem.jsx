import React, { useContext } from 'react'
import { ShopContext } from '../../context/Shopcontext'
import { Link } from 'react-router-dom';

const ProductItem = ({id,image,price,name}) => {
    const {currency }= useContext(ShopContext);
  return (
    <Link to={`/product/${id}`} className='w-64 h-96 p-5 shadow-md  shadow-gray-200 border-gray-50 border-[1px]  rounded-xl  hover:shadow-lg hover:shadow-gray-400 hover:scale-105'>
       <div className='rounded-sm w-56 h-56'>
                   <img src={image} alt="" className='rounded-md w-56 h-56 object-cover' />
                   </div>
                   <div className='mt-4 px-2'>
                       <h2 className='text-xl'>{name}</h2>
                       <p className='text-lg text-red-500'>$ {price}</p>
                       <p className=''> 4.5</p>
       
                   </div>
    </Link>
  )
}

export default ProductItem