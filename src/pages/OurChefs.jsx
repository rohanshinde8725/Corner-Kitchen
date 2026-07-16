import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaRegHeart } from "react-icons/fa";
import { LuLeaf, LuChefHat } from "react-icons/lu";
import { RxPeople } from "react-icons/rx";
import { motion } from "framer-motion";
import FadeUp from '../components/fadeUp/FadeUp';

const OurChefs = () => {

    const chefs = [
        {
            img: 'images/chef-1.png',
            name : "Antonio Rossi",
            chef : "Head Chef",
            desc : "Over 15 years of experience in Italian cuisine. Specialist in handmade pasta and fine dining.",
            facebook : "https://www.facebook.com/",
            instagram : "https://www.instagram.com/_rohan_.0710",
            linkedIn : "https://www.linkedin.com/in/rohan-shinde-397195256/",
        },
        {
            img: 'images/chef-2.png',
            name : "Sophia Lin",
            chef : "Sous Chef",
            desc : "Expert in modern European cuisine with a passion for fresh ingredients and bold flavors.",
            facebook : "https://www.facebook.com/",
            instagram : "https://www.instagram.com/_rohan_.0710",
            linkedIn : "https://www.linkedin.com/in/rohan-shinde-397195256/",
        },
        {
            img: 'images/chef-3.png',
            name : "Daniel Martin",
            chef : "Chef de Cuisine",
            desc : "Specializes in grilled dishes and seafood. Known for precision, creativity, and presentation.",
            facebook : "https://www.facebook.com/",
            instagram : "https://www.instagram.com/_rohan_.0710",
            linkedIn : "https://www.linkedin.com/in/rohan-shinde-397195256/",
        },
        {
            img: 'images/chef-4.png',
            name : "Emma Johnson",
            chef : "Pastry Chef",
            desc : "Creates delightul desserts that perfectly balance flavor, texture, and artistry.",
            facebook : "https://www.facebook.com/",
            instagram : "https://www.instagram.com/_rohan_.0710",
            linkedIn : "https://www.linkedin.com/in/rohan-shinde-397195256/",
        },
        {
            img: "images/chef-5.png",
            name: "Liam Anderson",
            chef: "Executive Chef",
            desc: "Passionate about crafting signature dishes using fresh ingredients and modern culinary techniques.",
            facebook: "https://www.facebook.com/",
            instagram: "https://www.instagram.com/_rohan_.0710",
            linkedIn: "https://www.linkedin.com/in/rohan-shinde-397195256/",
        },
        {
            img: "images/chef-6.png",
            name: "Olivia Bennett",
            chef: "Sous Chef",
            desc: "Specializes in creating flavorful international cuisine with precision, creativity, and consistency.",
            facebook: "https://www.facebook.com/",
            instagram: "https://www.instagram.com/_rohan_.0710",
            linkedIn: "https://www.linkedin.com/in/rohan-shinde-397195256/",
        },
    ]

    const cardInfo = [
        {
            id : 1,
            icon : <LuLeaf />,
            title : "Quality Ingredients",
            desc : "We use the, locally sourced ingredients to ensure the best taste",
        },
        {
            id : 2,
            icon : <LuChefHat />,
            title : "Culinary Excellence",
            desc : "Our chefs combine skill and creativity to craft dishes that delight every time",
        },
        {
            id : 3,
            icon : <FaRegHeart />,
            title : "Made With Love",
            desc : "Every dish is prepared with care, passion and attension to detail.",
        },
        {
            id : 4,
            icon : <RxPeople />,
            title : "Teamwork",
            desc : "Our kitchen is s family that works together to bring you unforgettable meals.",
        },
    
    ]
  return (
    <div className='bg-[#f1f1f1]'>
        {/* Banner Section Start here */}
        <section className="bg-[url('/images/chefBanner.png')] bg-cover bg-center min-h-screen w-full relative">

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Hero content */}
            <div className='w-[90%] md:w-[80%] lg:w-1/2 text-white absolute top-1/2 left-1/2 -translate-x-1/2 lg:translate-x-[-85%] -translate-y-1/2 z-10'>

                <motion.div 
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    >
                    <h5 className='font-serif text-[#C48A3A] text-lg md:text-xl'>OUR CHEFS</h5>
                    <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl lg:leading-23.75 font-bold mt-2'>The heart Behind <br /> Every Dish</h1>
                    <p className='lg:w-[70%] py-5 mt-3 leading-7 text-sm sm:text-base md:text-lg text-gray-200'>
                        Behind every flavorful dish is a passionate chef. Meet the talented team who brings creativity, dedication, and love to your plate.
                    </p>

                    <div className='flex flex-col sm:flex-row gap-5 sm:gap-8 mt-8'>
                        <Link to="/book">
                            <button className='bg-[#D9A15B] py-3 px-6 rounded-lg font-semibold text-base md:text-lg cursor-pointer border-2 border-[#D9A15B] 
                                hover:bg-transparent transition-all duration-300'>
                                Book a Table
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
        {/* Banner Section End here */}


        {/* Meet Our Team Start here */}
        <div>
            <FadeUp direction="up">
                <div className='text-center py-10'>
                    <h3 className='uppercase text-[#D9A15B] font-semibold'>Meet Out Team</h3>
                    <h1 className='text-3xl my-3 font-semibold'>Passionate. Skilled. Dedicated.</h1>
                    <p className='text-gray-500 px-10 lg:px-0'>Our chefs bring years of experience from around the world, combining traditional <br /> techniques with creative flair to craft unforgettable dining experiences.</p>
                </div>
            </FadeUp>

            <div className='py-20 px-5 lg:px-10 xl:px-30 xl:py-15'>
                <FadeUp direction="up">
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        {chefs.map((chef, index)=> (
                            <div 
                            key={index}
                            className=''
                            >
                                <div>
                                    <img 
                                    className='h-100 w-full object-cover rounded-t-2xl'
                                    src={chef.img} alt="" />
                                </div>

                                <div className='text-center py-5 px-10 shadow rounded-b-sm min-h-72.5 bg-white'>
                                    <h1 className='text-2xl font-semibold'>{chef.name}</h1>
                                    <h3 className='text-[#D9A15B] my-3 text-lg font-semibold'>{chef.chef}</h3>
                                    <p className='text-gray-600 text-lg'>{chef.desc}</p>

                                    <div className='flex justify-center items-center gap-10 my-5 text-lg'>
                                        <div className='h-10 w-10 border text-white bg-black flex justify-center items-center rounded-full 
                                        hover:bg-[#D9A15B] cursor-pointer transition-all duration-300'>
                                            <a href={chef.facebook} target='blank'><FaFacebookF /></a>
                                        </div>

                                        <div className='h-10 w-10 border text-white bg-black flex justify-center items-center rounded-full 
                                        hover:bg-[#D9A15B] cursor-pointer transition-all duration-300'>
                                            <a href={chef.instagram} target='blank'><FaInstagram /></a>
                                        </div>

                                        <div className='h-10 w-10 border text-white bg-black flex justify-center items-center rounded-full 
                                        hover:bg-[#D9A15B] cursor-pointer transition-all duration-300'>
                                            <a href={chef.linkedIn} target='blank'><FaLinkedinIn /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </FadeUp>
            </div>
        </div>
        {/* Meet Our Team End here */}


        {/* Card Start here */}
        <div className='py-5 px-5 lg:px-10 xl:px-20 xl:py-10'>
            <FadeUp direction="up">
                <div className='py-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 bg-[#faf7f4] border border-[#C48A3A] rounded-lg'>
                    {cardInfo.map((info, index)=> (
                        <div 
                        className='xl:border-r last:border-r-0 border-[#C48A3A] text-center'
                        key={index}>
                            <div className='text-center h-15 w-15 flex justify-center items-center mx-auto rounded-full bg-[#F1E7D8] text-4xl'>{info.icon}</div>

                            <div className='mt-5'>
                                <h1 className='text-2xl font-semibold'>{info.title}</h1>
                                <h3 className='my-3 text-gray-600'>{info.subtitle}</h3>
                                <h4 className='text-gray-600 px-12'>{info.desc}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </FadeUp>
        </div>
        {/* Card End here */}
    </div>
  )
}

export default OurChefs
