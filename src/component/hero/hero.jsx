import React from 'react'
import iphonebanner from '../../asset/iphone_banner.jpeg'
import salebanner from '../../asset/megasale.jpeg'

const heroComp = () => {
    return (
        <div className='flex justify-center  '>
            <div className='w-1/4  flex flex flex-col items-center h-[610px] pt-14 box-border gap-4  pl-8 border-r-2 border-gray-300'>
                <div className='w-1/2 text-xl font-serif '>Women Fashion</div>
                <div className='w-1/2 text-xl font-serif '>Mens Fashion</div>
                <div className='w-1/2 text-xl font-serif '>Electronics</div>
                <div className='w-1/2 text-xl font-serif '>Home & Living</div>
                <div className='w-1/2 text-xl font-serif '>Beauty</div>
                <div className='w-1/2 text-xl font-serif '>Health</div>
                <div className='w-1/2 text-xl font-serif '>Books</div>
                <div className='w-1/2 text-xl font-serif '>Stationary</div>
                <div className='w-1/2 text-xl font-serif '>Automobiles</div>
                <div className='w-1/2 text-xl font-serif '>Others</div>

            </div>
            <div className='w-3/4 flex flex-col items-center justify-center box-border p-14 pr-24'>
                <img src={salebanner} alt="" className='min-w-full' />
                 
            </div>
        </div>
    )
}

export default heroComp