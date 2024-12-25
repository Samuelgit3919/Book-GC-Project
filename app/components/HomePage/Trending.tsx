import React from "react";
import TrendingCarousel from "../corousel/TrendingCarousel";

const StarRating = ({ count = 5, activeColor = "text-yellow-500" }) => (
  <div className="flex mt-1" aria-label={`Rating: ${count} out of 5`}>
    {[...Array(count)].map((_, i) => (
      <span key={i} className={`${activeColor}`}>
        ★
      </span>
    ))}
  </div>
);

const Trending = () => {
  return (
    <div className="flex min-h-screen   bg-gray-100 flex-col items-center w-full justify-center text-center  mt-10 mx-auto space-y-8 px-4 md:space-y-12">
      {/* Header */}
      <div className="space-y-3 p-2">
        <h1 className="font-bold text-2xl md:text-4xl text-gray-900">
          Trending This Week
        </h1>
        <p className="text-sm md:text-base text-gray-700">
          Discover the most popular trends everyone is talking about. Stay inspired
          and keep exploring!
        </p>
      </div>

      {/* Carousel */}
      <div className="w-full max-w-5xl">
        <TrendingCarousel />
      </div>

      {/* Reviewer Section */}
      <div className="mt-6 flex flex-col items-center animate-fade-in-up">
        <img
          src="https://i.pinimg.com/736x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg"
          alt="Reviewer Ijeoma Oluo giving feedback"
          className="w-20 h-20 rounded-full border-4 border-gray-200 shadow-lg transition-transform transform hover:scale-105"
        />
        <p className="mt-3 font-semibold text-lg text-gray-800">Ijeoma Oluo</p>
        <StarRating />
      </div>
    </div>

  );
};

export default Trending;
