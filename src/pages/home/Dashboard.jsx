import React, {useEffect} from 'react'
import { useAuthContext } from '../../context/AuthContext'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  let {loadLayout, viewFarm} = useAuthContext();
  let {id} = useParams();
  let {firstVisit, load, user} = useSelector((state)=> state.auth)
  let role;

  if (user.role === 1){
    role = 'Manager'
  } else if( user.role === 2){
    role = 'Deputy'
  } else {
    role = 'Worker';
  }

  useEffect(()=>{
    if (firstVisit){
      viewFarm(id, false)
    }
  }, [])

  return (
    <div>
      {
        loadLayout || load ? (
          <h2>Loading....</h2>
        ) : (
          <h2>Hello {user.username}, your role is {role}</h2>
        )
      }
    </div>
  )
}

export default Dashboard