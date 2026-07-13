
import { Link } from 'react-router-dom';
import { useState } from "react";
import { LuPhone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { FiSend } from "react-icons/fi";

const Contact = () => {

    const contactInfo = [
        {
            id : 1,
            icon : <LuPhone />,
            title : "Call Us",
            subtitle : "(555) 123-4567",
            desc : "Mon - Sun : 10.00 AM - 10.00 PM",
        },
        {
            id : 2,
            icon : <MdOutlineEmail />,
            title : "Email Us",
            subtitle : "hello@cornerkitchen.com",
            desc : "We'll Respond As Soon As Possible.",
        },
        {
            id : 3,
            icon : <IoLocationOutline />,
            title : "Our Location",
            subtitle : "123 Main Street",
            desc : "YourTown, India 12345",
        },
        {
            id : 4,
            icon : <IoMdTime />,
            title : "Opening Hours",
            subtitle : "Mon - Fri : 11:00 AM - 10:00 PM",
            desc : "Sat - Sun : 10:00 AM - 11:00 PM",
        },

    ]

    // Store form data
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject : "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message Sent Successfully");
        console.log(formData);

        setFormData({
            name: "",
            email: "",
            phone: "",
            subject : "",
            message: "",
        });
    };
  return (
    <div>

    {/* Banner Section Start here */}
    <section className="bg-[url('/images/contactBanner.png')] bg-cover bg-center min-h-screen w-full relative">

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Hero content */}
        <div className='w-[90%] md:w-[80%] lg:w-1/2 text-white absolute top-1/2 left-1/2 -translate-x-1/2 lg:translate-x-[-85%] -translate-y-1/2 z-10'>

            <div>
                <h5 className='font-serif text-[#C48A3A] text-lg md:text-xl'>Contact Us</h5>
                <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl lg:leading-23.75 font-bold mt-2'>We'd Love to <br /> Here From You</h1>
                <p className='lg:w-[70%] py-5 mt-3 leading-7 text-sm sm:text-base md:text-lg text-gray-200'>
                    Have a question, suggestion, or special request? We're here to help. Reach Out to us Anytime.
                </p>

                <div className='flex flex-col sm:flex-row gap-5 sm:gap-8 mt-8'>
                    <Link to="/book">
                        <button className='bg-[#D9A15B] py-3 px-6 rounded-lg font-semibold text-base md:text-lg cursor-pointer border-2 border-[#D9A15B] 
                            hover:bg-transparent transition-all duration-300'>
                            Book a Table
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </section>
    {/* Banner Section End here */}

    {/* NewsLetter Start here */}
    <div className='py-20 px-5 lg:px-10 xl:px-20 xl:py-15'>

        <div className='py-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 bg-[#faf7f4] border border-[#C48A3A] rounded-lg'>
            
            {contactInfo.map((info, index)=> (
                <div 
                className='xl:border-r last:border-r-0 border-[#C48A3A] text-center'
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
    {/* NewsLetter End here */}

    {/* Form and Map Start here */}
    <div className='py-20 px-5 lg:px-10 xl:px-20 xl:py-15 flex flex-col xl:flex-row gap-30 xl:gap-0'>

        {/* div-1 */}
        <div className='xl:w-1/2 px-2 md:px-10'>
            <h1 className='text-3xl font-semibold'>Find Us</h1>
            <h6 className='text-base mt-3 text-gray-600'>We're easy to find! Come visit us and enjoy <br /> a great meal in a cozy atmosphere.</h6>

            <div className="w-full rounded-2xl overflow-hidden shadow-lg mt-10">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.6188191595065!2d72.82072167580485!3d18.99243455458946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce1034d1263d%3A0x2e6b352bc5f604d0!2sFuture%20Face%20Tech!5e0!3m2!1sen!2sin!4v1780038030033!5m2!1sen!2sin" 
                width="800px"
                height="500px"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
    </div>
        </div>


        {/* div-2 */}
        <div className='xl:w-1/2 px-2 md:px-10'>
            <h1 className='text-3xl font-semibold'>Send Us a Message</h1>
            <h6 className='text-base mt-3 text-gray-600'>Fill out the form below and we'll get back to you shortly.</h6>

            <form 
            onSubmit={handleSubmit}
            className='mt-10'>

                <div className='flex flex-col md:flex-row justify-between gap-5 w-full'>
                    <div className='flex flex-col md:w-1/2 gap-3'>
                        <label className='font-semibold'>Your Name</label>
                        <input 
                        type="text"
                        name='name'
                        required
                        value={formData.name}
                        onChange={handleChange} 
                        placeholder='Enter Your Name' 
                        className='py-2 px-4 bg-[#F1E7D8] rounded-lg border border-gray-300 outline-none'
                        />
                    </div>

                    <div className='flex flex-col md:w-1/2 gap-3'>
                        <label className='font-semibold'>Email Address</label>
                        <input 
                        type="text" 
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='Enter Your Email' 
                        className='py-2 px-4 bg-[#F1E7D8] rounded-lg border border-gray-300 outline-none'
                        />
                    </div>
                </div>

                <div className='flex flex-col md:flex-row justify-between gap-5 w-full mt-10'>
                    <div className='flex flex-col md:w-1/2 gap-3'>
                        <label className='font-semibold'>Phone Number</label>
                        <input 
                        type="tel" 
                        name='phone'
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder='Enter Your Phone Number' 
                        className='py-2 px-4 bg-[#F1E7D8] rounded-lg border border-gray-300 outline-none'
                        />
                    </div>

                    <div className='flex flex-col md:w-1/2 gap-3'>
                        <label className='font-semibold'>Subject</label>
                        <input 
                        type="text" 
                        name='subject'
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder='How Can We Help You? ' 
                        className='py-2 px-4 bg-[#F1E7D8] rounded-lg border border-gray-300 outline-none'
                        />
                    </div>
                </div>

                <div className='flex flex-col gap-3 mt-10'>
                    <label className='font-semibold'>Message</label>
                    <textarea 
                    rows="5"
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    id="" 
                    placeholder='Write Your Message Here.....'
                    className='py-4 px-4 bg-[#F1E7D8] rounded-lg border border-gray-300 outline-none'
                    ></textarea>
                </div>

                <div className='mt-10'>
                    <button className='text-start bg-[#2D3A2D] font-semibold py-3 px-4 text-white flex items-center justify-between rounded-lg border-2 border-[#2D3A2D]
                hover:bg-transparent transition-all duration-300 cursor-pointer hover:text-[#2D3A2D] w-full'>
                        Send Message
                        <FiSend />
                    </button>
                    
                </div>

            </form>
        </div>
    </div>
    {/* Form and Map End here */}



    {/* NewsLetter Start here */}

    <div className='py-15 px-5 xl:px-20 xl:py-15 flex flex-col lg:flex-row'>

      {/* div-1 Start here */}
      <div className='lg:w-1/2 h-100 md:h-80 '>
        <img className='h-full w-full object-cover lg:rounded-l-2xl rounded-t-lg lg:rounded-t-none' src="/images/ContactNewsLetter.png" alt="" />
      </div>
      {/* div-1 End here */}

      {/* div-2 start here */}
      <div className="lg:w-1/2 bg-[#2e3a2d] h-100 md:h-80 rounded-b-lg lg:rounded-bl-none lg:rounded-r-2xl px-10 flex flex-col justify-center">
        <h3 className='font-serif text-[#eb9b3a] text-2xl'>Dine With Us</h3>
        <h1 className='text-2xl lg:text-4xl text-white my-3'>Good Food Good Times <br /> Are Just a Reservation Away!</h1>
        <h5 className='text-lg text-white mb-3'>Whether it's a casual lunch or a special celebration, <br /> we'd love to serve you.</h5>
        <div>
            <Link to="/book">
                <button className='bg-[#D9A15B] py-1 px-4 rounded-sm font-semibold text-base md:text-lg cursor-pointer border-2 border-[#D9A15B] hover:text-white
                    hover:bg-transparent transition-all duration-300'>
                    Book a Table
                </button>
            </Link>
        </div>
      </div>
      {/* div-2 End here */}

    </div>

    {/* NewsLetter End here */}

    </div>
  )
}

export default Contact;