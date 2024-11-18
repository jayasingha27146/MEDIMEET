import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/*........left section.....*/}
        <div>
          <img className='mb-4 w-40' src={assets.logo} alt='' />
          <p className='w-full md:w-2/3 text-gray-600 leading-5'>MediMeet is a user-friendly doctor appointment booking website designed to simplify healthcare access. It allows patients to find doctors by specialty, location, or 
            availability and schedule appointments seamlessly. With features like real-time availability, appointment reminders, and secure patient-doctor communication, MediMeet bridges the gap between healthcare providers and patients, ensuring a hassle-free experience.</p>
        </div>
        {/*........center section.....*/}
        <div>
          
        <p className='text-xl font-medium mb-5 text-primary'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600' >
            
            <li><a href="/">Home</a></li>
            <li><a href="/about">About us</a></li>
            <li><a href="/contact">Contact us</a></li>
            <li><a href="">Privacy Policy</a></li>
          </ul>
        </div>
        {/*........Right section.....*/}  
        <div>
          <p className='text-xl font-medium mb-5 text-primary'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-700'>
            <li>+94706589632</li>
            <li>MediMeetchanel@gmail.com</li>
          </ul>
        </div>
    </div>
    <div>
          <hr/>
          <p className='py-5 text-sm text-center'>
          Copyright 2024@MediMeet - All Rights Reserved
          </p>
        </div>
    </div>
  )
}

export default Footer