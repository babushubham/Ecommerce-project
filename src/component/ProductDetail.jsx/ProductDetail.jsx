import React, { useContext } from 'react'
import { ShopContext } from '../../context/Shopcontext'

const ProductDetail = ({Prodid}) => {
    const {products} = useContext(ShopContext);
    const product = products.filter(product=>product.productId === Prodid);
    // console.log(product[0])
    const ProductDesc = product[0].description;
    const ProductPrice = product[0].price;
    const productName = product[0].name;
    const bestSeller = product[0].bestseller;
    // console.log(bestSeller)



  return (
    <div className='py-20 px-10'>
        <h1 className='text-4xl py-6'>{productName}</h1>
        <p className='text-xl py-6 pr-4 text-gray-600'>{ProductDesc}</p>
        <p className='text-3xl'>Price: $ {ProductPrice}</p>
        
        <div className={bestSeller? 'bg-orange-500 rounded-md mt-10 w-32 text-xl h-10 flex items-center justify-center':'hidden'} ><div className=' text-center font-semibold'>{bestSeller? "BestSeller":''}</div></div>
    </div>
  )
}

export default ProductDetail