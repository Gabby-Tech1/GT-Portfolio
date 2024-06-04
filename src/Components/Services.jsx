import React from 'react'
import { FaCode } from "react-icons/fa6";
import { FiPenTool } from 'react-icons/fi';
import { TbDeviceMobileCode } from "react-icons/tb";



const Services = () => {
  return (
    <div id='services'>
        <h1 className='text-2xl md:text-4xl lg:text-5xl text-white font-bold text-center'>MY
         {' '}<span className='text-[#0ef]'>SERVICES</span></h1>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto items-center gap-12 mt-8 md:mt-16 text-black '>
            <div>
                <div className='bg-white hover:scale-110 transform transition-all duration-300 hover:-rotate-6 font-semibold text-center p-8'>
                <FaCode className='w-20 h-20 mx-auto text-black'/>
                <h1 className=' text-xl md:text-3xl my-6 '>Web Development</h1>
                <p className='text-gray-700'>
                    From concept to launch, I develop robust web applications that streamline processes, enhance user experience, and drive engagement. Also, I create mobile-friendly, intuitive interfaces that adapt seamlessly to various devices and screens, ensuring an exceptional user experience.
                </p>
                </div>
            </div>
            <div>
                <div className='bg-[#0ef] hover:scale-110 transform transition-all duration-300 font-semibold text-center p-8'>
                <TbDeviceMobileCode className='w-20 h-20 mx-auto text-black'/>
                <h1 className='text-xl md:text-3xl my-6'>Mobile Development</h1>
                <p className='text-gray-700'>
                I specialize in building high-performance, native mobile apps that utilize the latest platform features and technologies. Also, I design and develop tailored mobile applications that meet your unique business needs, leveraging cutting-edge technologies to create engaging, user-friendly, and scalable solutions.

                </p>
                </div>    
            </div>
            <div>
                <div className='bg-green-300 hover:scale-110 transform transition-all duration-300 hover:rotate-6 font-semibold text-center p-8'>
                <FiPenTool className='w-20 h-20 mx-auto text-black'/>
                <h1 className=' text-xl md:text-3xl my-6 '>UI/UX Design</h1>
                <p className='text-gray-700'>
                    I create intuitive, user-centered designs that drive engagement and conversion. I also craft intuitive interactions and animations that enhance user engagement and design visually stunning, responsive interfaces that delight users.
                    And finally, I refine designs based on user feedback and performance metrics.

                </p>
                </div>
            </div>

         </div>
    </div>
  )
}

export default Services