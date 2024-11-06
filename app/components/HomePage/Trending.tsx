import React from 'react';


const Trending = () => {


  return (
    <div className="flex flex-col items-center justify-center text-center w-full mt-10 mx-auto space-y-6 px-4">
      <div>
        <h1 className="font-bold text-2xl md:text-3xl text-gray-900">Trending This Week</h1>
        <p className="text-sm md:text-base text-gray-700 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      

      <div className="mt-4 flex flex-col items-center">
        <img
          src="https://via.placeholder.com/100"
          alt="Reviewer"
          className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
        />
        <p className="mt-2 font-semibold">Ijeoma Oluo</p>
        <div className="flex mt-1 text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <span key={i}>★</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
