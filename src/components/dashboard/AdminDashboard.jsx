import React from 'react'
import Header from '../appLayout/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDashboard = (props) => {
  return (
    <div className='p-10 h-screen w-screen'>
        <Header changeUser={props.changeUser} />
        <CreateTask />
        <AllTask />
    </div>
  )
}

export default AdminDashboard
