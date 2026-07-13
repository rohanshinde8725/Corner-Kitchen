import { Link } from "react-router-dom"
import { LuLeaf, LuChefHat } from "react-icons/lu";
import { RxPeople } from "react-icons/rx";


const LearnMoreAboutUs = () => {

    const chefs = [
        {
            img: 'images/chef-1.png',
            name: "Antonio Rossi",
            chef: "Head Chef",
            desc: "Over 15 years of experience in Italian cuisine. Specialist in handmade pasta and fine dining.",
            facebook: "https://www.facebook.com/",
            instagram: "https://www.instagram.com/",
            linkedIn: "https://www.linkedin.com/",
        },
        {
            img: 'images/chef-2.png',
            name: "Sophia Lin",
            chef: "Sous Chef",
            desc: "Expert in modern European cuisine with a passion for fresh ingredients and bold flavors.",
            facebook: "https://www.facebook.com/",
            instagram: "https://www.instagram.com/",
            linkedIn: "https://www.linkedin.com/",
        },
        {
            img: 'images/chef-3.png',
            name: "Daniel Martin",
            chef: "Chef de Cuisine",
            desc: "Specializes in grilled dishes and seafood. Known for precision, creativity, and presentation.",
            facebook: "https://www.facebook.com/",
            instagram: "https://www.instagram.com/",
            linkedIn: "https://www.linkedin.com/",
        },
    ]

    return (
        <div>
            <section className="bg-[url('/images/banner-1.png')] bg-cover bg-center min-h-screen w-full relative">
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30"></div>
                {/* Hero content */}
                <div className='w-[90%] md:w-[80%] lg:w-1/2 text-white absolute top-1/2 left-1/2 -translate-x-1/2 lg:translate-x-[-85%] -translate-y-1/2 z-10'>
                    <div>
                        <h5 className='font-serif text-[#C48A3A] text-lg md:text-xl'>Our Story</h5>
                        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl lg:leading-23.75 font-bold mt-2'>More Than <br /> Just a Restaurant</h1>
                        <p className='lg:w-[70%] py-5 mt-3 leading-7 text-sm sm:text-base md:text-lg text-gray-200'>
                            Good Food Good Times is a small Restaurant with a big heart. We believe in honest food, warm hospitality, and creating memorable moments
                            for every guest who walks through our door.
                        </p>

                        <div className='flex flex-col sm:flex-row gap-5 sm:gap-8 mt-8'>
                            <Link to="/book"><button className='bg-[#D9A15B] py-3 px-6 rounded-lg font-semibold text-base md:text-lg cursor-pointer border-2 border-[#D9A15B]
                    hover:bg-transparent transition-all duration-300'>
                                Book a Table
                            </button></Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story Start  */}
            <div className='w-[85%] mx-auto py-20 flex flex-col xl:flex-row gap-10'>
                <div className="w-full flex gap-10">
                    <div className="w-1/2 h-120">
                        <img className="w-full h-full object-cover rounded-3xl" src="/images/learnAboutUs.png" alt="" />
                    </div>

                    <div className="w-1/2 flex flex-col justify-center">
                        <h3 className="uppercase text-[#D9A15B] font-semibold">Our Story</h3>
                        <h1 className="text-4xl my-5 leading-10 font-semibold">A Journey Of Passion <br /> and Flavor</h1>
                        <p className="text-lg w-[80%] text-gray-700">Good Food Good Times was born a simple idea - to bring people together through food that feels like home. What started as a small
                            kitchen with big dreams has grown into a cozy space where friends, families, and food lovers create unforgettable memories.
                        </p>

                        <p className="text-lg w-[80%] text-gray-700 mt-8">We focus on fresh ingredients, authentic recipes, and a welcoming atmosphere that makes every visit special.</p>

                        <Link to="/menu">
                            <button className='bg-[#2e392c] mt-5 py-2 px-5 text-white rounded-sm border-2 border-[#2e392c] hover:bg-transparent transition-all duration-300 
                    hover:text-[#2e392c] cursor-pointer'>
                                Our Menu
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Our Story End */}


            {/* What Makes Us Special Start */}
            <div className='w-full bg-[#F7F6F2]'>
                <div className="text-center w-full py-10 rounded-lg">
                    <h3 className="uppercase text-[#D9A15B] font-semibold">What Makes Us Special</h3>
                    <h1 className="text-4xl my-5 leading-10 font-semibold">The Good Food Promise</h1>

                    <div className='w-[95%] flex justify-center items-center gap-10 mt-10'>

                        <div className='flex flex-col items-center text-center border-r border-[#D9A15B]'>
                            <LuLeaf className='xl:text-4xl text-2xl h-15 w-15 p-3 bg-[#f1e6d8] rounded-full' />
                            <h1 className='my-2 xl:text-2xl text-xl font-semibold'>Fresh Ingredients</h1>
                            <p className='w-[60%] lg:text-lg text-sm'>We use locally sourced, seasonal fresh ingradients to create dishes that are fresh,
                                healthy, and full of flavour.
                            </p>
                        </div>

                        <div className='flex flex-col items-center text-center border-r border-[#D9A15B]'>
                            <LuChefHat className='xl:text-4xl text-2xl h-15 w-15 p-3 bg-[#f1e6d8] rounded-full' />
                            <h1 className='my-2 xl:text-2xl text-xl font-semibold'>Made With Love</h1>
                            <p className='w-[60%] lg:text-lg text-sm'>Every dish is prepared with care, passion and attention to detail in our kitchen.</p>
                        </div>

                        <div className='flex flex-col items-center text-center last:border-r-0'>
                            <RxPeople className='xl:text-4xl text-2xl h-15 w-15 p-3 bg-[#f1e6d8] rounded-full' />
                            <h1 className='my-2 xl:text-2xl text-xl font-semibold'>Cozzy Atmosphere</h1>
                            <p className='w-[60%] lg:text-lg text-sm'>A warm and welcoming space designed for you to relax, enjoy, and make memories.</p>
                        </div>

                    </div>
                </div>
            </div>
            {/* What Makes Us Special End */}

            {/* Meet The Team Start */}
            <div className='w-[85%] mx-auto py-20 flex flex-col xl:flex-row gap-5'>
                <div className="w-[30%]">
                    <h3 className="uppercase text-[#D9A15B] font-semibold">Meet The Team</h3>
                    <h1 className="text-4xl my-5 leading-10 font-semibold">The Heart Behind <br /> Good Food</h1>
                    <p className="text-lg text-justify w-[80%] text-gray-700">
                        Our chefs and team members are passionate about food, hospitability, and creating experiences that stay with you long after the meal is over.
                    </p>
                </div>

                <div className="w-[70%]">
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {chefs.map((chef, index) => (
                        <div
                            key={index}
                            className=''>
                            <div>
                                <img
                                className='h-80 w-full object-cover rounded-t-2xl'
                                src={chef.img} alt="" />
                            </div>

                            <div className='py-5 px-5 shadow rounded-b-sm'>
                                <h1 className='text-2xl font-semibold'>{chef.name}</h1>
                                <h3 className='text-[#D9A15B] my-3 text-lg font-semibold'>{chef.chef}</h3>
                                <p className='text-gray-600 text-lg'>{chef.desc}</p>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
            {/* Meet The Team End */}

        </div>
    )
}

export default LearnMoreAboutUs