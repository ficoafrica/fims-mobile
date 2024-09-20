import React from 'react'

const CreateFarm = () => {
  return (
    <div>
      <h3 className='text-xl font-medium'>Create Farm Workspace</h3>
      <p className='mt-2 text-sm py-1'>Please create a farm workspace to proceed.</p>
      <div className='w-full mt-6'>
        <form>
        <div className='mb-4 flex flex-col'>
          <label className='text-sm mb-2 font-medium' htmlFor="name">Farm Name</label>
          <input className='p-1 border border-gray-300 text-sm rounded-md focus:outline-[#43A047]' type="text" name="name" required/>
        </div>
        <div>
          <button className='w-full bg-[#43A047] py-2 text-sm text-white rounded-tr-md rounded-bl-md hover:bg-[#81ca84] hover:tracking-widest' type="submit">Create</button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default CreateFarm