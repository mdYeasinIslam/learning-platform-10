import React from 'react';
import './Carousel.css'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
const CarouselSlider = () => {
    var settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",

    };

    return (
        <div className=' slider-style'>
            <Slider className='font-[cursive]' {...settings}>
                <div>
                    <img src="/src/assets/photo-1.jpg" />
                    <div className='absolute w-full md:w-[60%]  text-white top-[7%] md:top-[15%] left-[4%] md:left-[20%]'>
                        <h1 className='upercase mb-2 text-4xl md:text-6xl font-semibold text-red-300'>Education</h1>
                        <h3 className='upercase text-3xl font-semibold mb-5'>Education for everyone</h3>
                        <p className="w-[96%] " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos pariatur. Lorem ipsum dolor sit amet consectetur.</p>
                        <Link to='/courses' className=' z-[1] btn relative hover:bg-[#f2184f] hover:text-white my-6  md:top-[15%] '>Get Started</Link>
                    </div>
                </div>
                <div>
                    <img src="/src/assets/photo-2.jpg" />
                    <div className='absolute  md::w-[60%] text-white top-[7%] md:top-[15%] left-[4%] md:left-[20%]'>
                        <h1 className='upercase mb-2 text-4xl md:text-6xl font-semibold text-red-300'>Best education </h1>
                        <h3 className='upercase text-3xl font-semibold mb-5'>For your better future</h3>
                        <p className="w-[96%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos pariatur.sfaag</p>
                        <Link to='/courses' className='z-[1] btn  relative  hover:bg-[#f2184f]  hover:text-white my-6  md:top-[15%] '>Get Started
                        </Link>

                    </div>
                </div>
                <div>
                    <img src="/src/assets/Photo-3.png" />
                    <div className='absolute md:w-[60%] text-white top-[7%] md:top-[15%] left-[4%] md:left-[20%]'>
                        <h1 className='upercase mb-2 text-5xl md:text-6xl font-semibold text-red-300'>Study Area</h1>
                        <h3 className='upercase text-3xl font-semibold mb-5'>Learn for success</h3>
                        <p className="w-[96%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos pariatur. Lorem ipsum dolor sit amet.</p>
                        <Link to='/courses' className='btn z-[1] hover:bg-[#f2184f] hover:text-white my-6  md:top-[15%]'>Get Started
                        </Link>
                    </div>


                </div>
            </Slider>
        </div>
    );
};

export default CarouselSlider;