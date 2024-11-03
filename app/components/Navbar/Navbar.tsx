'use client'
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillMessage } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoIosBook } from "react-icons/io";
import { IoMenu, IoClose } from "react-icons/io5";

const links = [
  {
    label: "Home",
    href: "/",
    icon: <AiFillMessage />
  },
  {
    label: "Books",
    href: "/books",
    icon: <CgProfile />
  },
  {
    label: "Magazines",
    href: "/magazines",
    icon: <IoIosBook />
  },
  {
    label: "Textbooks",
    href: "/textbooks",
    icon: <IoIosBook />
  },
  {
    label: "Audiobooks",
    href: "/audiobooks",
    icon: <IoIosBook />
  },
  {
    label: "Recommended",
    href: "/recommended",
    icon: <IoIosBook />
  },
  {
    label: "Sales",
    href: "/sales",
    icon: <IoIosBook />
  }
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const closeMenu = () => {
    setMenuOpen(false);
  }

  return (
    <div className='text-center bg-gray-100 p-2 cursor-pointer'>
      <div className='flex justify-between md:justify-around gap-5 mx-2 items-center'>
        <div className='flex items-center gap-1'>
          <IoIosBook className="text-2xl md:text-3xl text-purple-800" />
          <p className="font-bold">BookCompass</p>
        </div>
        <div className="md:flex gap-5 hidden">
          {
            links.map((link) => (
              <Link href={link.href} key={link.label}>
                <p className={`text-purple-600 md:flex md:hover:text-gray-900 ${pathname === link.href ? 'md:text-gray-900' : ''}`}>
                  {link.label}
                </p>
              </Link>
            ))
          }
        </div>
        <div>
          <ul className='flex gap-2 justify-center items-center'>
            <li className="hidden md:block"><AiFillMessage className="text-2xl" /></li>
            <li className="md:flex hidden items-center gap-2 ml-3 rounded-md px-2 md:px-4 py-2 md:border-2 border-purple-500 text-purple-500 font-bold"><CgProfile className="text-purple-500 text-2xl" />Name</li>
            <li className="md:hidden text-3xl" onClick={toggleMenu}>
              {menuOpen ? <IoClose /> : <IoMenu />}
            </li>
          </ul>
        </div>
      </div>
      <div className={`fixed top-0 right-0 h-full w-2/4 bg-gray-100 z-50 transition-transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className='flex flex-col items-start p-4'>
          {
            links.map((link) => (
              <Link href={link.href} key={link.label}>
                <p className={`text-purple-600 block py-2 hover:text-gray-900 ${pathname === link.href ? 'text-gray-900' : ''}`} onClick={closeMenu}>
                  {link.label}
                </p>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar;
