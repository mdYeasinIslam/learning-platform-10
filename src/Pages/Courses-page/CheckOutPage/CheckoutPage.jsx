import React, { useEffect, useState } from 'react';
import SelectedCourses from "./SelectCourses/SelectedCourses";
import ShippingDetails from './ShippingDetails/ShippingDetails';
const CheckoutPage = () => {
    const [courseData, setCourseData] = useState([])
    const [time,setTime] = useState(new Date().getTime())
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('cart'))
        setCourseData(data)
       
    }, [time])
    const priceCalculate = courseData.reduce((acc, cur) => acc += parseInt(cur.price), 0)
    const totalAmount = priceCalculate + 50

    return (
        <div className='grid md:grid-cols-4 '>

            <div className='col-span-2 w-[96%] md:w-[80%] h-[70%] mx-auto '>
                <h3 className='md:text-xl  font-semibold bg-[#d6d4d7] p-3 rounded-xl my-3'>Your orders :</h3>
                <hr />
                <p className='hidden md:block'>
                    <span className='w-[100%] flex md:justify-between lg:justify-normal lg:gap-[16%] pt-3 font-semibold'>
                        <span>Image</span>
                        <span>Course-Name</span>
                        <span>Quantity</span>
                        <span>Price</span>
                    </span>
                </p>
                <div className='space-y-4 border-2 shadow-xl'>
                    {
                        courseData.map(courses => <SelectedCourses key={courses.id} setTime={setTime} courses={courses} />)
                    }
                </div>
                <div className='w-[90%] mx-auto font-semibold my-5 border-2 shadow-xl '>
                    <p className='flex justify-between'>
                        <span> SubTotal : </span>
                        <span>{priceCalculate}$ </span>

                    </p>
                    <p className='flex justify-between'>
                        <span> Shipping :</span>
                        <span> 50$</span>
                    </p>
                    <p className='flex justify-between'>
                        <span> Total  :</span>
                        <span> {totalAmount}$</span>
                    </p>
                </div>
            </div>
            <div className='col-span-2'>
                <ShippingDetails />
            </div>
        </div>
    );
};

export { CheckoutPage };