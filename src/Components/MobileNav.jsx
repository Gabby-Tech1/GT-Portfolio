import React, {useState} from 'react'
import { IoIosCloseCircle } from "react-icons/io";
import { HashLink as Link } from 'react-router-hash-link';



const MobileNav = ({navbar, closeNavbar}) => {

  const [isNavOpen, setIsNavOpen] = useState(false);

    const navAnimate = navbar?'translate-x-0':'translate-y-[-100%]'

    const handleNavLinkClick = () => {
      setIsNavOpen(false);
    };

  return (
    <div className={`fixed ${navAnimate} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[100] bg-[#09101a]`}>
      <div className='w-full h-full flex flex-col items-center justify-center'>
        <div className='nav-link-mobile text-bold text-white hover:text-[#0ef]'><Link to='#' onClick={handleNavLinkClick} smooth>Home</Link></div>
        <div className='nav-link-mobile text-bold text-white hover:text-[#0ef]'><Link to='#about' onClick={handleNavLinkClick} smooth>About</Link></div>
        <div className='nav-link-mobile text-bold text-white hover:text-[#0ef]'><Link to='#services' onClick={handleNavLinkClick} smooth>Services</Link></div>
        <div className='nav-link-mobile text-bold text-white hover:text-[#0ef]'><Link to='#projects' onClick={handleNavLinkClick} smooth>Projects</Link></div>
        <div className='nav-link-mobile text-bold text-white hover:text-[#0ef]'><Link to='#testimonials' onClick={handleNavLinkClick} smooth>Testimonial</Link></div>
        <div className='nav-link-mobile text-bold text-white hover:text-[#0ef]'><Link to='#contact' onClick={handleNavLinkClick} smooth>Contact</Link></div>
      </div>
      <div onClick={closeNavbar} className='absolute cursor-pointer top-8 right-8 text-5xl text-[#0ef]'>
      <IoIosCloseCircle />
      </div>
    </div>
  )
}

export default MobileNav