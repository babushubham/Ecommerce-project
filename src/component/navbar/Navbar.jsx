import React from 'react'


const Navbar = () => {
  return (
    <>
      <div className='w-screen h-20 flex justify-between align-middle border-b-2 py-4 px-14'>
        <div className='text-xl font-semibold font-sans '>My Store</div>
        <div className='flex align-middle justify-between gap-4 text-sm text-gray-700 font-sans py-1'>
          <div>Home</div>
          <div>Contact</div>
          <div>About</div>
          <div>Sign Up</div>
        </div>
        <div>
          <input type="text" placeholder='What are you looking for??' className='focus:outline-none' />

        </div>
      </div>
    </>
  )
}

export default Navbar