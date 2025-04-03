"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { bookStores } from '../shopLista';

const ShopListDetail = ({ params }) => {
    // Check if params exists and has list property
    if (!params || !params.id) {
        return <div className="container mx-auto px-4 py-8">Shop not found</div>;
    }

    // Decode the list param in case it contains special characters or spaces
    const shopName = decodeURIComponent(params.id);
    const shop = bookStores.find((store) => store.name.toLowerCase() === shopName.toLowerCase());

    // Handle case where shop isn't found
    if (!shop) {
        return <div className="container mx-auto px-4 py-8">Shop not found</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            {/* Main Content Section */}
            <div className="grid md:grid-cols-2 gap-8 bg-white rounded-lg shadow-md p-6">
                {/* Info Section */}
                <div className="space-y-4">
                    <h1 className="text-3xl font-bold text-gray-800">{shop.name}</h1>
                    <p className="text-gray-600 leading-relaxed">
                        {shop.description || 'No description available'}
                    </p>

                    {/* Contact Info */}
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                            <span className="text-gray-500">📞</span>
                            <Link
                                href={`tel:${shop.phone}`}
                                className="text-blue-600 hover:underline"
                            >
                                {shop.phone}
                            </Link>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-gray-500">✉️</span>
                            <Link
                                href={`mailto:${shop.email}`}
                                className="text-blue-600 hover:underline"
                            >
                                {shop.email}
                            </Link>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-gray-500">🌐</span>
                            <Link
                                href={shop.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                {shop.website}
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Image Section */}
                <div className="relative h-64 md:h-auto">
                    {/* <Image
                        src={shop.imageUrl || '/placeholder-image.jpg'} // Add fallback image
                        alt={`${shop.name} store`}
                        fill
                        className="object-cover rounded-lg"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                        onError={(e) => {
                            e.target.src = '/placeholder-image.jpg'; // Fallback on error
                        }}
                    /> */}
                </div>
            </div>

            {/* Map and Rating Section */}
            <div className="mt-8 grid md:grid-cols-2 gap-8">
                {/* Google Map */}
                <div className="h-96 bg-gray-100 rounded-lg overflow-hidden">
                    <iframe
                        src={shop.mapEmbed}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`${shop.name} Location`}
                    />
                </div>

                {/* Rating and Reviews */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-4">Rating</h2>
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-yellow-400 text-2xl">
                            {'★'.repeat(Math.floor(shop.rating))}
                            {'☆'.repeat(5 - Math.floor(shop.rating))}
                        </span>
                        <span className="text-gray-600">{shop.rating}/5</span>
                    </div>
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                        Leave a Review
                    </button>
                </div>
            </div>
        </div>
    );
};


export default ShopListDetail;