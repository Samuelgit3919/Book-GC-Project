// components/DetailedEBook.js
import Image from "next/image";
import Link from "next/link";
import { ebooksForSales } from "../eBook";

export default async function DetailedEBook({ params }) {
    const { id } = await params;
    const ebookId = parseInt(id, 10); // Convert string ID to number
    const ebook = ebooksForSales.find((book) => book.id === ebookId); // Find the ebook by ID

    // Handle case where ebook is not found
    if (!ebook) {
        return (
            <div className="max-w-7xl mx-auto px-4 py-10">
                <h2 className="text-2xl font-bold mb-4">Ebook Not Found</h2>
                <p>The ebook you're looking for doesn't exist.</p>
                <Link href="/ui/EBook" className="text-blue-500 underline">
                    Go back to ebooks
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-4 mt-4">
            {/* Book Section */}
            <div className="flex flex-col md:flex-row gap-6 mb-8">
                {/* Book Cover */}
                <div className="w-full md:w-1/3">
                    <Image
                        src={ebook.img} // Replace with actual book cover image path
                        alt={ebook.title}
                        width={200}
                        height={300}
                        unoptimized
                        className="object-cover rounded-lg shadow-md"
                    />
                </div>

                {/* Book Details */}
                <div className="w-full md:w-2/3">
                    <h1 className="text-3xl font-bold mb-2">
                        {ebook.title}
                    </h1>
                    <h3 className="text-lg text-gray-600 mb-4">by {ebook.author}</h3>
                    <p className="text-gray-700 mb-4">
                        {ebook.description}
                    </p>
                    <p className="text-sm text-gray-500 mb-4">{ebook.genre}</p>
                    <div className="flex items-center gap-4">
                        <span className="text-red-600 font-bold text-xl">FREE</span>
                        <span className="text-gray-600 line-through">$3.99</span>
                        {/* <Link href={ebook.link}>
                            <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700">
                                {ebook.link}
                            </button>
                        </Link> */}
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
                        {/* <div className="flex gap-4">
                            <Link href={ebook.authorLink}>
                                <Image
                                    src={ebook.authorImage}
                                    alt="Website/Blog"
                                    width={24}
                                    height={24}

                                />
                            </Link>
                            <Link href={ebook.authorFacebook}>
                                <Image
                                    src={ebook.authorFacebookImage}
                                    alt="Facebook"
                                    width={24}
                                    height={24}
                                />
                            </Link>
                            <Link href={ebook.authorTwitter}>
                                <Image
                                    src={ebook.authorTwitterImage}
                                    alt="Twitter"
                                    width={24}
                                    height={24}
                                />
                            </Link>
                            <Link href={ebook.authorGoodreads}>
                                <Image
                                    src={ebook.authorGoodreadsImage}
                                    alt="Goodreads"
                                    width={24}
                                    height={24}
                                />
                            </Link>
                            <Link href={ebook.authorAmazon}>
                                <Image
                                    src={ebook.authorAmazonImage}
                                    alt="Amazon"
                                    width={24}
                                    height={24}
                                />
                            </Link>
                        </div> */}
                    </div>
                </div>

                {/* Author Image */}
                <div className="w-full md:w-1/3">
                    <Image
                        src={ebook.authorImage}
                        alt={ebook.author}
                        width={200}
                        height={200}
                        unoptimized
                        className="object-cover rounded-lg shadow-md"
                    />
                </div>
            </div>
        </div>
    );
};

