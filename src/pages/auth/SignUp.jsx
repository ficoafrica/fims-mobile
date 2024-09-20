import React from 'react';
import logo from '../../assets/logo.png';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const SignUp = () => {
  return (
    <section className='p-6'>
      <div className='w-full flex justify-center'>
        <img className='h-8' src={logo} alt="fico_logo" />
      </div>
      <div id='form-container' className='w-5/6 mt-8 mx-auto'>
        <h3 className='text-xl font-medium'>Sign up</h3>
        <p className='mt-2 text-sm py-1'>Already have an account? <span className='ml-1 text-[#43A047] border-b-2 border-[#43A047]'>Sign In Now</span></p>
        <div id='form-body' className='mt-4 w-full mx-auto'>
          <form>
            <div className='mb-3 flex flex-col'>
              <label className='text-sm mb-3 font-medium' htmlFor="name">Full Name</label>
              <input className='p-1 border border-gray-300 text-sm rounded-md focus:outline-[#43A047]' type="text" name="name" required/>
            </div>
            <div className='mb-3 flex flex-col'>
              <label className='text-sm mb-3 font-medium' htmlFor="email">Email Address</label>
              <input className='p-1 border border-gray-300 text-sm rounded-md focus:outline-[#43A047]' type="email" name="email" required/>
            </div>
            <div className='mb-3 flex flex-col'>
              <label className='text-sm mb-3 font-medium' htmlFor="password">Create Password</label>
              <input className='p-1 border border-gray-300 text-sm rounded-md focus:outline-[#43A047]' type="password" name="password" required/>
            </div>
            <div className='mb-3 flex flex-col'>
              <label className='text-sm mb-3 font-medium' htmlFor="password">Confirm Password</label>
              <input className='p-1 border border-gray-300 text-sm rounded-md focus:outline-[#43A047]' type="password" name="password2" required/>
            </div>
            <div>
              <button className='w-full bg-[#43A047] py-2 text-sm text-white rounded-tr-md rounded-bl-md hover:bg-[#81ca84] hover:tracking-widest' type="submit">Sign up</button>
            </div>
          </form>
            <div id='social-login' className='mt-4'>
              <div className='flex flex-row'>
                <div className='mt-2 h-[2px] w-2/4 bg-gray-200'></div>
                <span className='px-1 mx-1 text-sm font-medium'>OR</span>
                <div className='mt-2 h-[2px] w-2/4 bg-gray-200'></div>
              </div>
              <button className='mt-4 w-full py-3 border border-gray-300 rounded-tr-md rounded-bl-md flex justify-center text-sm cursor-pointer'>
                <FcGoogle size={20}/> <p className='ml-3 font-medium'>Sign up with Google</p>
              </button>
              <button className='mt-4 w-full py-3 border border-gray-300 rounded-tr-md rounded-bl-md flex justify-center text-sm cursor-pointer'>
                <i className='text-blue-500'><FaFacebook size={20}/></i> <p className='ml-3 font-medium'>Sign up with Facebook</p>
              </button>
            </div>
        </div>
      </div>

    </section>
  )
}

export default SignUp