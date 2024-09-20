import React from 'react';
import logo from '../../assets/logo.png';
import SelectFarm from '../../components/auth/SelectFarm';

const Workspace = () => {
  return (
    <section className='p-6'>
      <div className='w-full flex justify-center'>
        <img className='h-8' src={logo} alt="fico_logo" />
      </div>
      <div className='w-5/6 mt-10 mx-auto'>
        <SelectFarm/>
      </div>
    </section>
  )
}

export default Workspace