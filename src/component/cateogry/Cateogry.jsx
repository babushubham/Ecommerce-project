import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../context/Shopcontext'

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
    console.log(uniqueCateogries)
        
    },[products])
  return (
    <div className='flex flex-wrap items-center justify-evenly mx-32 my-16 gap-10'>
        {cateogries.filter((product) => product !== undefined).map((item,index)=>{
             return (<div key={index} className='shadow-xl shadow-gray-500 border-gray-100 border-[1px] px-8 py-4 rounded-xl  text-4xl '>
                {item}
            </div>)
})}
    </div>
  )
}

export default Cateogry