import React from 'react';
import { useAuthContext } from '../../context/AuthContext';
import LoadButton from '../loaders/LoadButton';

const CreateFarm = () => {
  let {createFarms, loading} = useAuthContext()

  const handleSubmit = (e) =>{
    e.preventDefault()
    let formData = {name: e.target.name.value}
    createFarms(formData)
  }
  return (
    <div>
      <h3 className='text-xl font-medium'>Create Farm Workspace</h3>
      <p className='mt-2 text-sm py-1'>Please create a farm workspace to proceed.</p>
      <div className='w-full mt-6'>
        <form onSubmit={handleSubmit}>
        <div className='mb-4 flex flex-col'>
          <label className='text-sm mb-2 font-medium' htmlFor="name">Farm Name</label>
          <input className='p-1 border border-gray-300 text-sm rounded-md focus:outline-[#43A047]' type="text" name="name" required/>
        </div>
        <div>
          {
            !loading ? (
              <button className='w-full bg-[#43A047] py-2 text-sm text-white rounded-tr-md rounded-bl-md hover:bg-[#81ca84] hover:tracking-widest' type="submit">Create</button>
            ) : (
              <LoadButton buttonTxt="Creating ...."/>
            )
          }
          
        </div>
        </form>
      </div>
    </div>
  )
}

export default CreateFarm