import React, {useEffect} from 'react';
import { IoHome } from "react-icons/io5";
import { useAuthContext } from '../../context/AuthContext';
import { useSelector } from 'react-redux';
import LoadWorkspace from '../loaders/LoadWorkspace';

const SelectFarm = () => {
  let {isLoading, getFarms, viewFarm, loading} = useAuthContext()

  let {farms} = useSelector((state)=> state.auth)

  useEffect(()=>{
    getFarms();
  },[])

  const handleClick = (id) =>{
    viewFarm(id, true)
  }

  return (
    <div>
      <h3 className='text-xl font-medium'>Choose Farm Workspace</h3>
      <p className='mt-2 text-sm py-1'>Please choose a farm workspace to proceed.</p>
      {
        isLoading ? (
          <LoadWorkspace/>
        ) : (
          <div>
            {farms.map((farm, index)=>{
              return (
                <button onClick={()=> handleClick(farm.id)} disabled={loading} key={index} className='w-full mt-4 py-4 px-4 bg-[#43A047]/[.10] flex flex-row rounded-md focus:border focus:border-[#43A047]'>
                  <span className='bg-[#fff] p-2 rounded-md'><i className='text-[#43A047]'><IoHome size={20}/></i></span>
                  <p className='text-sm ml-4 mt-2'>{farm.name}</p>
                </button>
              )
            })}
          </div>
        )
      }
        
    </div>
  )
}

export default SelectFarm