import React, { useState } from 'react';
import './Home.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useLoaderData } from 'react-router-dom';
import SingleCourse from '../Courses-page/SingleCourse/SingleCourse';
const Home = () => {
    const courses = useLoaderData()
    const [show, setShow] = useState(false)
    const sliceCourse = courses.slice(0, 4)
    console.log(courses)
    return (
        <div>
            <Navbar />
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="hero " style={{ backgroundImage: `url("/src/assets/homeBgPic.jpg")` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl md:text-8xl font-bold">Education</h1>
                                <h1 className="mb-5 text-3xl md:text-5xl font-bold">Education For EveryOne</h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="hero min-h-screen" style={{ backgroundImage: `url("/src/assets/homeBgImg2.avif")` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="  text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl md:text-8xl font-bold">Best Education</h1>
                                <h1 className="mb-5 text-3xl md:text-5xl font-bold">For Your Future</h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="hero min-h-screen" style={{ backgroundImage: `url("/src/assets/homeBgImg3.jpg")` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-3xl md:text-5xl font-bold">Hello there</h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                {/* <div className="flex  justify-center text-red-500 absolute text-3xl top-[99%] w-full py-2 gap-2">
                    <a href="#slide1" className="btn btn-xs">1</a>
                    <a href="#slide2" className="btn btn-xs">2</a>
                    <a href="#slide3" className="btn btn-xs">3</a>
                </div> */}
            </div>
            <div className={`my-5`}>
                <h2 className='text-3xl font-semibold w-[90%] mx-auto'>Available Courses :</h2> <hr className='my-3 ' />
                {
                    show ?
                        <div className={`grid grid-cols-3 gap-5 w-[90%] mx-auto`}>
                            {courses.map(course => <SingleCourse key={course.id} course={course} />)}
                        </div>
                        :
                        <div className={`grid grid-cols-4 gap-4 w-[97%] mx-auto  `}>
                            {
                                sliceCourse.map(course => <SingleCourse key={course.id} course={course} />)
                            }
                        </div>
                }
                <div className='text-center my-5'>
                    {show ? <button onClick={() => setShow(!show)} className='btn hover:bg-[#202c45] hover:text-white'>See Less</button>
                        :
                        <button onClick={() => setShow(!show)} className='btn hover:bg-[#202c45] hover:text-white'>See more...</button>
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;