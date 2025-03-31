"use client";
import Link from "next/link";
import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { audiobooks } from "./audiobooks";

// Categories data (unchanged)
const categories = [
  {
    title: "All categories",
    image: "",
  },
  {
    title: "Self Development",
    image:
      "https://m.media-amazon.com/images/G/01/Audible/en_US/images/Discover/SmNav_Gen_SeDe_3x.jpg",
  },
  {
    title: "Romance",
    image:
      "https://m.media-amazon.com/images/G/01/Audible/en_US/images/Discover/SmNav_Gen_Roma_3x.jpg",
  },
  {
    title: "Thrillers",
    image:
      "https://m.media-amazon.com/images/G/01/Audible/en_US/images/Discover/SmNav_Gen_Roma_3x.jpg",
  },
  {
    title: "Literature & Fiction",
    image:
      "https://m.media-amazon.com/images/G/01/Audible/en_US/images/Discover/SmNav_Gen_LiFi_3x-1.jpg",
  },
  {
    title: "Health & Wellness",
    image:
      "https://m.media-amazon.com/images/G/01/Audible/en_US/images/Discover/SmNav_Gen_HeWe_3x.jpg",
  },
  {
    title: "Biographies & Memoirs",
    image:
      "https://m.media-amazon.com/images/G/01/Audible/en_US/images/Discover/SmNav_Gen_BiMe_3x.jpg",
  },
  {
    title: "Kids",
    image:
      "https://m.media-amazon.com/images/G/01/Audible/en_US/images/Discover/SmNav_Gen_ChAu_3x.jpg",
  },
  {
    title: "Business",
    image:
      "https://m.media-amazon.com/images/G/01/Audible/en_US/images/Discover/SmNav_Gen_BuCa_3x.jpg",
  },
  {
    title: "Science Fiction",
    image:
      "https://m.media-amazon.com/images/G/01/Audible/en_US/images/Discover/SmNav_Gen_ScFi_3x.jpg",
  },
  {
    title: "Religion & Spirituality",
    image:
      "https://m.media-amazon.com/images/G/01/Audible/en_US/images/Discover/SmNav_Gen_ReHi_3x.jpg",
  },
  {
    title: "History",
    image:
      "https://m.media-amazon.com/images/G/01/Audible/en_US/images/Discover/SmNav_Gen_Hist_3x.jpg",
  },
];

const AudioBooks = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* AudioBooks Section */}
      <div className="bg-gray-100 text-gray-800 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            We've got what everyone's listening to
          </h2>
          <p className="text-gray-400 mb-6">
            Bestsellers, new releases. That story you've been waiting for.
          </p>

          <div className="relative">
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity z-10"
            >
              <FaChevronLeft className="text-xl" />
            </button>

            <div
              ref={scrollRef}
              className="flex overflow-x-auto overflow-y-hidden space-x-4 snap-x snap-mandatory hide-scrollbar"
            >
              {audiobooks.map((book) => (
                <Link
                  key={book.id}
                  href={`/ui/Audiobooks/${book.id}`}
                  className="flex-shrink-0 w-40 sm:w-48 md:w-52 snap-start transition-transform duration-300"
                >
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-40 sm:h-48 md:h-52 object-cover rounded-md mb-2 shadow-md"
                  />
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 line-clamp-2">
                    {book.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    By: {book.author}
                  </p>
                </Link>
              ))}
            </div>

            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity z-10"
            >
              <FaChevronRight className="text-xl" />
            </button>
          </div>
        </div>
      </div>

      {/* ExploreCategories Section */}
      <div className="bg-gray-100 text-gray-800 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Explore new worlds
          </h2>
          <p className="text-gray-400 mb-6">
            From epic stories to self-improvement, there are audiobooks for
            everyone.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-[#031C30] rounded-lg p-4 flex items-center justify-between transition-colors duration-300"
              >
                <h3 className="text-sm sm:text-base font-semibold text-white">
                  {category.title}
                </h3>
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-32 mb-3 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default AudioBooks;
