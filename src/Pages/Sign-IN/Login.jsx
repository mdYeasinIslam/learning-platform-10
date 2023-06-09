import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../Context/UserContext';
import { toast } from 'react-toastify';
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";


const Login = () => {
    const { signInAuth, google, github } = useContext(AuthProvider)
    const [error,setError] = useState('')
    let navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || '/'
    const formHandler = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signInAuth(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user)
                if (user) {
                    toast('You are successfully Log-In', {
                        position: toast.POSITION.TOP_CENTER
                    })
                    navigate(from, { replace: true })
                }
                else {
                    navigate('/signUp')
                }
            })
            .catch(e => setError(e.message))
    }
    const googleAuth = () => {
        google()
            .then(result => {
                const user = result.user;
                // console.log(user)
                navigate('/home')
            })
            .catch(e => setError(e.message))

    }
    const githubAuth = () => {
        github()
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate('/home')
            })
            .catch(e => setError(e.message))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">If you Already have an Account.. Please Log-In!!!</p>
                    </div>
                    <form onSubmit={formHandler} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a className="label-text-alt link link-hover font-semibold">Forgot password?</a>
                                </label>
                                <label className="label">
                                    <p className="label-text-alt ">Donot have any accont?? <Link to='/signUp ' className='link link-hover font-semibold'>Please Create an account</Link></p>
                                </label>
                            </div>
                            <p>Error : {error}</p>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className='border-4  mx-auto'>
                                <button className='btn font-semibold'>Sign In with GOOGLE :<FcGoogle onClick={googleAuth} className='h-6 w-6 inline ml-3 hover:h-8 hover:w-8 hover:transition-all' /></button>
                            </div>
                            <div className='border-4  mx-auto'>
                                <button className='btn font-semibold'>Sign In with Github :<AiFillGithub onClick={githubAuth} className='h-6 w-6 inline ml-3 hover:h-8 hover:w-8 hover:transition-all' /></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;