import React from 'react'
import Layout_comp from '../component/Layout/Layout_comp'
import authService from '../services/Authentication'

import Hero from '../component/hero/hero'

import LatestCollction from '../component/latestCpmponent/LatestCollction'
import BestSeller from '../component/bestSeller/BestSeller'
import Testimonials from '../component/testimonials/Testimonial'
import Features from '../component/features/Features'
const HomePage = () => {
  if(true){

console.log('user is logged in')
  } else {
    console.log('user is not logged in')
  }
  return (
    <Layout_comp>
     
        <Hero />
        <LatestCollction/>
        <BestSeller/>
         
        <Testimonials/>
        <Features/>
      
    </Layout_comp>
  )
}

export default HomePage;
