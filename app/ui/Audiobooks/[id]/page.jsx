// "use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { audiobooks } from "../audiobooks";

export default async function AudiobookDetail({ params }) {
    const { id } = await params;
    const audiobookId = parseInt(id, 10);
    const audiobook = audiobooks.find((book) => book.id === audiobookId);

    if (!audiobook) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
                <div className="bg-white rounded-xl shadow-md p-8 max-w-md w-full text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 mb-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-red-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Audiobook Not Found</h2>
                    <p className="text-gray-600 mb-6">
                        The audiobook you're looking for doesn't exist in our collection.
                    </p>
                    <Link
                        href="/ui/Audiobooks"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Back to Audiobooks
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <Link
                    href="/ui/Audiobooks"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                    Back to Audiobooks
                </Link>

                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="md:flex">
                        <div className="md:w-1/3 p-6 flex items-center justify-center bg-gray-100">
                            <div className="relative w-64 h-64 rounded-lg overflow-hidden shadow-inner">
                                <Image
                                    src={audiobook.image}
                                    layout="fill"
                                    objectFit="cover"
                                    alt={audiobook.title}
                                    unoptimized
                                    className="hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </div>
                        <div className="md:w-2/3 p-8">
                            <div className="flex justify-between items-start">
                                <div>
                                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide mb-2">
                                        {audiobook.category}
                                    </span>
                                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                        {audiobook.title}
                                    </h1>
                                    <p className="text-lg text-gray-600 mb-4">By {audiobook.author}</p>
                                </div>
                                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                        />
                                    </svg>
                                </button>
                            </div>

                            <div className="border-t border-gray-200 my-6"></div>

                            <p className="text-gray-700 mb-6 leading-relaxed">
                                {audiobook.description ||
                                    `This is a premium audiobook of "${audiobook.title}" by ${audiobook.author
                                    }. Enjoy high-quality narration that brings the story to life.`}
                            </p>

                            <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-medium text-gray-900">Now Playing</h3>
                                        <p className="text-sm text-gray-600">Chapter 1: Introduction</p>
                                    </div>
                                    <button className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <div className="mt-3">
                                    <div className="relative pt-1">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <span className="text-xs font-semibold inline-block text-blue-600">
                                                    15:30 / 45:00
                                                </span>
                                            </div>
                                        </div>
                                        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                                            <div
                                                style={{ width: "35%" }}
                                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex space-x-4">
                                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors">
                                    Play Now
                                </button>
                                <button className="flex-1 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 px-4 rounded-lg font-medium transition-colors">
                                    Add to Library
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}