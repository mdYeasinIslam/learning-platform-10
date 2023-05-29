import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Sign-IN/Login';
import SignUp from '../Pages/Sign-UP/SignUp';
import AllCourses from '../Pages/Courses-page/AllCourses/AllCourses';
import Faq from '../Pages/FAQ/FAQ';
import Blog from '../Pages/Blog/Blog';

const Root = () => {
    const router = createBrowserRouter([
        {
            path:'/',element:<Main/>,children:[
                {
                    path:'/home',element:<Home/>
                },
                {
                    path:'/courses',element:<AllCourses/>
                },
                {
                    path:'/faq',element:<Faq/>
                },
                {
                    path:'/blog',element:<Blog/>
                },
                {
                    path:'/logIn',element:<Login/>
                },
                {
                    path:'/signUp',element:<SignUp/>
                }
            ]
        }
    ])
    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    );
};

export default Root;