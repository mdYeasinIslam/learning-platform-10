import React, { useContext } from 'react';
import { AuthProvider } from '../../Context/UserContext';

const UserDetails = () => {

    const { user } = useContext(AuthProvider)
    const { displayName, email, photoURL } = user;
    console.log(user)
    return (
        <div>
            
                <div className="hero md:w-[50%] mx-auto md:h-[100%]  bg-[#202c45] relative top-2 pb-3 md:top-[5rem] text-white rounded-xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 md:grid-flow-col-dense">
                        <div>
                            <img src={photoURL} className="w-full md:w-[100%] rounded-xl shadow-2xl pt-4" alt='NO PHOTO UPDATED' />
                        </div>
                        <div className='ml-4 mt-5'>
                            <h1 className="text-3xl md:text-5xl font-bold">User Details :</h1>
                            <hr className='my-4' />
                            <h3 className="text-2xl font-bold mb-0">Name: {displayName}</h3>
                            <p ><span className="font-semibold">Email</span> :{email}</p>
                        </div>
                    </div>
                </div>
                
            
        </div>
    );
};

export default UserDetails;