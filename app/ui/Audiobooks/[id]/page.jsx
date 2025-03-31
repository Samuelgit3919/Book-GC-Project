"use client";
import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { audiobooks } from "../audiobooks"; // Import the shared data

const AudiobookDetail = () => {
    const params = useParams();
    const audiobookId = parseInt(params.id, 10); // Convert string ID to number
    const audiobook = audiobooks.find((book) => book.id === audiobookId); // Find the audiobook by ID

    // Handle case where audiobook is not found
    if (!audiobook) {
        return (
            <div className="max-w-7xl mx-auto px-4 py-10">
                <h2 className="text-2xl font-bold mb-4">Audiobook Not Found</h2>
                <p>The audiobook you're looking for doesn't exist.</p>
                <Link href="/ui/Audiobooks" className="text-blue-500 underline">
                    Go back to audiobooks
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <Link href="/ui/Audiobooks" className="text-blue-500 underline mb-4 inline-block">
                ← Back to Audiobooks
            </Link>
            <div className="flex flex-col md:flex-row gap-2">
                <img    
                    src={audiobook.image}
                    alt={audiobook.title}
                    className="w-full md:w-1/3 h-64 object-contain "
                />
                <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-2">{audiobook.title}</h2>
                    <p className="text-gray-600 mb-4">By: {audiobook.author}</p>
                    <p className="text-gray-800">
                        This is a placeholder description for <strong>{audiobook.title}</strong>. You can add more details about the audiobook here, such as a summary, duration, or reviews.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AudiobookDetail;