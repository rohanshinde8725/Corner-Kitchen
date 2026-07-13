import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    } 

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex justify-between items-center px-5 md:px-10 py-5 md:py-6 z-50 text-white transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >

      {/* Logo */}
      <div>
        <img
          className="h-10 md:h-12 w-auto cursor-pointer"
          src="/images/logo-img.png"
          alt="Logo"
        />
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden lg:block">
        <ul className="flex gap-15 text-lg font-medium">
          <Link to="/"><li className="hover:text-[#D9A15B] cursor-pointer transition-all duration-300">Home</li></Link>
          <Link to="/about"><li className="hover:text-[#D9A15B] cursor-pointer transition-all duration-300">About</li></Link>
          <Link to="/menu"><li className="hover:text-[#D9A15B] cursor-pointer transition-all duration-300">Menu</li></Link>
          <Link to="/ourchefs"><li className="hover:text-[#D9A15B] cursor-pointer transition-all duration-300">Our Chefs</li></Link>
          <Link to="/review"><li className="hover:text-[#D9A15B] cursor-pointer transition-all duration-300">Reviews</li></Link>
          <Link to='/contact'><li className="hover:text-[#D9A15B] cursor-pointer transition-all duration-300">Contact</li></Link>
        </ul>
      </div>

      {/* Desktop Button */}
      <div className="hidden lg:block">
        <Link to="/book"><button className="bg-[#D9A15B] py-2 px-5 text-lg rounded-lg border-2 border-[#D9A15B] hover:bg-transparent hover:text-[#D9A15B] cursor-pointer transition-all duration-300">
          Book a Table
        </button></Link>
      </div>

      {/* Mobile Menu Button */}
      <div
        className="lg:hidden text-3xl cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <IoMenu />
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-black/95 flex flex-col items-center gap-6 py-8 transition-all duration-300 lg:hidden ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col gap-5 text-base">
          <Link to="/"><li className="hover:text-[#D9A15B] cursor-pointer transition-all duration-300">Home</li></Link>
          <Link to="/about"><li className="hover:text-[#D9A15B] cursor-pointer transition-all duration-300">About</li></Link>
          <Link to="/menu"><li className="hover:text-[#D9A15B] cursor-pointer transition-all duration-300">Menu</li></Link>
          <li className="hover:text-[#D9A15B] cursor-pointer transition-all duration-300">Gallery</li>
          <Link to="/review"><li className="hover:text-[#D9A15B] cursor-pointer transition-all duration-300">Reviews</li></Link>
          <Link to='/contact'><li className="hover:text-[#D9A15B] cursor-pointer transition-all duration-300">Contact</li></Link>
        </ul>

        <Link to="/book"><button className="bg-[#D9A15B] py-2 px-5 text-lg rounded-lg border-2 border-[#D9A15B] hover:bg-transparent hover:text-[#D9A15B] cursor-pointer transition-all duration-300">
          Book a Table
        </button></Link>
      </div>

    </nav>
  )
}

export default Header