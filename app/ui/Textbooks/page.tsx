import React from "react";

const TextBook = () => {
  const textbooks = [
    {
      id: 1,
      title: "Harriet Tubman: Live in Concert",
      author: "Bob the Drag Queen",
      price: 29.03,
      image:
        "https://images-us.bookshop.org/ingram/9781668061978.jpg?width=384&v=v2",
      description:
        "The first from TV host and RuPaul's Drag Race winner Bob The Drag Queen vibes with energy and humor but never wavers in its focus on the resilience and power of Black Americans, 'made out of something stronger than steel and diamonds combined,' and the universal passion for liberation.",
    },
    {
      id: 2,
      title: "The Instability of Truth",
      author: "Rebecca Lemov",
      price: 30.68,
      image:
        "https://images-us.bookshop.org/ingram/9781324075264.jpg?width=384&v=v2",
      description:
        "Provocative and illuminating... Lemov's deeply researched exploration reveals how the persuasive power wielded by charismatic figures can answer, in a warped way, a person's yearning for self-reinvention and meaning... Publishers Weekly, starred review. A chilling and spellbinding history of mind control, from prison camps to online algorithms. -- Jill Lepore, author of If Then: How the Simulmatics Corporation Invented the Future.",
    },
  ];

  const categories = [
    "All Genres",
    "Arts & Photography",
    "Biography & Memory",
    "Children's Book",
    "Cookbook & Food",
    "History",
    "Literature & Fiction",
    "Romance",
    "SciFi & Fantasy",
    "Teen & Young Adult",
  ];

  const bookFormats = [
    "All Format",
    "Hard Cover",
    "Paper Back",
    "E-Book",
    "Large Print",
  ];

  return (
    <div className="flex gap-6 max-w-7xl mx-auto py-8">
      {/* Filter Section */}
      <div className="w-1/4 p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Categories</h3>

        {/* Categories */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-semibold text-gray-800">Categories</h4>
            <svg
              className="w-5 h-5 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <div className="space-y-2">
            {categories.map((category, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="radio"
                  id={`category-${index}`}
                  name="category"
                  className="text-purple-600 focus:ring-purple-500"
                />
                <label htmlFor={`category-${index}`} className="text-gray-600">
                  {category}
                </label>
              </div>
            ))}
            <button className="text-purple-600 hover:text-purple-800 mt-2">
              + Load More
            </button>
          </div>
        </div>

        {/* Book Format */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-semibold text-gray-800">Book Format</h4>
            <svg
              className="w-5 h-5 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <div className="space-y-2">
            {bookFormats.map((format, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="radio"
                  id={`format-${index}`}
                  name="format"
                  className="text-purple-600 focus:ring-purple-500"
                />
                <label htmlFor={`format-${index}`} className="text-gray-600">
                  {format}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Publisher */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-semibold text-gray-800">Publisher</h4>
            <svg
              className="w-5 h-5 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>

        {/* Years */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-semibold text-gray-800">Years</h4>
            <svg
              className="w-5 h-5 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>

        {/* Price Range */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">
            Price Range
          </h4>
          <div className="relative">
            <input
              type="range"
              min="0"
              max="500"
              value="145"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between mt-2">
              <span className="text-gray-600">$145</span>
              <span className="text-gray-600">$430</span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <button className="bg-purple-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-purple-700 transition">
            Refine Search
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            Reset Filter
          </button>
        </div>
      </div>

      {/* Textbooks List */}
      <div className="w-3/4 py-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          TEXTBOOKS
        </h2>

        <div className="space-y-8">
          {textbooks.map((book) => (
            <div
              key={book.id}
              className="flex flex-col md:flex-row items-start gap-6 border-b border-gray-200 pb-8"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-32 h-48 object-cover rounded-md"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{book.author}</p>
                <p className="text-lg font-bold text-gray-800 mb-3">
                  ${book.price.toFixed(2)}
                </p>
                <p className="text-gray-600 text-sm mb-4">{book.description}</p>
                <button className="bg-purple-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-purple-700 transition">
                  See Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextBook;
