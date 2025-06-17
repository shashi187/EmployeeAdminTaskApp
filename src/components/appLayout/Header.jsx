import React, { useState } from 'react'

const Header = (props) => {
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
  }
  return (
    <>
        <div className='flex justify-between items-center'>
          <p className='text-2xl text-white'>Yo <br/> <span className='text-3xl font-semibold'>User👋</span> </p>
          <button onClick={logOutUser} className='bg-red-500 text-white px-5 py-2 text-lg rounded-2xl'>Log Out</button>
        </div>
    </>
  )
}

export default Header
