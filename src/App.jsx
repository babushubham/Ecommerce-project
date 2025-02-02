import React from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import ProductPage from './pages/ProductPage'

import HomePage from './pages/HomePage'
import SignupPage from './pages/signupPage'
import LoginPage from './pages/LoginPage'
import {Provider} from 'react-redux';
import ContactUsPage from './pages/ContactUsPage'
import AboutPage from './pages/AboutPage'
import Collection from './pages/Collection'

const App = () => {
  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/contact' element={<ContactUsPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/product/:id' element={<ProductPage/>}/>
      <Route path='/collection' element={<Collection/>}/>
      {/* <Route path='' element={}/> */}
    </Routes>
   </Router>
   </>
  )
}

export default App