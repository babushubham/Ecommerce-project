import React, { useContext } from 'react'
import Layout_comp from '../component/Layout/Layout_comp'
import ProductItem from '../component/productItem/ProductItem'
import iphone from '../asset/iphonep.jpeg'
import { ShopContext } from '../context/Shopcontext'
import Cateogry from '../component/cateogry/cateogry'


const Collection = () => {
    const { products } = useContext(ShopContext)
    return (
        <Layout_comp>
            <div className='min-h-screen flex flex-col '>
                <div className='flex flex-wrap gap-10 items-center justify-start gap-y-8 mx-24 my-16'>
                    {
                        products.slice(0, 10).map((product, index) => (
                            <ProductItem id={product.productId} key={index} image={iphone} name={product.name} price={product.price} />
                        ))
                    }
                </div>
                <Cateogry />
                <div className='flex flex-wrap gap-10 items-center justify-start gap-y-8 mx-24 my-16 mb-36'>
                    {
                        products.slice(10, 20).map((product, index) => (
                            <ProductItem id={product.productId} key={index} image={iphone} name={product.name} price={product.price} />
                        ))
                    }
                </div>

            </div>
        </Layout_comp>
    )
}

export default Collection