import React, { useContext } from 'react'
import { ShopContext } from '../../context/Shopcontext'
import { Link } from 'react-router-dom';

const ProductItem = ({id,image,price,name}) => {
    const {currency }= useContext(ShopContext);
  return (
    <Link to={`/product/${id}`} className='w-56 h-80'>
       <div className='rounded-sm w-56 h-56'>
                   <img src={image} alt="" className='rounded-md w-56 h-56 object-cover' />
                   </div>
                   <div>
                       <h2 className='text-2xl'>{name}</h2>
                       <p className='text-lg text-red-500'>$ {price}</p>
                       <p className=''> 4.5</p>
       
                   </div>
    </Link>
  )
}

export default ProductItem