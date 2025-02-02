import React from 'react'

const Title = ({text1}) => {
  return (
    <>
    <div className='mx-28 mb-16 flex gap-4 items-center'><div className='h-12 w-6 rounded  bg-orange-500 '></div><h1 className='text-2xl'>{text1}</h1></div>
       
    </>
  )
}

export default Title