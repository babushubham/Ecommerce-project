import React, { Children } from 'react'
import Navbar from '../navbar/Navbar'
import Footer_comp from '../footer/Footer_comp'

const Layout_comp = ({children}) => {
  return (
    <>
    <Navbar/>
    {children}
    <Footer_comp/>
    </>
  )
}

export default Layout_comp