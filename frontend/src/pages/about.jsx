import React from 'react'
import { assets } from '../assets/assets'

const about = () => {
  return (
    <div>
        <div className='text-center text-3xl pt-10 font-semibold text-primary'>
          <p>ABOUT <span>OUR </span> SERVICES</p>
        </div>

        <div className='my-10 flex flex-col md:flex-row gap-12'>
              <img className='w-auto md:max-w-[360px]' src={assets.about_image} alt='' />
            

        <div className='flex flex-col justify-center gap-6 md:w-2/3 text-base text-gray-700'>
          <p>Welcome to MediMeet, your trusted partner in simplifying healthcare management. At MediMeet, we understand the challenges individuals face when it comes to scheduling doctor appointments and keeping track of health records. Our mission is to make healthcare accessible, convenient, and stress-free for everyone.</p>
          <p>MediMeet is dedicated to excellence in healthcare technology. We are constantly evolving our platform, integrating the latest innovations to enhance user experience and provide top-tier service. Whether you’re scheduling your first appointment or managing ongoing care, MediMeet is here to support you at every step of your healthcare journey.</p>
          
          <b className='text-primary font-medium text-2xl'>Our Vision</b>
          <p>Our vision at MediMeet is to create a seamless healthcare experience for every user. We strive to bridge the gap between patients and healthcare providers, ensuring you can access the care you need, whenever you need it, with ease and confidence.</p>
        </div>
        </div>   
           


    </div>
  )
}

export default about