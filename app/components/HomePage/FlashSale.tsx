import React from 'react'

const FlashSale = () => {
    return (
        <div className="bg-purple-600 items-center text-white w-full h-auto md:h-[400px] flex flex-col md:flex-row gap-4">
            {/* Text Section */}
            <div className="p-6 md:p-8 w-full md:w-1/3 md:ml-24 text-center md:text-left">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Flash Sale</h1>
                <p className="py-4 text-sm sm:text-base">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, error.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, error.
                </p>
                <div className="inline-flex items-center justify-center rounded-md border-2 border-b-0 space-x-4 p-2">
                    <span className="flex flex-col items-center">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">05</h2>
                        <p className="text-sm">Hours</p>
                    </span>
                    <span className="flex flex-col items-center">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">42</h2>
                        <p className="text-sm">Minutes</p>
                    </span>
                    <span className="flex flex-col items-center">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">19</h2>
                        <p className="text-sm">Seconds</p>
                    </span>
                </div>
            </div>

            {/* Sliding Card Section */}
            <div className="border-2 border-white w-full md:w-2/3 py-4 h-[250px] md:h-3/4 flex items-center justify-center">
                {/* Sliding Card */}
            </div>
        </div>

    )
}

export default FlashSale
