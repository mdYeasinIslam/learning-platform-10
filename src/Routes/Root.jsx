import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Sign-IN/Login';
import SignUp from '../Pages/Sign-UP/SignUp';
import AllCourses from '../Pages/Courses-page/AllCourses/AllCourses';
import Faq from '../Pages/FAQ/FAQ';
import Blog from '../Pages/Blog/Blog';
import SecondaryLayout from '../Layout/SecondaryLayout';
import PrivateRoute from './PrivateRoute';
import CourseDetails from '../Pages/Courses-page/CourseDetails/CourseDetails';
import { CheckoutPage } from '../Pages/Courses-page/CheckOutPage/CheckoutPage';

const Root = () => {
    const router = createBrowserRouter([
        {
            path: '/', element: <Main />, children: [
                {
                    path: '/',
                    loader:()=>{
                        return fetch(`https://clever-yak-sari.cyclic.app/courseName`)
                    },
                    element: <Home />
                },
                {
                    path: '/home',
                    loader:()=>{
                        return fetch(`https://clever-yak-sari.cyclic.app/courseName`)
                    },
                    element: <Home />
                },
            ],
        },
        {
            path: '/', element: <SecondaryLayout />, children: [

                {
                    path: '/courses',
                    loader: () => {
                        return fetch(`https://clever-yak-sari.cyclic.app/courseName`)
                    },
                    element: <AllCourses />
                },
                {
                    path: '/courses/:id',
                    loader: ({ params }) => fetch(`https://clever-yak-sari.cyclic.app/courseName/${params.id}`),
                    element: <CourseDetails />
                },
                {
                    path: '/courses/checkout-page/:id',
                    loader: ({ params }) => {
                        return fetch(`https://clever-yak-sari.cyclic.app/courseName/${params.id}`)
                    },
                    element: <PrivateRoute><CheckoutPage /></PrivateRoute>
                },
                {
                    path: '/faq', element: <PrivateRoute><Faq /></PrivateRoute>
                },
                {
                    path: '/blog', element: <Blog />
                },
                {
                    path: '/logIn', element: <Login />
                },
                {
                    path: '/signUp', element: <SignUp />
                }
            ]
        }
    ])
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
};

export default Root;