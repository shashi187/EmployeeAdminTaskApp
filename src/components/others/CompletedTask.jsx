import React from 'react'

const CompletedTask = ({data}) => {
  return (
    <div className='bg-red-400 h-full flex-shrink-0 rounded-2xl p-5 w-[320px]'>
        <div className='flex justify-between gap-5 p-0'>
          <h3 className=' bg-red-600 px-3 py-1 text-sm rounded-md'>{data.category}</h3>
          <h4 className='text-sm'>{data.date}</h4>
        </div>
        <h2 className='text-2xl mt-10 font-sans'>{data.task_title}</h2>
        <p className='text-sm mt-2'>{data.task_description}</p>
        <div>
            <button className='bg-green-500 text-white px-4 py-2 mt-5 w-full rounded-md hover:bg-blue-600'>Completed</button>
        </div>
      </div>
  )
}

export default CompletedTask
