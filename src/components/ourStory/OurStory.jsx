import { Link } from "react-router-dom";
import { LuLeaf, LuChefHat } from "react-icons/lu";
import { RxPeople } from "react-icons/rx";

const OurStory = () => {
  return (
    <div className='w-full bg-[#f7f3ee] py-20 px-5 lg:px-10 xl:px-20 xl:py-15 flex flex-col gap-15 lg:flex-row lg:gap-10'>
      {/* div-1 start here */}
      <div className='w-full lg:w-[30%] text-center lg:text-start'>
        <h1 className='text-5xl font-semibold text-[#1d1511]'>Our Story</h1>
        <p className='text-[#797370] my-5'>
            The Corner Kitchen is a cozy neighborhood restaurant that believes in honest food, warm hospitality, and creating memorable moments for every guest.
        </p>
        <Link to="/learn">
          <button className='bg-[#2e392c] py-2 px-5 text-white rounded-sm border-2 border-[#2e392c] hover:bg-transparent transition-all duration-300 
          hover:text-[#2e392c] cursor-pointer'>
              Learn More About Us
          </button>
        </Link>
      </div>
      {/* div-1 end here */}



      {/* div-2 start here */}
      <div className='w-full lg:w-[70%] flex flex-col gap-15 md:flex-row lg:gap-10 items-center xl:justify-center'>

        <div className='2xl:w-[20%] flex flex-col items-center text-center'>
            <LuLeaf className='xl:text-4xl text-2xl h-15 w-15 p-3 bg-[#f1e6d8] rounded-full'/>
            <h1 className='my-2 xl:text-2xl text-xl font-semibold'>Fresh Ingredients</h1>
            <p className='lg:text-lg text-sm'>We use locally sourced, fresh ingradients in everything we make.</p>
        </div>

        <div className='2xl:w-[20%] flex flex-col items-center text-center'>
            <LuChefHat className='xl:text-4xl text-2xl h-15 w-15 p-3 bg-[#f1e6d8] rounded-full' />
            <h1 className='my-2 xl:text-2xl text-xl font-semibold'>Made With Love</h1>
            <p className='lg:text-lg text-sm'>every dish is prepared with care and passion in our kitchen.</p>
        </div>

        <div className='2xl:w-[20%] flex flex-col items-center text-center'> 
            <RxPeople className='xl:text-4xl text-2xl h-15 w-15 p-3 bg-[#f1e6d8] rounded-full' />
            <h1 className='my-2 xl:text-2xl text-xl font-semibold'>Cozzy Atmosphere</h1>
            <p className='lg:text-lg text-sm'>A warm and welcoming space for you to relax and enjoy.</p>
        </div>

      </div>
      {/* div-2 end here */}
    </div>
  )
}

export default OurStory
