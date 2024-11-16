import React from 'react'
import { assets } from '../assets/assets'

const Headers = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
        {/*--------left side--------*/}
        <div className='md:w-1/2 flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
           <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
           Schedule a Consultation <br/>With Trusted Healthcare Professionals 
           </p>

           <div className='flex flex-col py-4 md:flex-row items-center gap-3 text-white text-sm font-light'>
            
            <p>Easily Explore Our Network of Trusted Doctors and Book <br className='hidden sm:block' /> Your Appointment with Confidence.
            </p>
           </div>
           <div className="py-4">
          <a href="speciality" className="flex items-center gap-2 bg-white px-6 py-3 rounded-full text-gray-600 text-sm md:text-sm w-fit md:w-fit hover:scale-110 transition-all duration-200">
            Book Appointment
           <img className="w-3 md:w-4" src={assets.arrow_icon} alt="" />
            </a>
         </div>
         </div>
        
        
        {/*--------right side--------*/}
        <div className='md:w-1/2 relative'>
           <img className='w-full md:absolute bottom-0 h-auto rounded-lg'	src={assets.header_img} alt='' />
        </div>
</div>
  )
}

export default Headers