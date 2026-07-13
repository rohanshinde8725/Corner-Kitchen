import { Link } from 'react-router-dom'
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-[url('/images/banner-1.png')] bg-cover bg-center min-h-screen w-full relative">

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Hero content */}
      <motion.div initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      
      className='w-[90%] md:w-[80%] lg:w-1/2 text-white absolute top-1/2 left-1/2 -translate-x-1/2 lg:translate-x-[-85%] -translate-y-1/2 z-10'>

        <div>
          <h5 className='font-serif text-[#C48A3A] text-lg md:text-xl'>Welcome to</h5>
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl lg:leading-23.75 font-bold mt-2'>Good Food <br /> Good Times</h1>
          <p className='lg:w-[70%] py-5 mt-3 leading-7 text-sm sm:text-base md:text-lg text-gray-200'>
            A small restaurant with a big heart. We serve fresh, delicious meals made with love and the finest ingredients.
          </p>

          <div className='flex flex-col sm:flex-row gap-5 sm:gap-8 mt-8'>
            <Link to="/menu">
              <button className='bg-[#D9A15B] py-3 px-6 rounded-lg font-semibold text-base md:text-lg cursor-pointer border-2 border-[#D9A15B] 
                hover:bg-transparent transition-all duration-300'>
                View Our Menu
            </button>
            </Link>

            <Link to="/book"><button className='bg-transparent py-3 px-6 rounded-lg font-semibold text-base md:text-lg cursor-pointer border-2 border-[#D9A15B] 
            hover:bg-[#D9A15B] transition-all duration-300'>
              Book a Table
            </button></Link>
          </div>
        </div>

      </motion.div>
    </section>
  )
}

export default Hero