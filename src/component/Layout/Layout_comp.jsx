import React, { Children } from 'react'
import Navbar from '../navbar/Navbar'
import Footer_comp from '../footer/Footer_comp'


const Layout_comp = ({children}) => {
  return (
    <div className='min-h-screen overflow-x-hidden'>
    <Navbar/>
   
    {children}
    <Footer_comp/>
    </div>
  )
}

export default Layout_comp