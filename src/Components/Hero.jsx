import React from 'react'
import TypeEffect from './TypeEffect'
import { FaDownload } from "react-icons/fa6";
import Pic from "../Assets/image.png"


const Hero = () => {
    const handleCVDownload = () => {
        // Replace 'path_to_cv.pdf' with the actual path to your CV file
        const downloadUrl = 'path_to_cv.pdf';
        // Initiate the download
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.setAttribute('download', 'your_cv.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };


  return (
    <div className='h-[88vh] bg-cover bg-center mb-4 mt-2'>
      <div className='w-[88%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-12 h-full items-center'>
        <div className='flex flex-col '>
            <h1 className='text-white text-4xl md:text-5xl font-bold'>Hello everyone, I'm <span className='text-[#0ef]'>Gabriel Kwame Addo Quainooo</span>, </h1>
            <p className='text-white text-2xl md:text-3xl font-medium pt-2'>A Very Passionate <TypeEffect/></p>
            <p className='text-gray-400 text-md py-2'>
              Step into my world of digital wonder, where imaginations knows no bounds and the latest technologies meet timeless design principles, and let's collaborate to create something truly remarkable, a fusion of craetivity, innovation, and technical expertise.
            </p>
            <button onClick={handleCVDownload} className='px-6 py-1 text-[#0ef] border-2 border-[#0ef] w-fit text-xl rounded-lg hover:text-white hover:bg-[#0ef] duration-500 hover:scale-105 ease-linear flex gap-2 my-1'>Download CV <FaDownload/>
            </button>
        </div>
        <div className='w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] bg-[#0ef] relative lg:flex items-center md:h-[500px] order-first lg:order-last mt-4 mx-auto'>
            <img src={Pic} alt="hero image" className='object-cover md:w-[500px] md:h-[500px] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]' />
        </div>
        
      </div>
    </div>
  )
}

export default Hero