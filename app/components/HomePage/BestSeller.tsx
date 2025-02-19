import React from "react";
import { MdStarRate } from "react-icons/md";

const BestSeller = () => {
  const slides = [
    {
      image:
        "https://i.pinimg.com/736x/f5/4f/08/f54f0874809bfb306cefe230135cb797.jpg",
      title: "Be yourself & Never Surrender",
      subtitle: "Inspirational Journey",
      type: "Adventure",
      rating: <MdStarRate />,
      des: "Adventure of Mount Everest",
      author: "Hanry Marlopo",
      Price: "$21.99",
    },
    {
      image:
        "https://i.pinimg.com/736x/f5/4f/08/f54f0874809bfb306cefe230135cb797.jpg",
      title: "Theory: Is Alien Real",
      subtitle: "Explore the Unknown",
      type: "Fiction",
      rating: <MdStarRate />,
      des: "Life of wild",
      author: "Rick Riordan",
      Price: "$19.99",
    },
    {
      image:
        "https://i.pinimg.com/736x/f5/4f/08/f54f0874809bfb306cefe230135cb797.jpg",
      title: "The Unseen",
      subtitle: "Discover Hidden Mysteries",
      type: "Thriller",
      rating: <MdStarRate />,
      des: "Story of Everest",
      author: "Stephen King",
      Price: "$24.99",
    },
  ];

  return (
    <div className="w-full mx-auto py-10">
      <h1 className="text-2xl sm:text-3xl my-4 mx-4 font-bold">Best Sellers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {slides.map((slide, index) => (
          <div key={index} className="p-2 flex flex-col">
            <div className="flex flex-col md:flex-row h-auto rounded-lg shadow-lg gap-4 bg-white">
              {/* Image Section */}
              <img
                src={slide.image}
                alt={slide.title}
                className="h-60 md:h-80 w-full md:w-2/5 object-cover rounded-t-lg"
              />

              {/* Content Section */}
              <div className="flex flex-col gap-4 relative p-4">
                {/* Tag and Rating */}
                <div className="flex md:flex-row flex-wrap items-center gap-2">
                  <button className="p-2 bg-purple-300 w-24 rounded-md font-semibold text-sm md:text-base">
                    {slide.type}
                  </button>
                  <button className="p-2 rounded-md h-[40px] w-24 flex items-center justify-center text-lg md:text-2xl text-orange-600 bg-orange-300 border-0">
                    {slide.rating} <span>3.14</span>
                  </button>
                </div>

                {/* Description */}
                <h3 className="text-lg sm:text-xl font-semibold">
                  {slide.des}
                </h3>

                {/* Author and Price */}
                <div className="flex sm:flex-col items-start sm:items-start justify-between gap-2">
                  <p className="font-serif text-sm sm:text-base">
                    {slide.author}
                  </p>
                  <h2 className="font-mono text-xl sm:text-2xl text-purple-500">
                    {slide.Price}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
