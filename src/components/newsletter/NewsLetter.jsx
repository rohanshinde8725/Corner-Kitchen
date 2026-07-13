import React from 'react'
import { Link } from 'react-router-dom'

const NewsLetter = () => {
  return (
    <div className='py-15 px-5 xl:px-20 xl:py-15 flex flex-col lg:flex-row'>
      {/* div-1 Start here */}
      <div className='lg:w-1/2 h-100 md:h-80 '>
        <img className='h-full w-full object-cover lg:rounded-l-2xl rounded-t-lg lg:rounded-t-none' src="/images/newsLetter.png" alt="" />
      </div>
      {/* div-1 End here */}



      {/* div-2 start here */}
      <div className="lg:w-1/2 bg-[#2e3a2d] h-100 md:h-80 rounded-b-lg lg:rounded-bl-none lg:rounded-r-2xl px-10 flex flex-col justify-center">
        <h3 className='font-serif text-[#eb9b3a] text-2xl'>Reserve Your Table</h3>
        <h1 className='text-4xl text-white my-3'>We'd love to serve you!</h1>
        <h5 className='text-lg text-white mb-3'>Whether it's a cozy dinner for two or a small celebration,<br /> we've got the perfect table for you.</h5>
        <div>
        <Link to="/book"><button className='bg-[#D9A15B] py-1 px-4 rounded-sm font-semibold text-base md:text-lg cursor-pointer border-2 border-[#D9A15B] hover:text-white
          hover:bg-transparent transition-all duration-300'>
          Book a Table
        </button></Link>
        </div>
      </div>
      {/* div-2 End here */}
    </div>
  )
}

export default NewsLetter
