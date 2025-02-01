import React from 'react'
import Layout_comp from '../component/Layout/Layout_comp'
import authService from '../services/Authentication'

import Hero from '../component/hero/hero'
import ProductList from '../component/productList/productList'
const HomePage = () => {
  if(true){

console.log('user is logged in')
  } else {
    console.log('user is not logged in')
  }
  return (
    <Layout_comp>
      <div className=' min-h-screen'>
        <Hero />
        <div className='mx-28 mb-16 flex gap-4 items-center'><div className='h-12 w-6 rounded  bg-orange-500 '></div><h1 className='text-2xl'>Today's deal</h1></div>
        <ProductList/>
        
      </div>
    </Layout_comp>
  )
}

export default HomePage;
