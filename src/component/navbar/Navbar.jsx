import React from 'react'
import { Link } from 'react-router-dom'
import { logoutData } from '../../store/authSlice'
import authService from '../../services/Authentication'
import { useDispatch, useSelector } from 'react-redux'
import search from '../../asset/search.svg'



const Navbar = () => {
  const dispatch = useDispatch()
  const authStatus = useSelector((state) => state.auth.status)
  const userInfo = useSelector((state) => state.auth.userData)
  const handleLogout = async (e) => {
    await authService.getCurrentUser()
    await authService.logout();


    dispatch(logoutData());

  }
  // console.log(authStatus)
  // console.log(userInfo)

  return (
    <>
      <div className="bg-white h-20 flex justify-between items-center px-10 shadow-sm sticky top-0 z-50 border-b border-gray-200 transition-all duration-300">
      
      {/* Logo */}
      <Link to="/" className="text-3xl font-bold text-gray-800 hover:scale-105 transition-transform">
        MyStore
      </Link>

      {/* Navigation Links */}
      <div className="flex gap-8 text-gray-700 text-lg font-medium">
        <Link 
          to="/" 
          className="hover:text-orange-500 transition-colors duration-200 relative after:block after:w-0 after:h-0.5 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full after:absolute after:bottom-0 after:left-0"
        >
          Home
        </Link>
        <Link 
          to="/collection" 
          className="hover:text-orange-500 transition-colors duration-200 relative after:block after:w-0 after:h-0.5 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full after:absolute after:bottom-0 after:left-0"
        >
          Collection
        </Link>
        <Link 
          to="/contact" 
          className="hover:text-orange-500 transition-colors duration-200 relative after:block after:w-0 after:h-0.5 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full after:absolute after:bottom-0 after:left-0"
        >
          Contact
        </Link>
        <Link 
          to="/about" 
          className="hover:text-orange-500 transition-colors duration-200 relative after:block after:w-0 after:h-0.5 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full after:absolute after:bottom-0 after:left-0"
        >
          About
        </Link>
      </div>

      {/* Search Bar */}
      <div className="relative w-64">
        <input 
          type="text" 
          placeholder="What are you looking for?" 
          className="w-full px-4 py-2 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
        />
        <img 
          src={search} 
          alt="Search" 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 opacity-70"
        />
      </div>
    </div>
    </>
  )
}

export default Navbar