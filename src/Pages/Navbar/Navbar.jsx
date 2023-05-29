import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-[#202c45] text-white">
                <div className="dropdown dropdown-end block md:hidden">
                        <button tabIndex={0}  className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </button>
                 
                    <ul tabIndex={0} className=" menu menu-list dropdown-content left-[50%] mt-3  gap-y-3 font-serif shadow bg-[#202c45] rounded-box w-52">
                        <Link to='/home'>Home</Link>
                        <Link to='/courses'>Courses</Link>
                        <Link to='/faq'>FAQ</Link>
                        <Link to='/blog'>Blog</Link>
                        <Link to='/logIn'>Log In</Link>
                        <Link to='/signUp'>Sign Up</Link>
                    </ul>
                </div>
              
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>

                <div className=' text-white  hidden md:block  mr-5 '>
                    <ul className='flex gap-12'>
                        <Link to='/home'>Home</Link>
                        <Link to='/courses'>Courses</Link>
                        <Link to='/faq'>FAQ</Link>
                        <Link to='/blog'>Blog</Link>
                        <Link to='/logIn'>Log In</Link>
                        <Link to='/signUp'>Sign Up</Link>
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
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#202c45] rounded-box w-52">
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
        </div>
    );
};

export default Navbar;