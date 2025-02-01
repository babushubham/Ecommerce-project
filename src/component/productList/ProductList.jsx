import React from 'react'
import headphone from '../../asset/headphone.jpeg'

const ProductList = () => {
  return (
    <div className='flex justify-around items-center m-10 gap-5 overflow-x-scroll scrollbar-hide '>
        
        <div className='w-56 h-80'>
            <div className='rounded-sm w-56 h-56'>
            <img src={headphone} alt="" className='rounded-md w-56 h-56 object-cover' />
            </div>
            <div>
                <h2 className='text-2xl'>Headphone</h2>
                <p className='text-lg text-red-500'>$100</p>
                <p className=''> 4.5</p>

            </div>
        </div>
        <div className='w-56 h-80'>
            <div className='rounded-sm w-56 h-56'>
            <img src={headphone} alt="" className='rounded-md w-56 h-56 object-cover' />
            </div>
            <div>
                <h2 className='text-2xl'>Headphone</h2>
                <p className='text-lg text-red-500'>$100</p>
                <p className=''>Rating: 4.5</p>

            </div>
        </div>
        <div className='w-56 h-80'>
            <div className='rounded-sm w-56 h-56'>
            <img src={headphone} alt="" className='rounded-md w-56 h-56 object-cover' />
            </div>
            <div>
                <h2 className='text-2xl'>Headphone</h2>
                <p className='text-lg text-red-500'>$100</p>
                <p className=''>Rating: 4.5</p>

            </div>
        </div>
        <div className='w-56 h-80'>
            <div className='rounded-sm w-56 h-56'>
            <img src={headphone} alt="" className='rounded-md w-56 h-56 object-cover' />
            </div>
            <div>
                <h2 className='text-2xl'>Headphone</h2>
                <p className='text-lg text-red-500'>$100</p>
                <p className=''>Rating: 4.5</p>

            </div>
        </div>
        <div className='w-56 h-80'>
            <div className='rounded-sm w-56 h-56'>
            <img src={headphone} alt="" className='rounded-md w-56 h-56 object-cover' />
            </div>
            <div>
                <h2 className='text-2xl'>Headphone</h2>
                <p className='text-lg text-red-500'>$100</p>
                <p className=''>Rating: 4.5</p>

            </div>
        </div>
        <div className='w-56 h-80'>
            <div className='rounded-sm w-56 h-56'>
            <img src={headphone} alt="" className='rounded-md w-56 h-56 object-cover' />
            </div>
            <div>
                <h2 className='text-2xl'>Headphone</h2>
                <p className='text-lg text-red-500'>$100</p>
                <p className=''>Rating: 4.5</p>

            </div>
        </div>
        <div className='w-56 h-80'>
            <div className='rounded-sm w-56 h-56'>
            <img src={headphone} alt="" className='rounded-md w-56 h-56 object-cover' />
            </div>
            <div>
                <h2 className='text-2xl'>Headphone</h2>
                <p className='text-lg text-red-500'>$100</p>
                <p className=''>Rating: 4.5</p>

            </div>
        </div>
        <div className='w-56 h-80'>
            <div className='rounded-sm w-56 h-56'>
            <img src={headphone} alt="" className='rounded-md w-56 h-56 object-cover' />
            </div>
            <div>
                <h2 className='text-2xl'>Headphone</h2>
                <p className='text-lg text-red-500'>$100</p>
                <p className=''>Rating: 4.5</p>

            </div>
        </div>
    </div>
  )
}

export default ProductList