import React from 'react';
import logo from '../../assets/logo.png'
import OTPInput from '../../components/auth/OTPInput';

const VerifyEmail = () => {
  return (
    <section className='p-6'>
      <div className='w-full flex justify-center'>
        <img className='h-8' src={logo} alt="fico_logo" />
      </div>
      <div className='w-5/6 mt-10 mx-auto'>
        <h3 className='text-xl font-medium'>Verify Email Address</h3>
        <p className='mt-2 text-sm py-1'>Please enter the 5 digits code sent to <span className='text-[#43A047]'>user@email.com</span></p>
        <p className='text-sm my-2 font-medium'>OTP</p>
        <OTPInput/>
      </div>

    </section>
  )
}

export default VerifyEmail