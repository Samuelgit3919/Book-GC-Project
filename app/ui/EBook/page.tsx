import Link from "next/link";
import React from "react";
import { ebooksForSales, recentlyAdded, topRatedBooks } from "./eBook";

const BookPage = () => {
  // Star rating component
  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex justify-center">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${
              index < rating ? "text-amber-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="w-2/3 mx-auto py-6">
      {/* EBOOKS FOR SALES Section */}
      <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight bg-blue-600 px-8 py-3 mb-6 rounded-lg">
        EBOOKS FOR SALES
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {ebooksForSales.map((book) => (
          <Link
            href={`/ui/EBook/${book.id}`}
            key={book.id}
            className="flex flex-col items-center text-center hover:border-2 hover:border-blue-200 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={book.img}
              alt={book.title}
              className="w-full object-cover mb-4 rounded"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              {book.title}
            </h3>
            <p className="text-sm text-gray-600">{book.author}</p>
            <p className="text-sm text-blue-500">{book.category}</p>
            <p className="text-lg font-bold text-gray-800">
              {book.price.toFixed(2)} Birr{" "}
              <span className="text-green-600 text-sm">
                ({book.discountPrice.toFixed(2)}%)
              </span>
            </p>
            <button className="mt-4 bg-blue-600 text-white font-semibold py-2 px-6 rounded hover:bg-blue-700 transition">
              READ NOW
            </button>
          </Link>
        ))}
      </div>

      {/* Recently Added Section */}
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 text-center mb-6 bg-amber-100 px-4 py-2 rounded-lg">
        RECENTLY ADDED
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {recentlyAdded.map((book) => (
          <div
            key={book.id}
            className="flex flex-col items-center text-center hover:border-2 hover:border-amber-200 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={book.img}
              alt={book.title}
              className="w-full object-cover mb-4 rounded"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              {book.title}
            </h3>
            <p className="text-sm text-gray-600">{book.author}</p>
          </div>
        ))}
      </div>

      {/* Top Rated Books Section */}
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 text-center mb-6 bg-green-100 px-4 py-2 rounded-lg">
        TOP RATED BOOKS
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {topRatedBooks.map((book) => (
          <div
            key={book.id}
            className="flex flex-col items-center text-center hover:border-2 hover:border-green-200 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={book.img}
              alt="Top Rated Book"
              className="w-full object-cover mb-4 rounded"
            />
            <StarRating rating={book.rating} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookPage;
