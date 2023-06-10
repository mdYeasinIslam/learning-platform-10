import React, { useState } from 'react';
import './Home.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useLoaderData } from 'react-router-dom';
import SingleCourse from '../Courses-page/SingleCourse/SingleCourse';
import CarouselSlider from './caurosolItem/CarouselSlider';
const Home = () => {
    const courses = useLoaderData()
    const [show, setShow] = useState(false)
    const sliceCourse = courses.slice(0, 4)
    return (
        <div className='home-page'>
            <Navbar />
            <CarouselSlider/>
            <div className={`my-5`}>
                <h2 className='text-3xl font-semibold w-[90%] mx-auto'>Available Courses :</h2> <hr className='my-3 ' />
                {
                    show ?
                        <div className={`grid grid-cols-1 md:grid-cols-3 gap-5 w-[90%] mx-auto`}>
                            {courses.map(course => <SingleCourse key={course.id} course={course} />)}
                        </div>
                        :
                        <div className={`grid md:grid-cols-3 lg:grid-cols-4 gap-4 w-[97%] mx-auto  `}>
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
    ) }


export default Home;