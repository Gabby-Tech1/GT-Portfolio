import Navbar from '../src/Components/Navbar'
import MobileNav from '../src/Components/MobileNav'
import Hero from '../src/Components/Hero'
import React, { useState } from 'react'
import About from '../src/Components/About'
import Services from '../src/Components/Services'
import Skills from '../src/Components/Skills'
import Projects from '../src/Components/Projects'
import Testimonial from '../src/Components/Testimonial'
import Contact from '../src/Components/Contact'
import Footer from '../src/Components/Footer'
import { BrowserRouter } from 'react-router-dom'


const Home = () => {

  const [navbar, setNavbar] = useState(false)
  const openNavbar = () => setNavbar(true)
  const closeNavbar = () => setNavbar(false)

  return (
    <div className='overflow-x-hidden'>
      <BrowserRouter>
        <MobileNav navbar={navbar} closeNavbar={closeNavbar}/>
        <Navbar openNavbar={openNavbar}/>
        <Hero/>
        <About/>
        <Services/>
        <Skills/>
        <Projects/>
        <Testimonial/>
        <Contact/>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default Home