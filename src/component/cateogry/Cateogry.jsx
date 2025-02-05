import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../context/Shopcontext'
import { Link } from 'react-router-dom'

const Cateogry = () => {
    const {products} = useContext(ShopContext)
    const [cateogries,setCateogries] = useState([])

    // function filterCateogry (product) {
        
        
    // }
//     products.map((product)=>{
//         if(!(cateogries.includes(product.subCategory))){
//             setCateogries([...cateogries, product.subCategory])
//         }
//         else{
//             return;
//         }
// })

useEffect(()=>{
    const uniqueCateogries = products.reduce((acc,product)=>{
        if(!acc.includes(product.subCategory)){
            if (product.subCategory !== null){
            acc.push(product.subCategory);
            }
            else{
                return;
            }
        }
    return acc;
    
    },[])

    setCateogries(uniqueCateogries)
    
        
    },[products])
  return (
    <div className='flex flex-wrap items-center justify-evenly mx-32 my-16 gap-10'>
        {cateogries.filter((product) => product !== undefined).map((item,index)=>{
             return (<Link to={`/category/:${item}` } key={index}><div key={index} className='px-8 py-4 text-4xl shadow-md  shadow-gray-200 border-gray-50 border-[1px]  rounded-xl  hover:shadow-lg hover:shadow-gray-400 hover:scale-105'>
                {item}
            </div></Link>)
})}
    </div>
  )
}

export default Cateogry