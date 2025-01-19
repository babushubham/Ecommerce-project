import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='bg-white h-24 flex justify-between align-middle border-b-2 py-8 p-14 sticky top-0 box-border'>
        <div className='text-2xl font-semibold font-sans '>My Store</div>
        <div className='flex align-middle justify-between gap-8 text-lg text-gray-700 font-sans py-1'>
          <div><Link to='/'>Home</Link></div>
          <div>Contact</div>
          <div>About</div>
          <div><Link to='/signup'>Sign Up</Link></div>
        </div>
        <div>
          <input type="text" placeholder='What are you looking for??' className='focus:outline-none w-56 rounded-lg p-2 bg-gray-100' />

        </div>
      </div>
    </>
  )
}

export default Navbar