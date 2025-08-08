import React from 'react'
import SideBar from './SideBar'
import Content from './Content'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='w-full h-full flex'>
      <SideBar />
      <Outlet />
    </div>
  )
}

export default Body