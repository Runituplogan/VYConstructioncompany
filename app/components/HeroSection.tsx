import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
  return (
    <div className=' flex flex-col items-center  gap-4 lg:gap-7 mt-8 lg:px-44  justify-center text-center container'>
        <p className='flex flex-row items-center text-xs font-bricolage p-2 gap-2 bg-[#056FC54D] rounded-lg text-[#056FC5] '>
            <Image src="/fig.png" alt="hero" width={20} height={10} />
        Welcome to VY Construction
        </p>
        <h1 className="lg:text-7xl md:text-5xl text-3xl text-[#032759] font-bricolage  font-bold">General Contractor in East Bay <span className='text-[#056FC5]'>California</span></h1>
      <p className='lg:text-4xl text-[#757575] '>Serving Homeowners, HOA&apos;s, Property Management Companies and Commercial Properties.</p> 
<form className='lg:w-3/4 w-full'>   
    <div className="relative w- ">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        </div>
        <input type="search" id="search" className="  w-full p-4  text-sm text-gray-900  border-gray-300 rounded-lg" placeholder="Enter your Phone Number" required />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs md:text-sm md:px-4 px-2 py-2 ">Get Free Estimate</button>
    </div>
</form>

<div className='lg:w-[70rem] w-full'>

<Image 
  src="/hero.png" 
  alt="hero" 
  width={1920} 
  height={300} 
  quality={100} 
  className="object-cover" 
  
/>
</div>

      </div>
  );
}

export default HeroSection;
