import { Link } from "react-router-dom";
import { LuLeaf, LuChefHat } from "react-icons/lu";
import { RxPeople } from "react-icons/rx";
import { FaRegSmile } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { CiStar } from "react-icons/ci";
import FadeUp from "../components/fadeUp/FadeUp";
import { motion } from "framer-motion";

const About = () => {

    const counter = [
        {
            id : 1,
            icon : <FaRegSmile />,
            numbers : "8+",
            title : "Years of Experience",
            subtitle : "Serving delicious food since 2017."
        },
        {
            id : 2,
            icon : <ImSpoonKnife />,
            numbers : "50+",
            title : "Menu Items",
            subtitle : "A veriety of dishes crafted for every taste."
        },
        {
            id : 3,
            icon : <RxPeople />,
            numbers : "10K+",
            title : "Happy Customers",
            subtitle : "Thank you for trusting and supporting us."
        },
        {
            id : 4,
            icon : <CiStar />,
            numbers : "4.8",
            title : "Customer Rating",
            subtitle : "Loved by our guests on all platforms."
        },
    ]
  return (
    <div>

      {/* Banner section Start here */}
      <section className="bg-[url('/images/aboutBanner.png')] bg-cover bg-center min-h-screen w-full relative">

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

            {/* Hero content */}
            <motion.div 
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className='w-[90%] md:w-[80%] lg:w-1/2 text-white absolute top-1/2 left-1/2 -translate-x-1/2 lg:translate-x-[-85%] -translate-y-1/2 z-10'>

                <div>
                    <h5 className='font-serif text-[#C48A3A] text-lg md:text-xl'>Our Story</h5>
                    <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl lg:leading-23.75 font-bold mt-2'>Good Food <br /> Good Times</h1>
                    <p className='lg:w-[70%] py-5 mt-3 leading-7 text-sm sm:text-base md:text-lg text-gray-200'>
                        The corner Kitchen is more than just a restaurant It's a place where good food brings people together and every meal creates lasting memories.
                    </p>

                    <div className='flex flex-col sm:flex-row gap-5 sm:gap-8 mt-8'>
                        <Link to="/book"><button className='bg-[#D9A15B] py-3 px-6 rounded-lg font-semibold text-base md:text-lg cursor-pointer border-2 border-[#D9A15B] 
                        hover:bg-transparent transition-all duration-300'>
                        Book a Table
                        </button></Link>
                    </div>
                </div>

        </motion.div>
      </section>
      {/* Banner section End here */}

      
      {/* About Us Start here */}
      <div className='xl:w-[90%] w-full mx-auto p-5 md:p-15 flex flex-col gap-15 lg:flex-row lg:gap-10'>
        
        <div className='w-full xl:w-[40%]'>
            <FadeUp direction="left">
                <img className='lg:h-150 w-full object-cover rounded-lg' src="/images/aboutUs.png" alt="" />
            </FadeUp>
        </div>
        
        <div className='w-full xl:w-[60%]'>
            <FadeUp direction="up">
                <div className='text-center md:text-start'>
                    <h5 className='font-serif text-[#C48A3A] text-lg md:text-xl'>About Us</h5>
                    <h1 className='text-3xl font-bold mt-2'>Made wih passsion <br /> Served with love.</h1>
                    <p className='xl:w-[75%] py-5 text-sm md:text-base text-gray-600 leading-7'>
                        Founded in 2015, The Corner Kitchen began as a small dream to create a warm and welcoming space where delicious meals are made with the finest ingrediants 
                        and a lot of heart.
                    </p>
                    <p className='xl:w-[75%] text-sm md:text-base text-gray-600 leading-7'>
                        From our kitchen to your table, we believe in honest food, friendly service, and unforgettable experiences. 
                    </p>
                </div>
            </FadeUp>

            <FadeUp direction="up">
                <div className='flex mt-10 flex-col gap-10 md:flex-row'>
                    <div className='2xl:w-[20%] flex flex-col items-center text-center'>
                        <LuLeaf className='xl:text-4xl text-2xl h-15 w-15 p-3 bg-[#f1e6d8] rounded-full'/>
                        <h1 className='my-2 xl:text-xl text-xl font-semibold'>Fresh Ingredients</h1>
                        <p className='lg:text-base text-sm'>We use locally sourced, fresh ingradients in everything we make.</p>
                    </div>
                
                    <div className='2xl:w-[20%] flex flex-col items-center text-center'>
                        <LuChefHat className='xl:text-4xl text-2xl h-15 w-15 p-3 bg-[#f1e6d8] rounded-full' />
                        <h1 className='my-2 xl:text-xl text-xl font-semibold'>Made With Love</h1>
                        <p className='lg:text-base text-sm'>every dish is prepared with care and passion in our kitchen.</p>
                    </div>
                
                    <div className='2xl:w-[20%] flex flex-col items-center text-center'> 
                        <RxPeople className='xl:text-4xl text-2xl h-15 w-15 p-3 bg-[#f1e6d8] rounded-full' />
                        <h1 className='my-2 xl:text-xl text-xl font-semibold'>Cozzy Atmosphere</h1>
                        <p className='lg:text-base text-sm'>A warm and welcoming space for you to relax and enjoy.</p>
                    </div>
                </div>
            </FadeUp>
        </div>
      </div>
      {/* About Us End here */}


      {/* NewsLetter Start here */}
      <FadeUp direction="up">
        <div className='py-15 px-4 xl:px-20 xl:py-15 flex flex-col lg:flex-row'>
            <div className="lg:w-1/2 bg-[#2e3a2d] h-100 px-10 flex flex-col justify-center rounded-t-2xl lg:rounded-t-none lg:rounded-l-2xl">
                <h3 className='font-serif text-[#eb9b3a] text-base lg:text-2xl'>Our Philosophy</h3>
                <h1 className='text-xl lg:text-4xl text-white my-3'>Good Food is all about <br /> Good Moments!</h1>
                <h5 className='text-sm lg:text-lg text-gray-300 mb-3'>
                    We believe great food has the power to bring people together. That's why we focus on quality, taste, and creating moments you'll want to relive.
                </h5>
                <p className='text-sm lg:text-lg font-serif text-[#eb9b3a]'>Thank you for being a part of our journey.</p>
            </div>

            <div className='lg:w-1/2 h-100 '>
                <img className='h-full w-full object-cover rounded-b-2xl lg:rounded-bl-none lg:rounded-r-2xl' src="/images/aboutNewsLetter.png" alt="" />
            </div>
        </div>
      </FadeUp>
      {/* NewsLetter End here */}


      {/* Counter Section Start here */}
      <div className="py-5 px-5 xl:px-20 xl:py-15">
        <FadeUp direction="up">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-[#f1f1f1] rounded-2xl overflow-hidden">
                {counter.map((item, index) => (
                <div
                    key={index}
                    className="flex flex-col items-start px-8 py-10 border-b lg:border-b-0 lg:border-r border-gray-300 last:border-r-0">

                    {/* Icon */}
                    <div className="text-2xl flex justify-center items-center h-16 w-16 bg-[#f1e6d8] rounded-full">{item.icon}</div>

                    {/* Number */}
                    <h2 className="text-4xl font-bold mt-5">{item.numbers}</h2>

                    {/* Title */}
                    <h4 className="mt-2 text-lg font-semibold">{item.title}</h4>

                    {/* Subtitle */}
                    <p className="mt-2 text-gray-600">{item.subtitle}</p>
                </div>
                ))}

            </div>
        </FadeUp>
       </div>
      {/* Counter Section End here */}

    </div>
  )
}

export default About
