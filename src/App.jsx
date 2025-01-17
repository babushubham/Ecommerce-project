import React from 'react'
import Navbar from './component/navbar/Navbar'
import Login_comp from './component/login_form/Login_comp'
import SignUpComp from './component/SignUpForm/SignUpComp'

const App = () => {
  return (
   <div className='min-h-screen flex flex-col  items-center '>
   <Navbar/>
   <SignUpComp/>
   </div>
  )
}

export default App