import React from 'react'
import { MdStarRate } from 'react-icons/md';

const BestSeller = () => {


    const slides = [

        {
            image: 'https://i.pinimg.com/736x/f5/4f/08/f54f0874809bfb306cefe230135cb797.jpg',
            title: 'Be yourself & Never Surrender',
            subtitle: 'Inspirational Journey',
            type: "Adventure",
            rating: <MdStarRate />,
            des: "Adventure of Mount Everest",
            author: "Hanry Marlopo",
            Price: "$21.99"
        },
        {
            image: 'https://i.pinimg.com/736x/f5/4f/08/f54f0874809bfb306cefe230135cb797.jpg',
            title: 'Theory: Is Alien Real',
            subtitle: 'Explore the Unknown',
            type: "Fiction",
            rating: <MdStarRate />,
            des: "Life of wild",
            author: "Rick Riordan",
            Price: "$19.99"
        },
        {
            image: 'https://i.pinimg.com/736x/f5/4f/08/f54f0874809bfb306cefe230135cb797.jpg',
            title: 'The Unseen',
            subtitle: 'Discover Hidden Mysteries',
            type: "Thriller",
            rating: <MdStarRate />,
            des: "Story of Everest",
            author: "Stephen King",
            Price: "$24.99"
        },
    ];

    return (
        <div className="w-full lg:w-5/5 mx-auto py-10">
            <h1 className="text-2xl sm:text-3xl my-4 mx-4 font-bold">Best Sellers</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                {slides.map((slide, index) => (
                    <div key={index} className="p-4 flex flex-col">
                        <div className="flex flex-col md:flex-row h-auto rounded-lg shadow-md gap-3">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="h-60 md:h-80 w-full md:w-3/5 object-cover rounded-lg"
                            />
                            <div className="flex flex-col flex-grow gap-4 relative p-4">
                                <span className="flex items-center gap-2">
                                    <button className="p-2 bg-purple-300 w-24 rounded-md font-semibold">
                                        {slide.type}
                                    </button>
                                    <button className="p-2 rounded-md h-[40px] w-24 md:w-16 flex items-center justify-center text-2xl text-orange-600 bg-orange-300 border-0">
                                        {slide.rating} <span className='sm:text-[15px]'>3.14</span>
                                    </button>
                                </span>
                                <h3 className="text-lg sm:text-xl font-semibold">{slide.des}</h3>
                                <span className='flex space-x-48 md:space-x-0'>
                                    <p className="font-serif py-1">
                                        {slide.author}
                                    </p>
                                    <h2 className="font-mono text-xl sm:text-2xl absolute bottom-4 text-purple-500">
                                        {slide.Price}
                                    </h2>
                                </span>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default BestSeller
