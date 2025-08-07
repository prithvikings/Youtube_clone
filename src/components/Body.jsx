import React from 'react'
import SideBar from './SideBar'
import Content from './Content'

const Body = () => {
  return (
    <div className='w-full h-full flex'>
      <SideBar />
      <Content />
    </div>
  )
}

export default Body