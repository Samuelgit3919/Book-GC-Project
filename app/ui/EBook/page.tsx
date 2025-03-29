import React from "react";

const BookPage = () => {
  const ebooksForSales = [
    {
      id: 1,
      title: "የአብጼ አምባው",
      img: "https://www.ethiobookreview.com/assets/product_imgs/Amharic/Fiction/yeabi-sigat-yeabtsega-ambaw.webp",
      author: "Yeabtsega Ambaw",
      category: "Amharic Fiction",
      price: 56.0,
      discountPrice: 5.0,
      stock: 45,
    },
    {
      id: 2,
      title: "Mirga Ajjeesuu",
      img: "https://www.ethiobookreview.com/assets/product_imgs/Afan%20Oromo/Biography/mirga-ajjeesuu-janko-getachew.webp",
      author: "Janko Getachew",
      category: "Afan Oromo Biography",
      price: 100.0,
      discountPrice: 10.0,
      stock: 2,
    },
    {
      id: 3,
      title: "Abuurraa Addunyaa",
      img: "https://www.ethiobookreview.com/assets/product_imgs/Afan%20Oromo/Education/abuurraa-addunyaa-hirko-yoseph.webp",
      author: "Hirko Yoseph",
      category: "Afan Oromo Education",
      price: 100.0,
      discountPrice: 25.0,
      stock: 45,
    },
    {
      id: 4,
      title: "እንተ እስት",
      img: "https://www.ethiobookreview.com/assets/product_imgs/Amharic/Fiction/sabawuyan-yeabtsega-ambaw.webp",
      author: "Yeabtsega Ambaw",
      category: "Amharic Fiction",
      price: 56.0,
      discountPrice: 5.0,
      stock: 45,
    },
  ];

  const recentlyAdded = [
    {
      id: 5,
      title: "ንፍቅ እና ማንነት",
      img: "https://www.ethiobookreview.com/assets/product_imgs/Amharic/Fiction/mentiyochu-destan-felega-no-5-yeabtsega-ambaw.webp",
      author: "Alemayehu Gebrehiwot",
    },
    {
      id: 6,
      title: "ፍካሬዎች እና ፍቅር",
      img: "https://www.ethiobookreview.com/assets/product_imgs/Amharic/Poetry/and-ken-kirubel-kuma.webp",
      author: "Fikremarkos Desta",
    },
    {
      id: 7,
      title: "አባ ገብረ ኪዳን ግርማ",
      img: "https://www.ethiobookreview.com/assets/product_imgs/Amharic/Business/trading-basics-in-amharic-nathanim-andualem.webp",
      author: "Aba Gebre Kidan Girma",
    },
    {
      id: 8,
      title: "እንተ እስት",
      img: "https://www.ethiobookreview.com/assets/product_imgs/Amharic/Fiction/fituranu-the-creatures-sisay-mekuanent.webp",
      author: "Dr Alemayehu Wase",
    },
  ];

  const topRatedBooks = [
    {
      id: 9,
      img: "https://www.ethiobookreview.com/assets/product_imgs/Amharic/Fiction/mentiyochu-destan-felega-no-5-yeabtsega-ambaw.webp",
      rating: 5,
    },
    {
      id: 10,
      img: "https://www.ethiobookreview.com/assets/product_imgs/Amharic/Poetry/and-ken-kirubel-kuma.webp",
      rating: 5,
    },
    {
      id: 11,
      img: "https://www.ethiobookreview.com/assets/product_imgs/Amharic/Business/trading-basics-in-amharic-nathanim-andualem.webp",
      rating: 5,
    },
    {
      id: 12,
      img: "https://www.ethiobookreview.com/assets/product_imgs/Amharic/Fiction/fituranu-the-creatures-sisay-mekuanent.webp",
      rating: 5,
    },
    {
      id: 13,
      img: "https://www.ethiobookreview.com/assets/product_imgs/Amharic/Fiction/yeabi-sigat-yeabtsega-ambaw.webp",
      rating: 5,
    },
  ];

  // Star rating component
  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex justify-center">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${
              index < rating ? "text-red-500" : "text-gray-300"
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
      <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight bg-purple-600 px-8 py-3 mb-6">
        EBOOKS FOR SALES
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {ebooksForSales.map((book) => (
          <div
            key={book.id}
            className="flex flex-col items-center text-center hover:border-2 hover:border-gray-600"
          >
            <img
              src={book.img}
              alt={book.title}
              className="w-full  object-cover mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              {book.title}
            </h3>
            <p className="text-sm text-gray-600">{book.author}</p>
            <p className="text-sm text-gray-500">{book.category}</p>
            <p className="text-lg font-bold text-gray-800">
              {book.price.toFixed(2)} Birr{" "}
              <span className="text-red-500 text-sm">
                ({book.discountPrice.toFixed(2)}%)
              </span>
            </p>
            <button className="mt-4 bg-purple-600 text-white font-semibold py-2 px-6 rounded hover:bg-green-700 transition">
              READ NOW
            </button>
          </div>
        ))}
      </div>

      {/* Recently Added Section */}
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 text-center mb-6">
        RECENTLY ADDED
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {recentlyAdded.map((book) => (
          <div
            key={book.id}
            className="flex flex-col items-center text-center hover:border-2 hover:border-gray-600"
          >
            <img
              src={book.img}
              alt={book.title}
              className="w-full  object-cover mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              {book.title}
            </h3>
            <p className="text-sm text-gray-600">{book.author}</p>
          </div>
        ))}
      </div>

      {/* Top Rated Books Section */}
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 text-center mb-6">
        TOP RATED BOOKS
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {topRatedBooks.map((book) => (
          <div
            key={book.id}
            className="flex flex-col items-center text-center hover:border-2 hover:border-gray-600"
          >
            <img
              src={book.img}
              alt="Top Rated Book"
              className="w-full  object-cover mb-4"
            />
            <StarRating rating={book.rating} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookPage;
