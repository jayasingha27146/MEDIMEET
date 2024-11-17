import React from 'react'
import { assets } from '../assets/assets'

const about = () => {
  return (
    <div>
        <div className='text-center text-3xl pt-10 font-medium text-primary'>
          <p>ABOUT <span>OUR </span> SERVICES</p>
        </div>

        <div className='my-10 flex flex-col md:flex-row gap-12'>
              <img className='w-auto md:max-w-[360px]' src={assets.about_image} alt='' />
            

        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-base text-gray-600'>
          <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
          <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
          <b className='text-primary text-2xl'>Our Vision</b>
          <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>
        </div>   
           


    </div>
  )
}

export default about