import React from 'react';

const Contract = () => {
    return (
        <div className='border rounded-lg border-orange-500  lg:px-3 mx-1'>
            <div className='md:flex mx-auto   '>
                <div className=' px-2 lg:px-10 mx-auto'>
                    <h1 className='text-3xl mt-6 text-orange-500 font-bold'>Contact Us</h1>

                    <input className=' w-full  md:w-96 mt-6  p-2 rounded-lg' type="text" placeholder='Name' name="" id="" />
                    <input className=' w-full md:w-96 mt-6  p-2 rounded-lg' type="Email" placeholder='Email' name="" id="" />
                    <div>
                        <textarea className='rounded-lg w-full mt-6 p-4 md:w-96 ' placeholder='Message' name="" id="" cols="" rows="5"></textarea>
                    </div>

                    <button className='mt-6 w-full border px-2 lg:py-2 font-bold text-orange-500 hover:bg-orange-100 rounded-lg md:w-96'>
                        Send Message
                    </button>
                </div>
                <div className=''>
                    <img className='h-[500px] pt-6 pb-3 w-[700px] rounded-lg' src="https://i.ibb.co/9gpqtCM/contract.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Contract;