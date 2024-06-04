import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const Testimonial = () => {
  return (
    <>
    
    <h1 className='text-2xl md:text-4xl mt-24 mb-10 lg:text-5xl text-white font-bold text-center uppercase' id='testimonials'>Testimonials From {' '}<span className='text-[#0ef]'>Clients</span></h1>
        <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
            768: {
              slidesPerView: 3,
            },
          }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className='w-[80%] md:w-[80%] mx-auto flex flex-col md:flex-row'
        >
            <SwiperSlide className='border-[#0ef] md:flex items-center  gap-2 px-4 py-2 rounded-md bg-transparent border flex-col text-white'>
                <div className="flex flex-row items-center gap-5 p-2">
                    <div className="w-20 ">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt='avatar' className='rounded-3xl w-20'/>
                    </div>
                    <div className='flex flex-col '>
                        <p className='text-xl font-bold'>Nana A. Agyapong</p>
                        <p className='text-gray-300'>CEO of Melcom Online</p>
                    </div>
                    
                </div>
                <p>
                     His expertise in modern web technologies has improved our online sales and customer engagement.
                </p>
            </SwiperSlide>
            <SwiperSlide className='border-[#0ef] md:flex items-center  gap-2 px-4 py-2 rounded-md bg-transparent border flex-col text-white'>
                <div className="flex flex-row items-center gap-5 p-2">
                    <div className="w-20 ">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"    alt='avatar'      className='rounded-3xl'/>
                    </div>
                    <div className='flex flex-col '>
                        <p className='text-xl font-bold'>Derrick K.</p>
                        <p className='text-gray-300'>Founder of ABC Startups</p>
                    </div>
                    
                </div>
                <p>
                    Working with Gabby Tech was a pleasure. He is a skilled professional who listens to your needs and delivers high quality solutions.
                </p>
            </SwiperSlide>
            <SwiperSlide className='border-[#0ef] md:flex items-center  gap-2 px-4 py-2 rounded-md bg-transparent border flex-col text-white'>
                <div className="flex flex-row items-center gap-5 p-2">
                    <div className="w-20 ">
                        <img alt='avatar' src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className='rounded-3xl'/>
                    </div>
                    <div className='flex flex-col '>
                        <p className='text-xl font-bold'>Roman L.</p>
                        <p className='text-gray-300'>Marketing Manager at DEF Agency</p>
                    </div>
                    
                </div>
                <p>
                    Gabby Tech's innovative approach to digital marketing has helped us increase our online presence and drive more
                </p>
            </SwiperSlide>
            <SwiperSlide className='border-[#0ef] md:flex items-center  gap-2 px-4 py-2 rounded-md bg-transparent border flex-col text-white'>
                <div className="flex flex-row items-center gap-5 p-2">
                    <div className="w-20 ">
                        <img alt='avatar' src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className='rounded-3xl'/>
                    </div>
                    <div className='flex flex-col '>
                        <p className='text-xl font-bold'>George B.</p>
                        <p className='text-gray-300'>Project Manager at JKL Studios</p>
                    </div>
                    
                </div>
                <p>
                    Gabby Tech's team is highly responsive and efficient. They have helped us streamline our project management
                </p>
            </SwiperSlide>
            <SwiperSlide className='border-[#0ef] md:flex items-center  gap-2 px-4 py-2 rounded-md bg-transparent border flex-col text-white'>
                <div className="flex flex-row items-center gap-5 p-2">
                    <div className="w-20 ">
                        <img alt='avatar' src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className='rounded-3xl'/>
                    </div>
                    <div className='flex flex-col '>
                        <p className='text-xl font-bold'>Gabriel Q.</p>
                        <p className='text-gray-300'>Founder of Gabby Tech Hub</p>
                    </div>
                    
                </div>
                <p>
                    Our goal is to provide innovative solutions that meet the needs of our clients. We strive to deliver the best solutions for you.
                </p>
            </SwiperSlide>          
            ...
        </Swiper>
    </>
    
  )
}

export default Testimonial