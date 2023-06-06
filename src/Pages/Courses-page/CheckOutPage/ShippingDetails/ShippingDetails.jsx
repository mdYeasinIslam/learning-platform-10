import React from 'react';

const ShippingDetails = () => {
    const formHandler = e =>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const address = form.address.value;
        const email = form.email.value;
        console.log(name,address,email)
    }
    return (
        <form onSubmit={formHandler}>
       
            <h2 className='md:text-xl bg-[#d6d4d7] p-3 font-semibold w-[100%] mx-auto rounded-xl' >SHIPPING DETAILS</h2>

            <hr className='mt-2'/>
            <div className='w-[80%] mx-auto'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Your Name :</span>
                    </label>
                    <input name='name' type="text" placeholder="Your Name" className="input input-bordered" required/>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Your Address :</span>
                    </label>
                    <input name='address' type="text" placeholder="Your Address" className="input input-bordered" required/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Email :</span>
                    </label>
                    <input name='email' type="text" placeholder="email" className="input input-bordered" required/>
                </div>
            </div>
            
            <div className=''>
                <h3 className='w-[100%] mx-auto font-semibold md:text-xl bg-[#d6d4d7] mt-5 rounded-xl p-3'>PAYMENT PROCESS :</h3><hr className='mt-2'/>
                <div className='w-[80%] mx-auto'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Name of Card :</span>
                        </label>
                        <input type="text" placeholder="Card Holder Name" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Card  Number :</span>
                        </label>
                        <input type="number" placeholder="Card Number" className="input input-bordered" required/>
                    </div>
                    <div className='lg:flex gap-2'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold uppercase">Valid Through :</span>
                            </label>
                            <input type="number" placeholder="Card Number" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">CVC CODE :</span>
                            </label>
                            <input type="number" placeholder="Card Number" className="input input-bordered" required/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center my-4'>
                <button className=' hover:bg-[#202c45] bg-[#d6d4d7] text-black hover:text-white w-[50%] '>Complete Payment</button>
            </div>

        </form>
    );
};

export default ShippingDetails;