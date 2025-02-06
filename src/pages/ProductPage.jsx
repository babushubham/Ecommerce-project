import React from 'react'
import Layout_comp from "../component/Layout/Layout_comp";
import ProductImage from '../component/productImage/ProductImage';
import ProductDetail from '../component/ProductDetail.jsx/ProductDetail';

const ProductPage = () => {
  const url = window.location.href;
  const CurrproductId = url.split('/:')[1]
  return (
<Layout_comp>
  <div className='min-h-screen flex  '>
    <div className='w-3/5'>
      <ProductImage Prodid={CurrproductId}/>
    </div>
    <div className='w-2/5'>
      <ProductDetail Prodid={CurrproductId}/>
    </div>
  </div>
</Layout_comp>
  )
}

export default ProductPage