import React from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'

import HomePage from './pages/HomePage'
import SignupPage from './pages/signupPage'
import LoginPage from './pages/LoginPage'
import {Provider} from 'react-redux';

const App = () => {
  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
    </Routes>
   </Router>
   </>
  )
}

export default App