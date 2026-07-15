import { useState } from 'react'
import { RiStarSFill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import FadeUp from '../components/fadeUp/FadeUp';

const Reviews = () => {

    const initialReviews = [
        {
            id: 1,
            reviewerImg: "/images/review1.png",
            name: "Priya Sharma",
            date: "2 days ago",
            icon: <HiOutlineEllipsisVertical />,
            review: "Amazing food, cozy ambiance, and excellent service! The grilled chicken was absolutely delicious. Will definitely visit again.",
            itemImg: "/images/menu-item-1.png",
            icon2: <FaHeart />,
            helpful: 12,
            liked: false,
            rating: 5,
        },

        {
            id: 2,
            reviewerImg: "/images/review2.png",
            name: "Rahul Verma",
            date: "5 days ago",
            icon: <HiOutlineEllipsisVertical />,
            review: "One of the best dining experiences in town. Loved the grilled chicken and chocolate lava cake. Highly recommend!",
            itemImg: "/images/menu-item-4.png",
            icon2: <FaHeart />,
            helpful: 8,
            liked: false,
            rating: 5,
        },

        {
            id: 3,
            reviewerImg: "/images/review4.png",
            name: "Ananya Iyer",
            date: "1 week ago",
            icon: <HiOutlineEllipsisVertical />,
            review: "The atmosphere is so warm and welcoming. Perfect place for a family dinner. Staff was very polite and attentive.",
            itemImg: "/images/newsLetter.png",
            icon2: <FaHeart />,
            helpful: 6,
            liked: false,
            rating: 5,
        },

        {
            id: 4,
            reviewerImg: "/images/review3.png",
            name: "Vikram Singh",
            date: "2 days ago",
            icon: <HiOutlineEllipsisVertical />,
            review: "Great food and good portions. The burger was juicy and fresh. Just a little busy on weekends.",
            itemImg: "/images/menu-item-3.png",
            icon2: <FaHeart />,
            helpful: 10,
            liked: false,
            rating: 4,
        },
        {
            id: 5,
            reviewerImg: "/images/review5.png",
            name: "Arjun Mehta",
            date: "2 weeks ago",
            icon: <HiOutlineEllipsisVertical />,
            review: "Absolutely loved the Pan-Seared Salmon! It was fresh, flavorful, and perfectly seasoned. The combination of juicy salmon and aromatic herbs.",
            itemImg: "/images/pan-seared salmon.png",
            icon2: <FaHeart />,
            helpful: 5,
            liked: false,
            rating: 5,
        },

        {
            id: 6,
            reviewerImg: "/images/review6.png",
            name: "Neha Kapoor",
            date: "2 weeks ago",
            icon: <HiOutlineEllipsisVertical />,
            review: "Every detail from the food to the service was perfect. You can feel the love in every dish.",
            itemImg: "/images/Spaghetti Carbonara.png",
            icon2: <FaHeart />,
            helpful: 7,
            liked: false,
            rating: 5,
        },

        {
            id: 7,
            reviewerImg: "/images/review4.png",
            name: "Ananya Iyer",
            date: "1 week ago",
            icon: <HiOutlineEllipsisVertical />,
            review: "The Mushroom Soup was rich, creamy, and full of earthy flavors. Every spoonful felt comforting and satisfying.",
            itemImg: "/images/Mushroom Soup.png",
            icon2: <FaHeart />,
            helpful: 11,
            liked: false,
            rating: 4,
        },

        {
            id: 8,
            reviewerImg: "/images/review3.png",
            name: "Vikram Singh",
            date: "2 days ago",
            icon: <HiOutlineEllipsisVertical />,
            review: "The Grilled Ribeye Steak was cooked exactly as requested and bursting with flavor. Tender, juicy, and perfectly seasoned.",
            itemImg: "/images/grilled ribeye steak.png",
            icon2: <FaHeart />,
            helpful: 9,
            liked: false,
            rating: 5,
        },
    ]

    const [reviews, setReviews] = useState(initialReviews)
    const [showModal, setShowModal] = useState(false)
    const [reviewName, setReviewName] = useState("")
    const [reviewText, setReviewText] = useState("");
    const [rating, setRating] = useState(5);
    const [selectedImage, setSelectedImage] = useState("");
    const [reviewerImg, setReviewerImg] = useState("");
    const [showEditModal, setShowEditModal] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [editedReview, setEditedReview] = useState("");
    const [activeMenu, setActiveMenu] = useState(null);


    // Like Function Start here
    const handleLike = (id) => {
        console.log("Clicked", id);
        setReviews((prevReviews) => prevReviews.map((review) => {
            if (review.id === id) {
                return {
                    ...review, liked: !review.liked, helpful: review.liked ? review.helpful - 1 : review.helpful + 1,
                };
            }

            return review;
        })
        );
    };
    // Like Function End here


    // Form Submit Function Start here
    const handleSubmitReview = () => {
        if (!reviewName.trim() || !reviewText.trim()) {
            alert("Please fill all Fields")
            return
        }

        const newReview = {
            id: Date.now(),
            reviewerImg: reviewerImg || "/images/default-user.png",
            name: reviewName,
            date: "Just Now",
            icon: <HiOutlineEllipsisVertical />,
            review: reviewText,
            itemImg: selectedImage,
            icon2: <FaHeart />,
            helpful: 0,
            liked: false,
            rating: rating,
        }
        setReviews((prev) => [newReview, ...prev]);

        setReviewName("");
        setReviewerImg("");
        setReviewText("");
        setRating(5);
        setSelectedImage("");
        setShowModal(false);
    }
    // Form Submit Function End here


    // Image Upload Function Start here
    const handleImageUpload = (e) => {
        const file = e.target.files[0];

        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setReviewerImg(imageUrl);
        }
    };
    // Image Upload Function End here


    // Remove Review Start Here
    const handleDeleteReview = (id) => {
        setReviews((prevReviews) =>
            prevReviews.filter((review) => review.id !== id)
        );
    };
    // Remove Review End here


    // Edit Function Start here
    const handleEditClick = (review) => {
        setEditingId(review.id);
        setEditedReview(review.review);
        setShowEditModal(true);
    };


    const handleUpdateReview = () => {
        setReviews((prevReviews) =>
            prevReviews.map((review) =>
                review.id === editingId
                    ? { ...review, review: editedReview }
                    : review
            )
        );

        setShowEditModal(false);
        setEditingId(null);
        setEditedReview("");
    };
    // Edit Function End here


    return (
        <div>

            {/* Banner Section Start here */}
          <section className="bg-[url('/images/reviewBanner.png')] bg-cover bg-center min-h-screen w-full relative">

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Hero content */}
                <div className='w-[90%] md:w-[80%] lg:w-1/2 text-white absolute top-1/2 left-1/2 -translate-x-1/2 lg:translate-x-[-85%] -translate-y-1/2 z-10'>

                    <motion.div 
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        >
                        <h5 className='font-serif text-[#C48A3A] text-lg md:text-xl'>What Our Guest Says</h5>
                        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl lg:leading-23.75 font-bold mt-2'>Our Reviews</h1>
                        <p className='lg:w-[70%] py-5 mt-3 leading-7 text-sm sm:text-base md:text-lg text-gray-200'>
                            We're grateful for the love and support from our amazing guests. <br /> Here's what they have to say about their experience at Good Food.
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



            {/* Rating Scetion Start here */}
            <div className='w-[90%] mx-auto px-2 lg:px-5 xl:px-20 py-10 bg-[#FAF7F4] flex flex-col lg:flex-row justify-between my-10 rounded-lg'>

                {/* div-1 Start here */}
                <FadeUp direction="up">
                    <div className='text-center'>
                        <h4 className='font-semibold text-lg'>Overall Rating</h4>
                        <h1 className='font-bold text-5xl my-2'>4.8</h1>
                        <div className='flex justify-center items-center text-yellow-500 text-3xl mb-2'>
                            <RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill />
                        </div>
                        <h2 className='text-gray-600'>Based on 248 Reviews</h2>
                    </div>
                </FadeUp>
                {/* div-1 End here */}


                {/* div-2 Start here */}
                <div className='flex flex-col gap-5 mt-15 lg:mt-0 px-5'>
                    {[
                        { star: 5, count: 186, width: "80%" },
                        { star: 4, count: 45, width: "30%" },
                        { star: 3, count: 13, width: "13%" },
                        { star: 2, count: 2, width: "4%" },
                        { star: 1, count: 2, width: "4%" },
                    ].map((item, index) => (
                        <div key={index} className='flex items-center justify-between gap-4'>
                            <FadeUp direction="up">
                                <div className='w-16 text-start'>
                                    <h4>{item.star} Stars</h4>
                                </div>
                            </FadeUp>

                            <FadeUp direction="up">
                                <div className="bg-gray-300 rounded-full h-3 w-40 sm:w-100 relative overflow-hidden">
                                    <span
                                        className='absolute top-0 left-0 bg-[#D9A15B] h-full rounded-full'
                                        style={{ width: item.width }}
                                    />
                                </div>
                            </FadeUp>

                            <FadeUp direction="up">
                                <div className='w-10 text-end'>
                                    <h4>{item.count}</h4>
                                </div>
                            </FadeUp>
                        </div>
                    ))}
                </div>
                {/* div-2 End here */}



                {/* div-3 Start here */}
                <div>
                    <FadeUp direction="up">
                        <div className='text-center h-15 w-15 flex justify-center items-center mx-auto rounded-full bg-[#F1E7D8] text-3xl mt-15 lg:mt-0'>
                            <FaHeart />
                        </div>
                    </FadeUp>
                    <FadeUp direction="up">
                        <div className='text-center mt-3'>
                            <h1 className='text-2xl font-semibold'>98% of guests</h1>
                            <p className='text-base'>recommend Good Food <br /> to their friends and family.</p>
                        </div>
                    </FadeUp>
                </div>
                {/* div-3 End here */}
            </div>
            {/* Rating Scetion End here */}



            {/* Testimonial Start here */}
            <div className='w-[90%] mx-auto'>

                {/* Heading Start here */}
                <FadeUp direction="up">
                    <div className='flex justify-between '>
                        <div className='flex gap-2 items-center'>
                            <h1 className='text-2xl font-semibold'>All Reviews</h1>
                            <h3 className='text-[#D9A15B] font-semibold'>(248)</h3>
                        </div>
                        <div>
                            <select className='border border-gray-300 py-1 px-3 rounded-sm outline-none cursor-pointer' name="" id="">
                                <option value="/">Most Recent</option>
                                <option value="day">Days Ago</option>
                                <option value="week">Weeks Ago</option>
                                <option value="month">Months Ago</option>
                            </select>
                        </div>
                    </div>
                </FadeUp>
                {/* Heading End here */}


                {/* Grid Start here */}
                <div className='my-10'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-5'>
                        {reviews.map((review, index) => (
                            <FadeUp direction="up">
                                <div
                                    className='px-5 py-8 border border-gray-300 rounded-lg bg-[#FAF7F4] flex flex-col justify-between'
                                    key={index}>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex items-center gap-5'>
                                            <div className='h-15 w-15'>
                                                <img className='rounded-full' src={review.reviewerImg} alt="" />
                                            </div>
                                            <div>
                                                <h1 className='font-semibold'>{review.name}</h1>
                                                <h3 className='font-light text-sm text-gray-500'>{review.date}</h3>
                                            </div>
                                        </div>
                                        <div className="relative">

                                            <button
                                                onClick={() => setActiveMenu(activeMenu === review.id ? null : review.id)
                                                }
                                                className="text-2xl cursor-pointer"
                                            >
                                                <HiOutlineEllipsisVertical />
                                            </button>

                                            {activeMenu === review.id && (
                                                <div className="absolute right-0 top-10 bg-white shadow-lg border border-gray-400 rounded-lg w-32 z-20">

                                                    <button onClick={() => { handleEditClick(review); setActiveMenu(null); }}
                                                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 hover:rounded-t-lg text-sm cursor-pointer">
                                                        Edit
                                                    </button>

                                                    <button onClick={() => { handleDeleteReview(review.id); setActiveMenu(null); }}
                                                        className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 hover:rounded-b-lg text-sm cursor-pointer">
                                                        Remove
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className='flex items-center text-yellow-400 text-2xl mt-5'>
                                        {[...Array(review.rating || 5)].map((_, index) => (
                                            <RiStarSFill key={index} />
                                        ))}
                                    </div>

                                    <p className='mt-5'>{review.review}</p>

                                    <div className='mt-5'>
                                        <img className='h-50 w-full object-cover rounded-lg' src={review.itemImg} alt="" />
                                    </div>

                                    <div className='mt-5 flex items-center gap-2'>
                                        <span
                                            onClick={() => handleLike(review.id)}
                                            className={`cursor-pointer text-gray-400 hover:text-red-600 transition-all duration-300
                                        ${review.liked ? "text-red-600" : "text-gray-400"}`}>
                                            {review.icon2}
                                        </span>
                                        <h4 className='text-base'>Helpful ({review.helpful})</h4>
                                    </div>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
                {/* Grid End here */}

            </div>
            {/* Testimonial End here */}


            {/* NewsLetter Start here */}
            <FadeUp direction="up">
                <div className='py-15 px-5 xl:px-20 xl:py-15 flex flex-col lg:flex-row'>
                    {/* div-1 Start here */}
                    <div className='lg:w-1/2 h-100 md:h-80 '>
                        <img className='h-full w-full object-cover lg:rounded-l-2xl rounded-t-lg lg:rounded-t-none' src="/images/newsLetter.png" alt="" />
                    </div>
                    {/* div-1 End here */}



                    {/* div-2 start here */}
                    <div className="lg:w-1/2 bg-[#2e3a2d] h-100 md:h-80 rounded-b-lg lg:rounded-bl-none lg:rounded-r-2xl px-10 flex flex-col justify-center">
                        <h3 className='font-serif text-[#eb9b3a] text-2xl'>Love Our Food?</h3>
                        <h1 className='text-4xl text-white my-3'>We'd love to hear from you!</h1>
                        <h5 className='text-lg text-white mb-3'>Share your experience and help others discover Good Food.</h5>
                        <div>
                            <button
                                onClick={() => setShowModal(true)}
                                className='bg-[#D9A15B] py-1 px-4 rounded-sm font-semibold text-base md:text-lg cursor-pointer border-2 border-[#D9A15B] hover:text-white
                            hover:bg-transparent transition-all duration-300'>
                                Write a Review
                            </button>
                        </div>
                    </div>
                    {/* div-2 End here */}
                </div>
            </FadeUp>
            {/* NewsLetter End here */}

            {/* Add New Review Modal Start here */}
            {showModal && (
                <FadeUp direction="up">
                    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-5">
                        <div className="bg-white w-full max-w-lg p-6 rounded-lg">

                            <h2 className="text-2xl font-bold mb-4">
                                Write a Review
                            </h2>

                            <input
                                type="text"
                                required
                                placeholder="Your Name"
                                value={reviewName}
                                onChange={(e) => setReviewName(e.target.value)}
                                className="w-full border p-3 rounded-lg mb-3 outline-none"
                            />

                            <textarea
                                placeholder="Write your review..."
                                required
                                rows={5}
                                value={reviewText}
                                onChange={(e) => setReviewText(e.target.value)}
                                className="w-full border p-3 rounded-lg mb-3 outline-none"
                            />

                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="w-full border p-3 rounded-lg mb-3 outline-none"
                            />

                            {reviewerImg && (
                                <img
                                    src={reviewerImg}
                                    alt="Preview"
                                    className="h-20 w-20 rounded-full object-cover mx-auto"
                                />
                            )}

                            <select
                                value={rating}
                                required
                                onChange={(e) => setRating(Number(e.target.value))}
                                className="w-full border p-3 rounded-lg mb-3 outline-none"
                            >
                                <option value={5}>⭐⭐⭐⭐⭐</option>
                                <option value={4}>⭐⭐⭐⭐</option>
                                <option value={3}>⭐⭐⭐</option>
                                <option value={2}>⭐⭐</option>
                                <option value={1}>⭐</option>
                            </select>

                            <select
                                value={selectedImage}
                                required
                                onChange={(e) => setSelectedImage(e.target.value)}
                                className="w-full border p-3 rounded-lg mb-4 outline-none"
                            >
                                <option value="/images/newsLetter.png">Select Food Image</option>
                                <option value="/images/menu-item-1.png">Grilled Chicken</option>
                                <option value="/images/menu-item-3.png">Burger</option>
                                <option value="/images/menu-item-4.png">Chocolate Lava Cake</option>
                            </select>

                            <div className="flex gap-3">
                                <button
                                    onClick={handleSubmitReview}
                                    className="bg-[#D9A15B] border-2 border-[#D9A15B] text-white px-4 py-1 rounded-am w-[30%] cursor-pointer hover:bg-transparent 
                                    hover:text-[#D9A15B] transition-all duration-300 rounded-sm"
                                >
                                    Submit
                                </button>

                                <button
                                    onClick={() => setShowModal(false)}
                                    className="border px-4 py-2 rounded w-[30%]"
                                >
                                    Cancel
                                </button>
                            </div>

                        </div>
                    </div>
                </FadeUp>
            )}
            {/* Add New Review Modal End here */}


            {showEditModal && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg w-full max-w-md">
                        <h2 className="text-2xl font-bold mb-4"> Edit Review </h2>

                        <textarea
                            rows="5"
                            value={editedReview}
                            onChange={(e) =>
                                setEditedReview(e.target.value)
                            }
                            className="w-full border p-3 rounded-lg"/>

                        <div className="flex gap-3 mt-4">
                            <button
                                onClick={handleUpdateReview}
                                className="bg-[#D9A15B] text-white px-4 py-2 rounded">
                                Save
                            </button>

                            <button
                                onClick={() =>
                                    setShowEditModal(false)
                                }
                                className="border px-4 py-2 rounded">
                                Cancel
                            </button>

                        </div>
                    </div>
                </div>
            )}


        </div>
    )
}

export default Reviews;