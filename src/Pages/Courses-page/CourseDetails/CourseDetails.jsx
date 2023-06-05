import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Details from './Details/Details';
import CoursesName from '../CoursesName/CoursesName';

const CourseDetails = () => {
    const [courses, setCourses] = useState([])
    const courseDetails = useLoaderData()
    useEffect(() => {
        fetch(`http://localhost:5000/courseName`)
            .then(res => res.json()).then(data => setCourses(data))
    }, [])
    return (
        <div className='grid md:grid-cols-4 mt-10'>
            <div className=' md:col-span-2 lg:col-span-1 md:ml-4  font-serif bg-[#202c45] text-[#202c45] pt-5  rounded-3xl '>
                <h3 className='w-[90%] mx-auto text-2xl pb-5 text-[#d98298]'>Course List :</h3>
                <div className='grid gap-4 w-[90%] mx-auto'>

                    {
                        courses.map(course => <CoursesName key={course.id} course={course} />)
                    }
                </div>
            </div>
            <div className='md:col-span-3'>
                {
                    courseDetails.map(details => <Details key={details._id} details={details} />)
                }
            </div>

        </div>
    );
};

export default CourseDetails;