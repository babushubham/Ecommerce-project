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
  console.log(authStatus)
  console.log(userInfo)

  return (
    <>
      <div className='bg-white h-24 flex justify-evenly align-middle border-b-2 py-8 sticky top-0 box-border max-w-full '>
        <Link to='/'><div className='text-2xl font-semibold font-sans '>My Store</div></Link>
        <div className='flex align-middle justify-between gap-8 text-lg text-gray-700 font-sans py-1'>
          <div><Link to='/' className='active:border-b-2 border-orange-500'>Home</Link></div>
          <div><Link to='/collection'>Collection</Link></div>
          <div><Link to='/contact'>Contact Us</Link></div>
          <div><Link to='/about'>About</Link></div>
        </div>

        <div className='flex bg-gray-100 rounded-lg p-2'>
          <input type="text" placeholder='What are you looking for??' className='focus:outline-none w-56 h-5  bg-gray-100 ' />
          <img src={search} alt="" className='w-5'/>
        </div>
      </div>
    </>
  )
}

export default Navbar