import React from 'react';
import './SelectedCourse.css'
const SelectedCourses = ({ courses }) => {
   
    const { courseName, img, price,quantity} = courses
    return (

        <div className='flex w-[100%] border-2 rounded bg-[#d6d4d7] text-black'>
            <div className='w-14 my-auto'>
                <figure><img className=' w-full h-12' src={img} alt="" /></figure>

            </div>
            <div className='md:flex justify-between w-full md:w-[90%] ml-2 lg:mx-4 '>
                <div>
                    <h3 className='font-semibold '>{courseName}</h3> 
                </div>
                <div className='cardBody md:flex justify-between gap-3  lg:gap-10 '>
                    <p className='md:px-1'><span className='block-inline font-semibold  md:hidden'>Quantity :</span> {quantity}</p>
                    <p className=''><span className='block-inline font-semibold  md:hidden'>Price :</span>{price}</p>
                </div>

            </div>
        </div>
    );
};

export default SelectedCourses;