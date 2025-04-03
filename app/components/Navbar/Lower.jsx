"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import { AiFillMessage } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { IoIosBook } from 'react-icons/io';

const Lower = () => {
    const [menuOpen, setMenuOpen] = useState(false);


    const pathname = usePathname();
    const links = [
        {
            label: "Home",
            href: "/",

        },
        {
            label: "EBooks",
            href: "/ui/EBook",

        },
        {
            label: "ShopLists",
            href: "/ui/ShopLists",

        },
        {
            label: "Textbooks",
            href: "/ui/Textbooks",

        },
        {
            label: "Audiobooks",
            href: "/ui/Audiobooks",

        },
        // {
        //   label: <MenuItem item={menuItem} />,
        //   href: "/ui/Sales",
        //   icon: <IoIosBook />,
        // },
    ];



    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };



    return (
        <nav className="bg-gray-100 p-2 ">
            <div className="flex justify-between md:justify-around items-center mx-2">
                <div className="hidden md:flex gap-5">
                    {links.map((link) => (
                        <Link href={link.href} key={String(link.label)} passHref>
                            <div
                                className={`text-gray-600 block py-2 w-full hover:text-gray-900  hover:rounded-md  ${pathname === link.href ? "text-gray-900" : ""
                                    }`}
                                onClick={toggleMenu}
                            >
                                {link.label}
                                {link.icon}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div
                className={`fixed top-0 right-0 h-full w-2/4 bg-gray-100 z-50 transition-transform ${menuOpen ? "translate-x-0" : "translate-x-full"
                    } md:hidden`}
            >
                <div className="flex flex-col items-start p-4">
                    {links.map((link) => (
                        <Link href={link.href} key={String(link.label)} passHref>
                            <div
                                className={`text-purple-600 block py-2 w-full hover:text-gray-900 hover:bg-teal-100 hover:rounded-md hover:p-2 ${pathname === link.href ? "text-gray-900" : ""
                                    }`}
                                onClick={toggleMenu}
                            >
                                {link.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Lower