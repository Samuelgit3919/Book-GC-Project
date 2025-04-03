"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MdShoppingCartCheckout } from "react-icons/md"
import { FaStar } from "react-icons/fa"
import { textbooks } from "../textBook"

export default function BookDetailsPage({ params }) {
    // Find the specific book using the ID from the URL params
    const book = textbooks.find((book) => book.id.toString() === params.id) || textbooks[0]

    const [quantity, setQuantity] = useState(1)
    const [isImageEnlarged, setIsImageEnlarged] = useState(false)

    const incrementQuantity = () => {
        if (quantity < 10) setQuantity(quantity + 1)
    }

    const decrementQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1)
    }

    return (
        <div className="min-h-screen bg-white md:px-8">
            {/* Breadcrumb */}
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center text-sm">
                    <Link href="/" className="text-gray-600 hover:text-red-600">
                        TextBook
                    </Link>
                    <span className="mx-2 text-gray-400">›</span>
                    <Link href="#" className="text-gray-600 hover:text-red-600">
                        {book.author}
                    </Link>
                    <span className="mx-2 text-gray-400">›</span>
                    <span className="text-gray-900">{book.title}</span>
                </div>
            </div>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-4">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Book Image */}
                    <div className="md:w-1/4">
                        <div className="border border-gray-300 p-2 mb-2">
                            <Image
                                src={book.image}
                                alt={book.title}
                                width={300}
                                height={400}
                                className="w-full"
                                unoptimized
                            />
                        </div>
                        <div className="text-center text-sm text-gray-600 mb-2">Seller Image</div>
                        <button
                            className="w-full text-sm text-blue-600 hover:text-blue-800"
                            onClick={() => setIsImageEnlarged(!isImageEnlarged)}
                        >
                            View Larger Image
                        </button>
                    </div>

                    {/* Book Details */}
                    <div className="md:w-2/4">
                        <h1 className="text-2xl font-bold text-gray-900 mb-1">{book.title}</h1>
                        <h2 className="text-xl text-blue-600 font-semibold mb-2">{book.author}</h2>
                        <p className="text-gray-600 mb-4">
                            Published by {book.publisher || "A Fawcett Crest Book"} {book.year}
                        </p>

                        <div className="flex gap-2 mb-4">
                            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm border border-gray-300 rounded">
                                CONDITION: USED
                            </span>
                            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm border border-gray-300 rounded">
                                SOFT COVER
                            </span>
                        </div>

                        <button className="text-blue-600 hover:text-blue-800 mb-6">Save for Later</button>

                        <div className="mb-6">
                            <p className="mb-2">
                                From{" "}
                                <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                                    2nd Hand Books
                                </Link>
                                , Kenner, LA, U.S.A.
                            </p>
                            <div className="flex items-center mb-2">
                                <span className="text-gray-600 mr-2 text-sm">(3-star seller)</span>
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar
                                            key={i}
                                            className={`h-4 w-4 ${i < 3 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                                        />
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm">AbeBooks Seller since October 11, 2000</p>
                            <button className="text-blue-600 hover:text-blue-800 text-sm mt-2">View this seller's items</button>
                        </div>

                        <div className="mb-6 border-t border-b border-gray-200 py-4">
                            <button className="text-blue-600 hover:text-blue-800 mb-2">View all 53 copies of this book</button>
                            <div className="flex items-center">
                                <span className="text-gray-600">53 Used from</span>
                                <span className="text-red-600 font-bold ml-2">US$ 7.08</span>
                            </div>
                        </div>

                        <div className="mb-6">
                            <p className="text-gray-700 mb-2">Filter by:</p>
                            <div className="flex flex-wrap gap-3">
                                <Link href="#" className="text-blue-600 hover:text-blue-800">
                                    First Edition (9)
                                </Link>
                                <Link href="#" className="text-blue-600 hover:text-blue-800">
                                    Hardcover (1)
                                </Link>
                                <Link href="#" className="text-blue-600 hover:text-blue-800">
                                    Softcover (46)
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Buy Used Box - Move to right column */}
                    <div className="md:w-1/4">
                        <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Buy Used</h3>
                            <div className="text-2xl font-bold text-red-600 mb-1">US$ 14.95</div>
                            <button className="text-blue-600 hover:text-blue-800 text-xs mb-3">Convert Currency</button>

                            <div className="mb-4">
                                <p className="font-semibold text-gray-900 text-sm">
                                    Shipping: <span className="text-red-600">US$ 54.95</span>
                                </p>
                                <p className="text-xs text-gray-600">From U.S.A. to Mauritius</p>
                                <button className="text-blue-600 hover:text-blue-800 text-xs">Destination, rates & speeds</button>
                            </div>

                            <div className="mb-4">
                                <p className="font-semibold text-gray-900 mb-2 text-sm">Quantity: {quantity} available</p>
                            </div>

                            <button className="w-full flex items-center justify-center mb-3 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-md transition-colors text-sm">
                                <MdShoppingCartCheckout className="h-4 w-4 mr-1" />
                                Add to basket
                            </button>

                            <p className="text-center text-blue-600 hover:text-blue-800 font-medium cursor-pointer text-xs">
                                30 Day Return Policy
                            </p>
                        </div>
                    </div>
                </div>

                {/* About this Item */}
                <div className="mt-12 border-t border-gray-200 pt-6">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">About this Item</h2>
                    <div className="prose max-w-none text-gray-700">
                        <p>
                            A classic Peanuts collection featuring Charlie Brown and Snoopy. This softcover edition published in 1969
                            by Fawcett Crest Books contains a collection of comic strips by Charles M. Schulz featuring the beloved
                            Peanuts characters.
                        </p>
                        <p>
                            The book is in used condition with some wear to the cover edges and spine. Pages are intact and clean with
                            no markings or highlights.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    )
}

