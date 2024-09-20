import React from 'react';
import { IoHome } from "react-icons/io5";

const SelectFarm = () => {
  return (
    <div>
      <h3 className='text-xl font-medium'>Choose Farm Workspace</h3>
      <p className='mt-2 text-sm py-1'>Please choose a farm workspace to proceed.</p>
        <button className='w-full mt-4 py-4 px-4 bg-[#43A047]/[.10] flex flex-row rounded-md focus:border focus:border-[#43A047]'>
          <span className='bg-[#fff] p-2 rounded-md'><i className='text-[#43A047]'><IoHome size={20}/></i></span>
          <p className='text-sm ml-4 mt-2'>User's Farm</p>
        </button>
    </div>
  )
}

export default SelectFarm