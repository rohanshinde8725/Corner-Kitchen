import { useState } from 'react'
import { FaRegCalendarAlt } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { LuArmchair, LuUserRound, LuGlassWater } from "react-icons/lu";
import { PiCallBell } from "react-icons/pi";
import { LuPhone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";

const BookTable = () => {

    const [formData, setFormData] = useState({
        date: "",
        time: "",
        members: "",
        name: "",
        phoneNo: "",
        email: "",
        location: "",
        message: "",
        agreeTerms: false,
    })

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData, [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.agreeTerms) {
            alert("Please accept the terms and conditions");
            return;
        }

        alert("Your table has been booked successfully!");
        console.log(formData)

        setFormData({
            date: "",
            time: "",
            members: "",
            name: "",
            phoneNo: "",
            email: "",
            location: "",
            message: "",
            agreeTerms: false,
        })
    }

    const dineWithUs = [
        {
            icon: <LuArmchair />,
            title: "Cozy Atmosphere",
            subTitle: "A warm and welcoming space perfect for every occasion.",
        },
        {
            icon: <PiCallBell />,
            title: "Delicious Cuisine",
            subTitle: "Made with fresh ingredients and cooked to perfection.",
        },
        {
            icon: <LuUserRound />,
            title: "Great Service",
            subTitle: "Our team is hereto make your experience unforgettable.",
        },
        {
            icon: <LuGlassWater />,
            title: "Perfect for any occasion",
            subTitle: "From casual dinners to Special celebrations",
        },

    ]


    const contactInfo = [
        {
            id: 1,
            icon: <LuPhone />,
            title: "Call Us",
            subtitle: "(555) 123-4567",
            desc: "Mon - Sun : 10.00 AM - 10.00 PM",
        },
        {
            id: 2,
            icon: <MdOutlineEmail />,
            title: "Email Us",
            subtitle: "hello@cornerkitchen.com",
            desc: "We'll Respond As Soon As Possible.",
        },
        {
            id: 3,
            icon: <IoLocationOutline />,
            title: "Our Location",
            subtitle: "123 Main Street",
            desc: "YourTown, India 12345",
        },
        {
            id: 4,
            icon: <IoMdTime />,
            title: "Opening Hours",
            subtitle: "Mon - Fri : 11:00 AM - 10:00 PM",
            desc: "Sat - Sun : 10:00 AM - 11:00 PM",
        },

    ]

    return (
        <div>
            <section className="bg-[url('/images/newsLetter.png')] bg-cover bg-center min-h-150 w-full relative">

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Hero content */}
                <div className='w-[90%] md:w-[80%] lg:w-1/2 text-white absolute top-1/2 left-1/2 -translate-x-1/2 lg:translate-x-[-85%] -translate-y-1/2 z-10'>

                    <div>
                        <h5 className='font-serif text-[#C48A3A] text-lg md:text-xl'>Welcome to</h5>
                        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl lg:leading-23.75 font-bold mt-2'>Book a Table</h1>
                        <p className='lg:w-[70%] py-5 mt-3 leading-7 text-sm sm:text-base md:text-lg text-gray-200'>
                            Reserve your table for a memorable dining <br /> experience with your loved ones.
                        </p>
                    </div>

                </div>
            </section>

            <div className='bg-[#FAF7F4]'>
                <div className='w-[85%] mx-auto py-20 flex flex-col xl:flex-row gap-10'>

                    {/* Form Start here */}
                    <div className='w-full xl:w-[70%] bg-white py-10 xl:px-10 px-5 border border-gray-300 rounded-lg'>
                        <div className='flex items-center gap-3'>
                            <div className='h-15 w-15 bg-[#2d3a2d] flex justify-center items-center rounded-full text-white text-2xl'>
                                <FaRegCalendarAlt />
                            </div>
                            <h2 className='text-3xl font-semibold'>Reservation Details</h2>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className='flex flex-col px:5 lg:px-0 lg:flex-row justify-between mt-10 gap-5'>
                                <div className='flex flex-col w-full'>
                                    <label className='font-semibold'>Select Date</label>
                                    <input
                                        name='date'
                                        value={formData.date}
                                        onChange={handleChange}
                                        required
                                        type="date"
                                        placeholder='Select Date'
                                        className='border border-gray-500 py-2 px-4 rounded-sm mt-2 outline-none'
                                    />
                                </div>

                                <div className='flex flex-col w-full'>
                                    <label className='font-semibold'>Select Time</label>
                                    <input
                                        name='time'
                                        value={formData.time}
                                        onChange={handleChange}
                                        // required
                                        type="time"
                                        placeholder='Select Time'
                                        className='border border-gray-500 py-2 px-4 rounded-sm mt-2 outline-none'
                                    />
                                </div>

                                <div className='flex flex-col w-full'>
                                    <label className='font-semibold'>Party Size</label>
                                    <input
                                        name='members'
                                        value={formData.members}
                                        onChange={handleChange}
                                        required
                                        type="tel"
                                        placeholder='Select Guests'
                                        className='border border-gray-500 py-2 px-4 rounded-sm mt-2 outline-none'
                                    />
                                </div>
                            </div> 

                            <div className='flex flex-col px:5 lg:px-0 lg:flex-row justify-between mt-10 gap-5'>
                                <div className='flex flex-col w-full'>
                                    <label className='font-semibold'>Your Name</label>
                                    <input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        type="text"
                                        placeholder='Enter Your Name'
                                        className='border border-gray-500 py-2 px-4 rounded-sm mt-2 outline-none'
                                    />
                                </div>

                                <div className='flex flex-col w-full'>
                                    <label className='font-semibold'>Phone Number</label>
                                    <input
                                        name="phoneNo"
                                        value={formData.phoneNo}
                                        onChange={handleChange}
                                        required
                                        type="text"
                                        placeholder='Enter Phone number'
                                        className='border border-gray-500 py-2 px-4 rounded-sm mt-2 outline-none'
                                    />
                                </div>

                                <div className='flex flex-col w-full'>
                                    <label className='font-semibold'>Email Address</label>
                                    <input
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        type="email"
                                        placeholder='Enter Your Email'
                                        className='border border-gray-500 py-2 px-4 rounded-sm mt-2 outline-none'
                                    />
                                </div>
                            </div>

                            <div className='flex flex-col lg:px-0 lg:flex-row justify-between mt-10 gap-5'>
                                <div className='flex flex-col w-full lg:w-1/2'>
                                    <label className='font-semibold'>Location (City)</label>
                                    <input
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        required
                                        type="location"
                                        placeholder='Enter Location'
                                        className='border border-gray-500 py-2 px-4 rounded-sm mt-2 outline-none'
                                    />
                                </div>

                                <div className='flex flex-col w-full'>
                                    <label className='font-semibold'>Special Request (Optional)</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={3}
                                        id=""
                                        placeholder='Any Special Request?'
                                        className='border border-gray-500 py-2 px-4 rounded-sm mt-2 outline-none'
                                    ></textarea>
                                </div>
                            </div>

                            <div className='mt-3 lg:mt-0'>
                                <input
                                    type="checkbox"
                                    name="agreeTerms"
                                    checked={formData.agreeTerms}
                                    onChange={handleChange}
                                    required
                                    className='h-3.5 w-3.5 cursor-pointer border-2 border-[#C48A3A]'
                                />
                                <label className='font-semibold'> I agree to the <span className='text-[#C48A3A]'>terms and conditions</span></label>
                            </div>

                            <div>
                                <button
                                    className='py-2 font-semibold text-white bg-[#2D3A2D] w-full mt-5 rounded-sm cursor-pointer border-2 border-[#2D3A2D] hover:bg-transparent 
                        hover:text-[#2D3A2D] transition-all duration-300'>
                                    Book My Table
                                </button>
                            </div>

                            <div className='flex justify-center items-center gap-1 my-5 text-gray-500'>
                                <CiLock />
                                <h5>Your information is safe with us</h5>
                            </div>
                        </form>
                    </div>
                    {/* Form End here */}


                    {/* Why Divine With Us Start here */}
                    <div className='w-full xl:w-[30%] bg-[#dfdfda] rounded-lg'>
                        <h1 className='w-[80%] mx-auto mt-10 text-2xl font-semibold text-center'>Why Dine With Us?</h1>
                        {dineWithUs.map((dine, index) => (
                            <div
                                key={index}
                                className='py-10 flex flex-col lg:flex-row gap-5 items-center w-[80%] mx-auto border-b border-gray-400 last:border-0'>
                                <div className='text-5xl p-5 bg-[#E9EBE5] rounded-full'>
                                    {dine.icon}
                                </div>

                                <div className='text-center lg:text-start'>
                                    <h1 className='font-semibold text-xl'>{dine.title}</h1>
                                    <p className='mt-2 text-gray-600 lg:text-justify'>{dine.subTitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Why Divine With Us End here */}

                </div>
            </div>


            <div className='py-20 px-5 lg:px-10 xl:px-20 xl:py-15 bg-[#faf7f4]'>
                <div className=' py-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 bg-white border border-[#C48A3A] rounded-lg'>
                    {contactInfo.map((info, index) => (
                        <div
                            className='border-b md:border-b-0 py-5 last:border-0 xl:border-r last:border-r-0 border-[#C48A3A] text-center'
                            key={index}>
                            <div className='text-center h-15 w-15 flex justify-center items-center mx-auto rounded-full bg-[#F1E7D8] text-4xl'>{info.icon}</div>

                            <div className='mt-5'>
                                <h1 className='text-2xl font-semibold'>{info.title}</h1>
                                <h3 className='my-3 text-gray-600'>{info.subtitle}</h3>
                                <h4 className='text-gray-600'>{info.desc}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BookTable