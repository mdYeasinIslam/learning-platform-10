import React from 'react';
import { Link } from 'react-router-dom';

const SingleCourse = ({ course }) => {
    const { name, img, details,id } = course
    return (

        <div className="card card-compact  w-full bg-base-100 shadow-xl">
            <figure><img className='w-[100%] h-[18rem] md:h-[16rem] lg:h-[12rem] ' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details.slice(0, 50) + '...'}</p>
                <div className="card-actions">
                    <Link to={`/courses/${id}`} className='btn btn-primary w-full'>Details</Link>
                </div>
            </div>
        </div>

    );
};

export default SingleCourse;