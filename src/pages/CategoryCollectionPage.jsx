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

        
        <div className="flex items-center justify-center gap-8 my-20 px-6 py-10 rounded-2xl shadow-md bg-[#FFF7ED] border border-orange-200 relative overflow-hidden">

  {/* Tilted Gradient Side Bar - Left */}
  <div className="w-3 h-20 bg-gradient-to-b from-orange-400 to-pink-400 rotate-6 rounded-lg shadow-md"></div>

  {/* Funky Title */}
  <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-800 relative group tracking-wide text-center transition-all duration-300">
    {currCateogry.replaceAll('%20', ' ')}

    {/* Funky Underline */}
    <span className="block mt-3 h-1 w-full bg-orange-400 rounded-full group-hover:w-1/2 transition-all duration-500 ease-in-out"></span>
  </h1>

  {/* Tilted Gradient Side Bar - Right */}
  <div className="w-3 h-20 bg-gradient-to-b from-pink-400 to-orange-400 -rotate-6 rounded-lg shadow-md"></div>
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