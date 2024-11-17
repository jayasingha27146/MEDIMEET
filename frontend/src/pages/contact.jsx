import React from 'react'
import { assets } from '../assets/assets'

const contact = () => {
  return (
    <div>
        <div className='text-center text-3xl pt-10 text-primary font-medium'>
          <h1>FEEL FREE TO CONTACT US</h1>
        </div>

      <div className='my-14 flex flex-col justify-center md:flex-row gap-36 mb-28 text-sm'>
        <img className='w-full md:max-w-[520px]' src={assets.contact_image} alt='' />
      
        
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-medium text-2xl text-primary'>Our Main Branch</p>
          <p className='text-gray-600 text-base'>27/35/E,<br />Pitipana,Homagama,Colombo7</p>
          <p className='text-gray-600 text-base'>Tel: +947065896322 <br />MediMeetchanel@gmail.com</p>
          <p className='font-medium text-2xl text-primary'>Get For More Details</p>
          <p className='text-gray-600 text-base'>Learn more about our teams and Our Services.</p>
          <button className='border border-primary px-8 py-3 text-base hover:bg-primary hover:text-white transition-all duration-500'>More Details</button>
        </div>
        </div>


    </div>
  )
}

export default contact