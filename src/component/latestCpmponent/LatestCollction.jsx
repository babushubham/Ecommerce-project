import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../context/Shopcontext'
import Title from '../title/Title'
import ProductItem from '../productItem/ProductItem'
import headphone from '../../asset/headphone.jpeg'

const LatestCollction = () => {
    const {products} =useContext(ShopContext)
    const [latestPoduct,setLatestProduct] = useState([]);
    useEffect(()=>{
        setLatestProduct(products.slice(0,4));
    },[])

  return (
    <div className='m-14'>
        <Title text1={'Latest Collection' }/>
        <div className='flex justify-around items-center m-10 gap-5 overflow-x-scroll scrollbar-hide h-96'>
            {
                latestPoduct.map((item,index)=>{
                    return(
                        <ProductItem key={index} id={item.productId} name={item.name} image={headphone} price={item.price} />
                    )
                })
            }
        </div>

    </div>
  )
}

export default LatestCollction