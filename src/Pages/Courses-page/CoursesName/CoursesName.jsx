import React, { useEffect, useState } from 'react';
import './CourseName.css'
import { Link, NavLink } from 'react-router-dom';
const CoursesName = ({course}) => {
    const {name,id} =course
    return (
        <div className=' course-name w-full  bg-[#202C45]'>
             <NavLink to={`/courses/${id}`} className={({isActive})=>isActive?"name text-red-400 ":""} >
            <button className='w-full btn'>{name}</button>
        </NavLink> 
        </div>
      
    );
};

export default CoursesName;