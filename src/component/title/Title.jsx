import React from 'react';

const Title = ({ text1 }) => {
  return (
    <div className="flex items-center gap-4 px-4 sm:px-10 mb-10">
      <div className="h-10 w-2 sm:w-3 bg-orange-500 rounded-full animate-pulse shadow-md"></div>
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-wide text-gray-800 ">
        {text1}
      </h2>
    </div>
  );
};

export default Title;
