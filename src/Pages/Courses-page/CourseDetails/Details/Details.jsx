import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { BsDownload } from "react-icons/bs";
import Pdf from 'react-to-pdf'

const Details = ({ details }) => {
    const ref = useRef()
    const { courseName, img, title, _id,price, courseDetails } = details
    return (
        <div className='font-[cursive] '>
            <div className="card card-compact w-[80%]  mx-auto bg-base-100 shadow-xl">
                <div className='flex justify-between mx-5 '>
                    <h1 className='text-3xl text-[#202c45] w-[80%] mb-5 font-semibold  '>Course Details :{title}</h1>
                    <Pdf targetRef={ref} fileName="course-Name.pdf">
                        {({ toPdf }) => <BsDownload onClick={toPdf} className='h-6 w-6' />}
                    </Pdf>
                </div>
                <div ref={ref}>
                    <figure><img className='w-[100%] lg:h-[30rem]' src={img} alt={courseName} /></figure>
                    <div className="card-body">
                        <h2 className="card-title md:pb-5 text-2xl">{courseName}</h2>
                        <p className='text-xl'><span className='text-[#F2184F]'>Price</span> :{price}</p>
                        <p>{courseDetails}</p>
                        <div className="card-actions">
                            <Link className='btn btn-primary w-full'>Get Premium Access</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;