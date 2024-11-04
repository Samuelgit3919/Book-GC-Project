'use client'
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillMessage } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoIosBook } from "react-icons/io";
import { IoMenu, IoClose } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";

const links = [
  {
    label: "Home",
    href: "/",
    icon: <AiFillMessage />
  },
  {
    label: "Books",
    href: "/ui/Book",
    icon: <CgProfile />
  },
  {
    label: "Magazines",
    href: "/ui/Magazine",
    icon: <IoIosBook />
  },
  {
    label: "Textbooks",
    href: "/ui/Textbooks",
    icon: <IoIosBook />
  },
  {
    label: "Audiobooks",
    href: "/ui/Audiobooks",
    icon: <IoIosBook />
  },
  {
    label: "Recommended",
    href: "/ui/Recommended",
    icon: <IoIosBook />
  },
  {
    label: "Sales",
    href: "/ui/Sales",
    icon: <IoIosBook />
  }
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  }

  return (
    <nav className="bg-gray-100 p-2">
      <div className="flex justify-between md:justify-around items-center mx-2">
        <div className="flex items-center gap-1">
          <IoIosBook className="text-2xl md:text-3xl text-purple-800" />
          <p className="font-bold">BookCompass</p>
        </div>
        <div className="hidden md:flex gap-5">
          {
            links.map((link) => (
              <Link href={link.href} key={link.label}>
                <p className={`text-purple-600 md:hover:text-gray-900 ${pathname === link.href ? 'md:text-gray-900' : ''}`}>
                  {link.label}
                </p>
              </Link>
            ))
          }
        </div>
        <div className="flex items-center gap-2">
          <FiSearch 
            className="text-2xl cursor-pointer" 
            onClick={toggleSearch} 
            aria-label="Toggle search"
          />
          <button 
            className="md:hidden text-3xl focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </div>
      {searchOpen && (
        <div className="flex justify-center mt-2">
          <input
            type="text"
            placeholder="Search Books"
            className="w-3/4 p-2 border-b-2 border-gray-300 focus:outline-none focus:border-purple-600"
          />
        </div>
      )}
      <div className={`fixed top-0 right-0 h-full w-1/4 bg-gray-100 z-50 transition-transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex flex-col items-start p-4">
          {
            links.map((link) => (
              <Link href={link.href} key={link.label}>
                <p 
                  className={`text-purple-600 block py-2 w-full hover:text-gray-900 hover:bg-teal-100 hover:rounded-md hover:p-2 ${pathname === link.href ? 'text-gray-900' : ''}`} 
                  onClick={toggleMenu}
                >
                  {link.label}
                </p>
              </Link>
            ))
          }
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
