import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { AuthProvider } from '../../Context/UserContext';
import { toast } from 'react-toastify';
const Navbar = () => {
    const [show, setShow] = useState(false)
    const { user, logOutAuth } = useContext(AuthProvider)
    const logOutHandler = () => {
        logOutAuth()
        .then(() => {
        toast('you are successfully logOut', {
            position: toast.POSITION.TOP_CENTER
        })})
        .catch(e => console.error(e))
    }

    return (

        <div className="navbar  z-[-1] bg-[#202c45] text-white">
            <div className="dropdown dropdown-end block md:hidden">
                <label tabIndex={0} className="btn btn-circle swap swap-rotate">
                    <input type="checkbox" />

                    <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

                    <svg onClick={() => setShow(!show)} className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

                </label>

                <ul tabIndex={0} className={` menu menu-list dropdown-content  mt-3 gap-y-3 font-serif shadow bg-[#202c45] rounded-box w-52 ${show ? 'left-[50%]' : 'left-[-500px]'}`} >
                    <Link to='/home'>Home</Link>
                    <Link to='/courses'>Courses</Link>
                    <Link to='/faq'>FAQ</Link>
                    <Link to='/blog'>Blog</Link>
                    {
                        user?.uid ?
                            <Link onClick={logOutHandler} to='/logIn'>Log Out</Link>
                            :
                            <>
                                <Link to='/logIn'>Log In</Link>
                                <Link to='/signUp'>Sign Up</Link>
                            </>
                    }
                </ul>
            </div>

            <div className="flex-1">
                <img className='h-9 w-12 ml-5' src="/src/assets/images (1).jpeg" alt="" />
                <Link to='/home' className="btn btn-ghost text-[#F2184F] normal-case text-xl">StudyPress</Link>
            </div>

            <div className=' text-white  hidden md:block items-center  mr-5 '>
                <ul className='menu-list-2 flex gap-12'>
                    <Link to='/home'>Home</Link>
                    <Link to='/courses'>Courses</Link>
                    <Link to='/faq'>FAQ</Link>
                    <Link to='/blog'>Blog</Link>
                    {
                        user?.uid ?
                            <Link onClick={logOutHandler} to='/logIn'>Log Out</Link>
                            :
                            <>
                                <Link to='/logIn'>Log In</Link>
                                <Link to='/signUp'>Sign Up</Link>
                            </>
                    }
                </ul>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </label>
                    <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-black shadow">
                        <div className="card-body">
                            <span className="font-bold text-lg">8 Items</span>
                            <span className="text-info">Subtotal: $999</span>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">View cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </label>
                    <ul tabIndex={0} className=" menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#202c45] rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><Link>Courses</Link></li>
                        <li><Link>Logout</Link></li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Navbar;