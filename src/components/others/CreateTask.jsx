import React, { act, useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const CreateTask = () => {
  const [userData,setUserData] = useContext(AuthContext);
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [taskAssign, setTaskAssign] = useState('')
  const [taskCategory, setTaskCategory] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [newTask, setNewTask] = useState({})
  const submitHandler = (e)=>{
    e.preventDefault()
    alert('Task Created Successfully')
    setNewTask({taskTitle, taskDate, taskCategory, taskDescription,active: true,newtask:true,failed:false,completed:false})
    const data= userData
    userData.forEach(function(e){
      if (e.firstName == taskAssign) {
        e.tasks.push(newTask)
        e.taskCounts.newtask = e.taskCounts.newtask+1
      }
    })
    console.log(data)
    setTaskAssign('')
    setTaskCategory('')
    setTaskDate('')
    setTaskDescription('')
    setTaskTitle('')
  }
  return (
    <div className='mt-10 bg-[#1c1c1c] p-10'>
        <form onSubmit={(e)=>{
          submitHandler(e);
          e.preventDefault();
        }}
            className='flex gap-10 justify-between w-full'>
            <div className='flex flex-col gap-3 w-2/5'>
                <h3>Task Title</h3>
                <input value={taskTitle} onChange={(e)=>{
                  setTaskTitle(e.target.value)
                }} type="text" placeholder='Make a UI Design' className='bg-transparent border p-1 rounded-md' />
                <h3>Date</h3>
                <input value={taskDate} onChange={(e)=>{
                  setTaskDate(e.target.value)
                }} type="date" placeholder='17/07/2006' className='bg-transparent border p-1 rounded-md' />
                <h3>Assign To</h3>
                <input value={taskAssign} onChange={(e)=>{
                  setTaskAssign(e.target.value)
                }} type="text" placeholder='User' className='bg-transparent border p-1 rounded-md' />
                <h3>Category</h3>
                <input value={taskCategory} onChange={(e)=>{
                  setTaskCategory(e.target.value)
                }} type="text" placeholder='WebDev,UI/UX,etc' className='bg-transparent border p-1 rounded-md' />
            </div>
            <div className='flex flex-col gap-5 w-2/5'>
                <h3>Description</h3>
                <textarea value={taskDescription} onChange={(e)=>{
                  setTaskDescription(e.target.value)
                }} name="des" rows={9} cols={30} id="des" className='bg-transparent border p-1 rounded-md' ></textarea>
                <button type='submit' className='bg-emerald-400 p-1 rounded-xl'>Create Task</button>
            </div>
        </form>
    </div>
  )
}

export default CreateTask
