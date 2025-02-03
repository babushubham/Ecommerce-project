import React, { useCallback, useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../context/Shopcontext'
import Title from '../title/Title';
import ProductItem from '../productItem/ProductItem';
import headphone from '../../asset/headphone.jpeg'


const BestSeller = () => {
    const {products} = useContext(ShopContext);
    const [bestSeller,setBestSeller] = useState([]);
    useEffect(()=>{
       const filteredProduct = products.filter((item)=>item.bestseller == true )
        setBestSeller(filteredProduct.slice(3,7));
    },[])
  return (
    <div className='m-14'>
        <Title text1={'Best Sellers' }/>
        <div className='flex justify-around items-center m-10 gap-5 overflow-x-scroll scrollbar-hide h-96'>
            {
                bestSeller.map((item,index)=>{
                    return(
                        <ProductItem key={index} id={item.productId} name={item.name} image={headphone} price={item.price} />
                    )
                })
            }
        </div>

    </div>
  )
}

export default BestSeller