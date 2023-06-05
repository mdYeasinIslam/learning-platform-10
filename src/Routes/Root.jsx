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

const Root = () => {
    const router = createBrowserRouter([
        {
            path: '/', element: <Main />, children: [
                {
                    path: '/', element: <Home />
                },
                {
                    path: '/home', element: <Home />
                },
            ],
        },
        {
            path: '/', element: <SecondaryLayout />, children: [
              
                {
                    path: '/courses',
                    loader:()=>{
                        return  fetch(`http://localhost:5000/courseName`)
                    },
                    element: <AllCourses />
                },
                {
                    path:'/courses/:id',
                    loader:({params})=>fetch(`http://localhost:5000/courseName/${params.id}`),
                    element:<CourseDetails/>
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