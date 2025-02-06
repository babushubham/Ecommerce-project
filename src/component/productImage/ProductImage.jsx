import React, { useContext } from 'react'
import { ShopContext } from '../../context/Shopcontext';
import headphone from '../../asset/headphone.jpeg'

const ProductImage = ({Prodid}) => {
  const {products} = useContext(ShopContext);

const product = products.filter(product=>product.productId === Prodid);


  const productImage = product.image ;

  return (
    <div className='  flex items-center flex-col justify-center h-[90%]'>
      
      <img src={productImage? productImage:headphone   } className='rounded-xl  w-3/4' alt="" />
    </div>
  )
}

export default ProductImage