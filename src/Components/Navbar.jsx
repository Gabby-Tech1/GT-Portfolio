import React from 'react'
import { CgMenuRightAlt } from 'react-icons/cg'
import { HashLink as Link } from 'react-router-hash-link';



const Navbar = ({openNavbar}) => {
  return (
    <div className='w-[100vw] sticky top-0 h-[12vh] bg-[#141c27] shadow-md'>
        <div className='flex items-center justify-between w-[89%] mx-auto h-[100%]'>
            <h1 className='flex-[0.6] cursor-pointer text-3xl text-white font-bold'>
                Gabby
                <span className='text-[#0ef]'>TECH</span>.
            </h1>
            <div className='nav-link text-bold text-white hover:text-[#0ef]'><Link to='#' smooth>Home</Link></div>
                <div className='nav-link text-bold text-white hover:text-[#0ef]'><Link to='#about' smooth>About</Link></div>
                <div className='nav-link text-bold text-white hover:text-[#0ef]'><Link to='#services' smooth>Services</Link></div>
                <div className='nav-link text-bold text-white hover:text-[#0ef]'><Link to='#projects' smooth>Projects</Link></div>
                <div className='nav-link text-bold text-white hover:text-[#0ef]'><Link to='#testimonials' smooth>Testimonial</Link></div>
                <div className='nav-link text-bold text-white hover:text-[#0ef]'><Link to='#contact' smooth>Contact</Link></div>
                <div onClick={openNavbar}>
                <CgMenuRightAlt className='md:hidden text-5xl cursor-pointer text-[#0ef]' />
                </div>
        </div>
    </div>
  )
}

export default Navbar