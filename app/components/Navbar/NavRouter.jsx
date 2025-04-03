import Link from 'next/link'
import React from 'react'

const NavRouter = () => {
  const NavLink = [
    { label: "SignIn", href: "/Auth/SignIn" },
    { label: "MyAccount", href: "/ui/Account" },
    { label: "Basket", href: "/ui/Basket" },
    { label: "Help", href: "/ui/Help" },
  ]

  return (
    <div className="hidden md:flex items-center gap-6">
      {NavLink.map((link) => (
        <Link key={link.label} href={link.href} className="text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors duration-200 relative group">
          {link.label}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      ))}
    </div>
  )
}

export default NavRouter

