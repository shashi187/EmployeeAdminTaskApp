import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'
import CompletedTask from './CompletedTask'
const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='w-full flex flex-nowrap gap-5 overflow-x-auto h-[55%] mt-10 rounded-2xl'>
      {data.tasks.map((e,idx)=> {
      if(e.active){
        return <AcceptTask key={idx} data={e} />}
      if(e.newtask){
        return <NewTask key={idx} data={e} />}
      if(e.failed){
        return <FailedTask key={idx} data={e} />}
      if(e.completed){
        return <CompletedTask key={idx}  data={e}  />}
      })}
    </div>
  )
}

export default TaskList
