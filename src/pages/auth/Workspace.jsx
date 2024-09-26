import React from 'react';
import logo from '../../assets/logo.png';
import SelectFarm from '../../components/auth/SelectFarm';
import CreateFarm from '../../components/auth/CreateFarm';

import { useSelector } from 'react-redux';

const Workspace = () => {
  let {hasFarm} = useSelector((state) => state.auth)
  return (
    <section className='p-6'>
      <div className='w-full flex justify-center'>
        <img className='h-8' src={logo} alt="fico_logo" />
      </div>
      <div className='w-5/6 mt-10 mx-auto'>
        {
          hasFarm ? (
            <SelectFarm/>
          ) : (
            <CreateFarm/>
          )
        }
      </div>
    </section>
  )
}

export default Workspace