import React, { useContext, useState } from 'react'
import Layout_comp from "../component/Layout/Layout_comp";
import ProductImage from '../component/productImage/ProductImage';
import ProductDetail from '../component/ProductDetail.jsx/ProductDetail';
import { CartContext } from '../context/CartContext';

const ProductPage = () => {
  const {cart,setCart} = useContext(CartContext)
  const url = window.location.href;
  const CurrproductId = url.split('/:')[1]
  const [addbtn,setAddbtn]= useState('Add to Cart')

  const handleAddCart = ()=>{
    if(cart.includes(CurrproductId)){
      setAddbtn('Add to Cart')
      const newCartProd = cart.filter(e=> e!== CurrproductId)
      setCart(newCartProd)
      // console.log(addbtn)
      return
    } else{
      setCart([...cart,CurrproductId])
      setAddbtn('Remove from Cart')
      
      // console.log(cart)
    }
  }
  console.log(cart)
  return (
    <Layout_comp>
      <div className='min-h-screen flex  '>
        <div className='w-3/5'>
          <ProductImage Prodid={CurrproductId} />
        </div>
        <div className='w-2/5'>
          <ProductDetail Prodid={CurrproductId} />
          <button onClick={handleAddCart}>{addbtn}</button>
        </div>
      </div>
    </Layout_comp>
  )
}

export default ProductPage