// components/DetailedEBook.js
import Image from "next/image";
import Link from "next/link";

const DetailedEBook = ({ params }) => {
    const { id } = params;
    return (
        <div className="max-w-4xl mx-auto p-4 mt-4">
            {/* Book Section */}
            <div className="flex flex-col md:flex-row gap-6 mb-8">
                {/* Book Cover */}
                <div className="w-full md:w-1/3">
                    <Image
                        src="/book-cover-placeholder.jpg" // Replace with actual book cover image path
                        alt="The Curse on Long Autumn Valley"
                        width={200}
                        height={300}
                        className="object-cover rounded-lg shadow-md"
                    />
                </div>

                {/* Book Details */}
                <div className="w-full md:w-2/3">
                    <h1 className="text-3xl font-bold mb-2">
                        The Curse on Long Autumn Valley
                    </h1>
                    <h3 className="text-lg text-gray-600 mb-4">by Andrew Craven</h3>
                    <p className="text-gray-700 mb-4">
                        Corvus Blight has died. His daughter Laurel is left to manage the
                        family’s affairs despite traditions that would place them on her
                        younger brother, Yrion. But Yrion has troubles of his own: he’s
                        hearing his dead father’s voice and he’s seeing the Nightsteed, a
                        ghost horse from local folklore. They lure him into the dead
                        darkness, into the perilous world of the Nightfather, purveyor of a
                        terrible curse.
                    </p>
                    <p className="text-sm text-gray-500 mb-4">FANTASY</p>
                    <div className="flex items-center gap-4">
                        <span className="text-red-600 font-bold text-xl">FREE</span>
                        <span className="text-gray-600 line-through">$3.99</span>
                        <Link href="https://www.amazon.com">
                            <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700">
                                Amazon
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* About the Author Section */}
            <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-lg shadow-md">
                {/* Author Details */}
                <div className="w-full md:w-2/3">
                    <h2 className="text-2xl font-semibold mb-4">About the Author</h2>
                    <p className="text-gray-700 mb-4">
                        Andrew Craven writes science fiction and fantasy. He received a BA in
                        English from York College, located in York, Pennsylvania, where he was born and raised; he’ll probably die there too. He’s the author of five books: Moshiah, The Curse on Long Autumn Valley, Wintercity Crossing, Cloudbreak, and The Lucinda Simulation. When he’s not writing, he’s partying with his sons, Henry and Robbie, dabbling in heavy metal guitar, and reading whatever he can get his hands on. His beautiful wife, Carrie, wonders when she’ll be mentioned in the bio.
                    </p>

                    {/* Author Links */}
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold mb-2">Author Links</h3>
                        <div className="flex gap-4">
                            <Link href="https://website.com">
                                <Image
                                    src="/website-icon.png" // Replace with actual website icon
                                    alt="Website/Blog"
                                    width={24}
                                    height={24}
                                />
                            </Link>
                            <Link href="https://facebook.com">
                                <Image
                                    src="/facebook-icon.png" // Replace with actual Facebook icon
                                    alt="Facebook"
                                    width={24}
                                    height={24}
                                />
                            </Link>
                            <Link href="https://twitter.com">
                                <Image
                                    src="/twitter-icon.png" // Replace with actual Twitter icon
                                    alt="Twitter"
                                    width={24}
                                    height={24}
                                />
                            </Link>
                            <Link href="https://goodreads.com">
                                <Image
                                    src="/goodreads-icon.png" // Replace with actual Goodreads icon
                                    alt="Goodreads"
                                    width={24}
                                    height={24}
                                />
                            </Link>
                            <Link href="https://amazon.com">
                                <Image
                                    src="/amazon-icon.png" // Replace with actual Amazon icon
                                    alt="Amazon"
                                    width={24}
                                    height={24}
                                />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Author Image */}
                <div className="w-full md:w-1/3">
                    <Image
                        src="/author-placeholder.jpg" // Replace with actual author image path
                        alt="Andrew Craven"
                        width={200}
                        height={200}
                        className="object-cover rounded-lg shadow-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default DetailedEBook;