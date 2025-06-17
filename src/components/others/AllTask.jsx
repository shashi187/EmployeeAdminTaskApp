import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
const AllTask = () => {
  const [userData,setUserData] = useContext(AuthContext);
  return (
    <div className='flex flex-col w-full h-36 p-0 gap-3'>
      <div className='flex justify-between px-2 py-3 rounded bg-red-300'>
        <h2 className='w-1/5'>Employee Name</h2>
        <h3 className='w-1/5'>New Task</h3>
        <h5 className='w-1/5'>Active Task</h5>
        <h5 className='w-1/5'>Completed Task</h5>
        <h5 className='w-1/5'>Failed Task</h5>
      </div>
      <div className='h-[80%] overflow-auto'  id='allTask'>
        {userData.map(function(e,idx){
        return <div key={idx} className='flex justify-between mb-2 px-2 py-3 rounded bg-emerald-300'>
        <h2 className='text-lg font-medium w-1/5'>{e.firstName}</h2>
        <h3 className='text-lg font-medium text-green-300 w-1/5'>{e.taskCounts.newtask}</h3>
        <h5 className='text-lg font-medium text-green-300 w-1/5'>{e.taskCounts.active}</h5>
        <h5 className='text-lg font-medium text-green-300 w-1/5'>{e.taskCounts.completed}</h5>
        <h5 className='text-lg font-medium text-green-300 w-1/5'>{e.taskCounts.failed}</h5>
      </div>
      })}
      </div>
      
      
    </div>
  )}

export default AllTask
