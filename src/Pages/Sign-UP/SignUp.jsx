import React, { useContext } from 'react';
import { Link, json, useLocation, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../Context/UserContext';
import { toast } from 'react-toastify';

const SignUp = () => {
    const {user,signUpAuth,userProfileUpdate,varifyEmail} = useContext(AuthProvider)
   const navigate = useNavigate()
    const formHandler = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const number = toString(form.number.value);
        const email = form.email.value;
        const password = form.password.value;
        const profile = {displayName:name,phoneNumber:number,photoURL:name}
        console.log(name,email,password,number)

        signUpAuth(email,password)
        .then(result =>{
            const user = result.user
            //update-profile
            userProfileUpdate(profile).then(()=>{}).catch(e=>console.error(e))
            //manage-location
          navigate('/home')
          //varify - email
          emailVarification()
        }).catch(e=>console.error(e))
    }
    const emailVarification = () =>{
        varifyEmail()
        .then(()=>{
            toast('You have been send a varification mail,Please Check....')
        }).catch(e=>console.error(e))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Create an Account.{user?.displayName}</h1>
                        <p className="py-2">If you dont have any account. Please Create an account.</p>
                    </div>
                    <form onSubmit={formHandler} className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Your Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Your Number</span>
                                </label>
                                <input type="number" name='number' placeholder="number" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text  font-semibold">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <p  className="label-text-alt link link-hover font-semibold">Forgot password?</p>
                                </label>
                                <label className="label">
                                    <p className="label-text-alt ">Already have an accont !!<Link to='/logIn ' className='link link-hover font-semibold'>Please log-In</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;