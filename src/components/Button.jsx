import React from 'react'

const Button = (props) => {
  return (
    <button className={` ${props.active ? 'bg-black text-white ' : 'bg-gray-300'} hover:cursor-pointer rounded-md px-5 py-2  text-normal font-semibold`}>
      {props.title}
    </button>
  )
}

export default Button