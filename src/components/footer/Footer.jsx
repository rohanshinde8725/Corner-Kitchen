import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaGoogle } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-[#F7F6F2] w-full xl:px-30 px-10 py-20 grid grid-cols-1 md:grid-cols-2 md:items-center lg:grid-cols-4 gap-10 justify-between'>

      {/* Div-1 start */}
      <div>
        <div>
          <img className='h-12 w-auto bg-black' src="/images/logo-img.png" alt="" />
        </div>
        <p className='my-5 text-[#2F2A26]'>A Small restaurant with a big heart. <br /> thank you for supporting local!</p>
        <div className="flex gap-4 text-white text-lg">
          <div className="w-10 h-10 rounded-full bg-[#1E1814] flex items-center justify-center cursor-pointer hover:bg-[#D9A15B] transition-all duration-300">
            <FaFacebook />
          </div>

          <div className="w-10 h-10 rounded-full bg-[#1E1814] flex items-center justify-center cursor-pointer hover:bg-[#D9A15B] transition-all duration-300">
            <FaInstagram />
          </div>

          <div className="w-10 h-10 rounded-full bg-[#1E1814] flex items-center justify-center cursor-pointer hover:bg-[#D9A15B] transition-all duration-300">
            <FaLinkedin />
          </div>

          <div className="w-10 h-10 rounded-full bg-[#1E1814] flex items-center justify-center cursor-pointer hover:bg-[#D9A15B] transition-all duration-300">
            <FaGoogle />
          </div>
        </div>
      </div>
      {/* Div-1 end */}


      {/* Div-2 start */}
      <div>
        <h5 className='text-xl font-bold text-[#1E1814]'>Hours</h5>
        <div className='my-5 text-lg text-[#2F2A26] font-semibold'>
          <h4>Monday - Friday</h4>
          <h4>11.00 AM - 10.00 PM</h4>
        </div>
        <div className='my-5 text-lg text-[#2F2A26] font-semibold'>
          <h4>Saturaday - Sunday</h4>
          <h4>10.00 AM - 11.00 PM</h4>
        </div>
      </div>
      {/* Div-2 end */}


      {/* Div-3 start */}
      <div>
        <h5 className='text-xl font-bold text-[#1E1814]'>Quick Links</h5>
        <ul className='my-5 text-lg text-[#2F2A26] font-semibold'>
          <Link to='/'><li className='cursor-pointer hover:text-[#D9A15B] transition-all duration-300'>Home</li></Link>
          <Link to='/about'><li className='cursor-pointer hover:text-[#D9A15B] transition-all duration-300'>About</li></Link>
          <Link to='/menu'><li className='cursor-pointer hover:text-[#D9A15B] transition-all duration-300'>Menu</li></Link>
          <Link to='/ourchefs'><li className='cursor-pointer hover:text-[#D9A15B] transition-all duration-300'>Our Chefs</li></Link>
          <Link to='/contact'><li className='cursor-pointer hover:text-[#D9A15B] transition-all duration-300'>Contact</li></Link>
        </ul>
      </div>
      {/* Div-3 end */}

      {/* Div-4 start */}
      <div>
        <h5 className='text-xl font-bold text-[#1E1814]'>Contact Us</h5>
        <div className='mt-5 text-lg text-[#2F2A26] font-semibold flex gap-2 items-center justify-start'>
          <FiPhone className='text-2xl text-[#D9A15B]' />
          <p className='text-lg'>(555) 123-4567</p>
        </div>
        <div className='mt-5 text-lg text-[#2F2A26] font-semibold flex gap-2 items-center justify-start'>
          <MdOutlineMail className='text-xl text-[#D9A15B]' />
          <p className='text-lg'>hello@cornerkitchen.com</p>
        </div>
        <div className='mt-5 text-lg text-[#2F2A26] font-semibold flex gap-2 items-center justify-start'>
          <IoLocationOutline className='text-2xl text-[#D9A15B]' />
          <p className='text-lg'>123 Main Street <br /> Yourtown, India 12345</p>
        </div>
      </div>
      {/* Div-4 end */}
    </div>
  )
}

export default Footer
