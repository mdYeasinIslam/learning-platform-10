import React, { useContext } from 'react';
import { AuthProvider } from '../../Context/UserContext';

const UserDetails = () => {
    const { user } = useContext(AuthProvider)
    const { displayName, email, photoURL } = user;
    console.log(user)
    return (
        <div>
            <div className="hero w-[70%] mx-auto h-[40vh]  bg-[#202c45] relative top-[10rem] text-white rounded-xl">
                <div className="grid grid-cols-2 grid-flow-col-dense">
                    <div>
                        <img src={photoURL} className=" w-[70%] rounded-lg shadow-2xl" alt='NO PHOTO UPDATED'/>
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">User Details :</h1>
                        <hr className='my-4' />
                        <h3 className="text-2xl font-bold mb-0">Name: {displayName}</h3>
                        <p className="">Email :{email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;