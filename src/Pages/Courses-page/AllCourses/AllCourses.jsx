import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesName from '../CoursesName/CoursesName';
import SingleCourse from '../SingleCourse/SingleCourse';

const AllCourses = () => {
    const courseName = useLoaderData()
    return (
        <div className='md:grid space-y-5 md:space-y-0  grid-cols-4 mt-10'>
            <div className=' md:col-span-2 lg:col-span-1 font-serif bg-[#202c45] text-[#202c45]   md:ml-4  rounded-3xl '>
                    <h3 className='text-2xl py-5 w-[90%] mx-auto text-[#d98298]'>Course List :</h3>
                <div className='  space-y-4 w-[90%] mx-auto'>
                    {
                        courseName.map(course => <CoursesName key={course.id} course={course} />)
                    }
                </div>
            </div>
            <div className='md:col-span-2 lg:col-span-3 grid  md:grid-cols-1 lg:grid-cols-3 md:gap-4 space-y-5 md:space-y-0  w-full px-3'>
                {
                    courseName.map(course => <SingleCourse key={course.id} course={course} />)
                }
            </div>
        </div>
    );
};

export default AllCourses;