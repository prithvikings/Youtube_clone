import React from 'react'
import Button from './Button'
const ButtonList = () => {
  const info=[
    {title: "All", active: true},
    {title: "Mix", active: false},
    {title: "Watch Later", active: false},
    {title: "Liked Videos", active: false},
    {title: "Ai", active: false},
    {title: "Music", active: false},
    {title: "Podcasts", active: false},
    {title: "Live", active: false},
    {title: "Gaming", active: false},
    {title: "Comedy", active: false},
    {title: "News", active: false},
    {title: "Stocks", active: false},
    {title: "Tourism", active: false},
    {title: "Vlogs", active: false},
  ]
  return (
    <div className='flex space-x-5 overflow-x-hidden'>
      {info.map((item,idx)=>{
        return(
          <Button key={idx} title={item.title} active={item.active} />
        )
      })}
    </div>
  )
}

export default ButtonList