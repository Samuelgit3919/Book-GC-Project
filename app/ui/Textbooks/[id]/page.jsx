"use client";
import Link from "next/link";
import Head from "next/head";
import { FaArrowLeft, FaHeart, FaShareAlt } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { IoStorefrontOutline } from "react-icons/io5";
import { useState } from "react";

export default function BookPage() {
    // Mock data for the book and similar books
    const book = {
        title: "Beyond the Horizon",
        author: "Michael Chen",
        rating: 4.2,
        reviews: 95,
        genres: ["Science Fiction", "Adventure"],
        price: 15.99,
        inStock: true,
        publisher: "Stellar Books",
        isbn: "978-0987654321",
        publicationDate: "March 3, 2023",
        pages: 208,
        language: "English",
        description: "A journey through space and time that challenges our understanding of reality.",
        bookstores: [
            { name: "City Books", distance: "1.2 miles away", price: 15.99, inStock: true },
            { name: "Book Haven", distance: "5.8 miles away", price: 16.99, inStock: true },
        ],
    };

    const similarBooks = [
        { title: "Similar Book Title 1", price: 15.99 },
        { title: "Similar Book Title 2", price: 16.99 },
        { title: "Similar Book Title 3", price: 17.99 },
        { title: "Similar Book Title 4", price: 18.99 },
        { title: "Similar Book Title 5", price: 19.99 },
    ];

    const [activeTab, setActiveTab] = useState("Description");

    return (
        <div className="min-h-screen bg-gray-100">
            <Head>
                <title>{book.title} - Bookstore</title>
                <meta name="description" content={`Buy ${book.title} by ${book.author}`} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <mai n className="container mx-auto p-4 px-12">
                {/* Back to Books Link */}
                <Link href="/" className="flex items-center text-gray-600 hover:text-gray-800 mb-4">
                    <FaArrowLeft className="mr-2" />
                    Back to Books
                </Link>

                {/* Main Book Section */}
                <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-lg shadow-md">
                    {/* Book Cover Placeholder */}
                    <div className="w-full md:w-1/3 flex justify-center">
                        <div className="w-64 h-96 bg-gray-200 flex items-center justify-center rounded-lg">
                            <span className="text-gray-500">Book Cover</span>
                        </div>
                    </div>

                    {/* Book Details */}
                    <div className="w-full md:w-2/3">
                        <div className="flex justify-between items-start">
                            <div>
                                <h1 className="text-3xl font-bold">{book.title}</h1>
                                <p className="text-gray-600">by {book.author}</p>
                            </div>
                            <div className="flex gap-2">
                                <button className="text-gray-600 hover:text-red-500">
                                    <FaHeart />
                                </button>
                                <button className="text-gray-600 hover:text-blue-500">
                                    <FaShareAlt />
                                </button>
                            </div>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center mt-2">
                            <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className={`w-5 h-5 ${i < Math.floor(book.rating) ? "fill-current" : "fill-none"}`}
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                ))}
                            </div>
                            <span className="ml-2 text-gray-600">
                                {book.rating} ({book.reviews} reviews)
                            </span>
                        </div>

                        {/* Genres */}
                        <div className="mt-2 mb-4">
                            {book.genres.map((genre, index) => (
                                <span
                                    key={index}
                                    className="inline-block bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm mr-2"
                                >
                                    {genre}
                                </span>
                            ))}
                        </div>
                        <hr />

                        {/* Price and Add to Cart */}
                        <div className="mt-4 flex-col items-center justify-between">
                            <div className="flex item-center justify-between">
                                <span className="text-2xl font-bold">${book.price.toFixed(2)}</span>
                                <p className="text-gray-600">
                                    {book.inStock ? "In stock - Ships within 24 hours" : "Out of stock"}
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <select className="border rounded p-1">
                                    <option>Cover - ${book.price.toFixed(2)}</option>
                                </select>
                                <button className="bg-black flex items-center text-white px-4 py-2 rounded hover:bg-gray-800">
                                    <IoCartOutline className="mr-2 w-5 h-5" /> Add to Cart
                                </button>
                            </div>
                        </div>

                        {/* Check Availability Link */}
                        <a href="#" className="text-blue-600 flex items-center hover:underline mt-2 block">
                            <IoStorefrontOutline className="mr-2 w-5 h-5" /> Check availability at local bookstores
                        </a>

                        {/* Tabs Section */}
                        <div className="mt-6">
                            {/* Tab Buttons */}
                            <div className="flex bg-gray-200 rounded-lg">
                                <button
                                    onClick={() => setActiveTab("Description")}
                                    className={`flex-1 py-2 text-center rounded-l-lg border-r border-gray-300 ${activeTab === "Description" ? "bg-white" : "bg-gray-100"
                                        }`}
                                >
                                    Description
                                </button>
                                <button
                                    onClick={() => setActiveTab("Details")}
                                    className={`flex-1 py-2 text-center border-r border-gray-300 ${activeTab === "Details" ? "bg-white" : "bg-gray-100"
                                        }`}
                                >
                                    Details
                                </button>
                                <button
                                    onClick={() => setActiveTab("Bookstores")}
                                    className={`flex-1 py-2 text-center rounded-r-lg ${activeTab === "Bookstores" ? "bg-white" : "bg-gray-100"
                                        }`}
                                >
                                    Bookstores
                                </button>
                            </div>

                            {/* Tab Content */}
                            <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
                                {activeTab === "Description" && (
                                    <div>
                                        <p>{book.description}</p>
                                    </div>
                                )}

                                {activeTab === "Details" && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <h3 className="font-semibold">Publisher</h3>
                                            <p>{book.publisher}</p>
                                            <h3 className="font-semibold mt-2">ISBN</h3>
                                            <p>{book.isbn}</p>
                                            <h3 className="font-semibold mt-2">Language</h3>
                                            <p>{book.language}</p>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Publication Date</h3>
                                            <p>{book.publicationDate}</p>
                                            <h3 className="font-semibold mt-2">Pages</h3>
                                            <p>{book.pages}</p>
                                        </div>
                                    </div>
                                )}

                                {activeTab === "Bookstores" && (
                                    <div>
                                        {book.bookstores.map((store, index) => (
                                            <div
                                                key={index}
                                                className="flex justify-between items-center p-2 border-b last:border-b-0"
                                            >
                                                <div>
                                                    <p className="font-semibold">{store.name}</p>
                                                    <p className="text-gray-600">{store.distance}</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="font-semibold">${store.price.toFixed(2)}</p>
                                                    <p className="text-green-600">
                                                        {store.inStock ? "In Stock" : "Out of Stock"}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* You May Also Like Section */}
                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">You May Also Like</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                        {similarBooks.map((similarBook, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                                <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-lg mb-2">
                                    <span className="text-gray-500">Book Cover</span>
                                </div>
                                <h3 className="text-sm font-semibold">{similarBook.title}</h3>
                                <p className="text-gray-600">${similarBook.price.toFixed(2)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}