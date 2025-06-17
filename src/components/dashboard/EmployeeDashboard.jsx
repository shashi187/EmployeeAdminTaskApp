import React from 'react'
import Header from '../appLayout/Header'
import TaskListNo from '../others/TaskListNo'
import TaskList from '../others/TaskList'

const EmployeeDashboard = (props) => {
  return (
    <div className='p-10 h-screen w-screen'>
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskListNo data={props.data} />
      <TaskList data={props.data} />
    </div>
  )
}

export default EmployeeDashboard
