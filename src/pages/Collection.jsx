import React, { useContext } from 'react';
import Layout_comp from '../component/Layout/Layout_comp';
import ProductItem from '../component/productItem/ProductItem';
import iphone from '../asset/iphonep.jpeg';
import { ShopContext } from '../context/Shopcontext';
import Cateogry from '../component/cateogry/cateogry';

const Collection = () => {
  const { products } = useContext(ShopContext);

  return (
    <Layout_comp>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Section 1 Header */}
        <div className="text-center mt-20 mb-12">
  <h2 className="text-5xl font-extrabold text-orange-500 tracking-wide animate-fade-in">
    🔥 Top Picks
  </h2>
  <p className="mt-4 text-gray-600 text-base md:text-lg max-w-xl mx-auto">
    Discover our bestselling and most loved products, handpicked just for you.
  </p>
</div>


        {/* Section 1 Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-8 md:px-24 mb-20 animate-fade-in">
          {products.slice(0, 10).map((product, index) => (
            <ProductItem
              id={product.productId}
              key={index}
              image={iphone}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>

        {/* Category Section */}
        <div className="mb-20">
          <Cateogry />
        </div>

        {/* Section 2 Header */}
        <div className="text-center mb-14">
  <h2 className="text-5xl font-extrabold text-orange-500 tracking-tight animate-fade-in">
    🎯 Curated For You
  </h2>
  <p className="mt-3 text-gray-600 text-base md:text-lg max-w-lg mx-auto">
    Explore our specially selected picks made to match your taste and needs.
  </p>
</div>


        {/* Section 2 Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-8 md:px-24 mb-36 animate-fade-in">
          {products.slice(10, 20).map((product, index) => (
            <ProductItem
              id={product.productId}
              key={index}
              image={iphone}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </Layout_comp>
  );
};

export default Collection;
