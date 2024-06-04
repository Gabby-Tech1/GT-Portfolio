import React from 'react'
import Me from '../Assets/About.jpg'
import { HashLink as Link } from 'react-router-hash-link';


const About = () => {
  return (
    <div className='my-6 mt-10 lg:my-16' id='about'>
        <h1 className='text-2xl sm:text-4xl lg:text-5xl text-white font-bold text-center'>KNOW MORE <span className='text-[#0ef]'>ABOUT ME</span> </h1>
        <div className='flex md:flex-row w-[90%] mx-auto gap-12 items-center flex-col-reverse mt-7'>
          <div className='md:my-5 my-2'>
            <p className='text-white md:text-2xl pt-3 text-lg '>
            Welcome to my digital playground! I'm Gabriel Kwame Addo Quainoo, a frontend developer, UI designer, and graphic designer with a passion for building bridges between creativity and technology. With a background in programming and a knack for problem-solving, I craft digital experiences that are both beautiful and functional. When I'm not coding or designing, you can find me exploring new design trends, experimenting with innovative technologies, or sipping coffee. Let's connect and create something amazing together!
            </p>
            <Link to='#contact'>
              <button className='bg-[#0ef] p-2 rounded-2xl my-3 font-semibold text-md md:my-4 px-4 hover:bg-transparent hover:text-[#0ef] hover:border border-[#0ef] duration-300 ease-linear '>Connect with me</button>
            </Link>
            
          </div>
          <img src={Me} alt="" className='rounded-3xl w-[350px] md:mr-16 shadow-xl'/>
        </div>
    </div>
  )
}

export default About