import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import { AuthProvider } from '../../Context/UserContext';
import { toast } from 'react-toastify';
import { AiOutlineMenuFold } from "react-icons/ai";
import { RxCross2,RxAvatar } from "react-icons/rx";
const Navbar = () => {
    const [show, setShow] = useState(false)
    const [profile, setProfile] = useState(false)
    const { user, logOutAuth } = useContext(AuthProvider)
    const logOutHandler = () => {
        logOutAuth()
            .then(() => {
                toast('you are successfully logOut', {
                    position: toast.POSITION.TOP_CENTER
                })
            })
            .catch(e => console.error(e))
    }

    return (

        <div className="navbar  bg-[#202c45] text-white">
            <div className="dropdown dropdown-end block md:hidden">
                <div onClick={() => setShow(!show)} >
                    {
                        show ? <RxCross2 className='h-6 w-6' /> : <AiOutlineMenuFold className='h-6 w-6' />
                    }
                </div>
                <ul onClick={() => setShow(false)} className={`menu-list absolute z-[1] w-[10rem] opacity-1 ${show ? " grid top-14 bg-[#202c45] text-white p-4 rounded-xl gap-3 font-serif" : "hidden"}`} >
                    <NavLink className={({ isActive }) => isActive ? "after-active bg-[red]" : ""} to='/home'>Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "after-active" : ""} to='/courses'>Courses</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "after-active" : ""} to='/faq'>FAQ</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "after-active" : ""} to='/blog'>Blog</NavLink>
                    {
                        user?.uid ?
                            <NavLink className={({ isActive }) => isActive ? "after-active" : ""} onClick={logOutHandler} to='/logIn'>Log Out</NavLink>
                            :
                            <>
                                <NavLink className={({ isActive }) => isActive ? "after-active" : ""} to='/logIn'>Log In</NavLink>
                                <NavLink className={({ isActive }) => isActive ? "after-active" : ""} to='/signUp'>Sign Up</NavLink>
                            </>
                    }
                </ul>
            </div>

            <div className="flex-1">
                <img className='h-9 w-12 ml-5' src="assets/images (1).jpeg" alt="" />
                <NavLink to='/home' className="btn btn-ghost text-[#F2184F] normal-case text-xl">StudyPress</NavLink>
            </div>

            <div className=' text-white  hidden md:block items-center  mr-5 '>
                <ul className='menu-list-2 flex gap-12'>
                    <NavLink className={({ isActive }) => isActive ? "after-active" : ""} to='/home'>Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "after-active" : ""} to='/courses'>Courses</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "after-active" : ""} to='/faq'>FAQ</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "after-active" : ""} to='/blog'>Blog</NavLink>
                    {
                        user?.uid ?
                            <NavLink className={({ isActive }) => isActive ? "after-active" : ""} onClick={logOutHandler} to='/logIn'>Log Out</NavLink>
                            :
                            <>
                                <NavLink className={({ isActive }) => isActive ? "after-active" : ""} to='/logIn'>Log In</NavLink>
                                <NavLink className={({ isActive }) => isActive ? "after-active" : ""} to='/signUp'>Sign Up</NavLink>
                            </>
                    }
                </ul>
            </div>
            <div className="flex-none">
                
                <div className="dropdown dropdown-end">
                    <div onClick={() => setProfile(!profile)} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {
                                user?.photoURL== null ?<img src={user?.photoURL} />:<RxAvatar className='w-7 h-7 mt-1'/>
                            }
                            
                        </div>
                    </div>
                    <ul onClick={()=>setProfile(false)} className={`menu-list  mt-3 shadow bg-[#202c45] text-[white] rounded-box  absolute z-[1] w-[10rem] opacity-1  ${profile ? " grid right-5 top-14 bg-[#202c45]  text-white p-4 rounded-xl gap-3 font-serif" : "hidden"}`}>
                        <NavLink to='/user-details' className={({ isActive }) => isActive ? "after-active2" : ""} > Profile</NavLink>

                    </ul> 
                </div>
            </div>
        </div>

    );
};

export default Navbar;