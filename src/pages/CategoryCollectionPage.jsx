import React, { useContext, useEffect, useState } from 'react'
import Layout_comp from '../component/Layout/Layout_comp'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/Shopcontext'
import ProductItem from '../component/productItem/ProductItem'
import iphone from '../asset/iphonep.jpeg'

const CategoryCollectionPage = () => {
  const { products } = useContext(ShopContext)
  const url = window.location.href;
  const [catprod, setCatProd] = useState([])

  const currCateogry = url.split('/:')[1].trim();

  useEffect(() => {
    setCatProd(products.filter(product => product.subCategory == currCateogry.replaceAll('%20', ' ')))


  }, [products, currCateogry])
  console.log(catprod)


  return (
    <Layout_comp>
      <div className='flex flex-col items-center justify-center '>
        <div className='flex gap-8 items-center justify-center my-16 py-6 px-12 bg-gray-100 shadow-lg border-gray-300 border rounded-xl  '>
          <div className='w-8 h-16 bg-orange-500 rounded-md'></div>
          <h1 className='text-5xl  '>{currCateogry.replaceAll('%20', ' ')}</h1>
          <div className='w-8 h-16 bg-orange-500 rounded-md'></div>
        </div>
        <div className='flex flex-wrap min-h-screen'>
          {catprod.map((product, index) => (
            <ProductItem id={product.productId} key={index} image={iphone} name={product.name} price={product.price} />
          ))}
        </div>
      </div>
    </Layout_comp>
  )
}

export default CategoryCollectionPage