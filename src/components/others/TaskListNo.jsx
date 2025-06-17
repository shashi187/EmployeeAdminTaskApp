import React from 'react'

const TaskListNo = ({data}) => {
  return (
    <>
        <div className='flex justify-between gap-5 mt-10 '>
            <div className='p-10 rounded-xl w-[43%] bg-red-400'>
                <h2 className='text-3xl font-semibold'>{data.taskCounts.newtask}</h2>
                <h3 className='text-xl font-medium'>New Task </h3>
            </div>
            <div className='p-10 rounded-xl w-[43%] bg-blue-400'>
                <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
                <h3 className='text-xl font-medium'>Completed Task </h3>
            </div>
            <div className='p-10 rounded-xl w-[43%] bg-green-400'>
                <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
                <h3 className='text-xl font-medium'>Active Task </h3>
            </div>
            <div className='p-10 rounded-xl w-[43%] bg-yellow-400'>
                <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
                <h3 className='text-xl font-medium'>Failed Task </h3>
            </div>
        </div>
    </>
  )
}

export default TaskListNo
