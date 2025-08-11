import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { generateRandomMessage,generateRandomName } from '../utils/helper'
const Chat = (msg) => {

    return (
        <div className='w-full flex items-center gap-2'>
            <div className='flex items-center gap-4'>
                {/* The avatar is now a div with a background color and rounded-full class */}
                <div className="bg-gray-200 rounded-full  flex items-center justify-center w-10 h-10">
          <i className="text-2xl ri-user-3-fill"></i>
        </div>
        <h1 className='font-semibold'>{msg.name}</h1>
      </div>
      <p className='font-normal'>{msg.message}</p>
    </div>
  )
}
const LiveChat = () => {
    const dispatch = useDispatch();
    const messages = useSelector((state) => state.chat.messages);
    useEffect(()=>{
        let interval = setInterval(() => {
            console.log("Fetching new chat messages...");
            dispatch(addMessage({
                id: 1,
                name: generateRandomName(),
                message: generateRandomMessage()
            }));
        }, 5000);

        return () => clearInterval(interval);
    }, []);
  return (
  <div className='mt-2 w-full p-2 flex flex-col-reverse gap-6 overflow-y-scroll h-[600px]'>
    {messages.map((msg) => (
      <Chat key={msg.id} name={msg.name} message={msg.message} />
    ))}
  </div>
);
}

export default LiveChat