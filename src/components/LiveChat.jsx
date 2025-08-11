import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { generateRandomMessage, generateRandomName } from '../utils/helper'

const Chat = ({ name, message }) => {
    return (
        <div className='w-full flex items-center gap-2'>
            <div className='flex items-center gap-4'>
                {/* Avatar */}
                <div className="bg-gray-200 rounded-full flex items-center justify-center w-10 h-10">
                    <i className="text-2xl ri-user-3-fill"></i>
                </div>
                <h1 className='font-semibold'>{name}</h1>
            </div>
            <p className='font-normal'>{message}</p>
        </div>
    )
}

const LiveChat = () => {
    const [chat, setChat] = useState('');
    const dispatch = useDispatch();
    const messages = useSelector((state) => state.chat.messages);

    useEffect(() => {
        let interval = setInterval(() => {
            console.log("Fetching new chat messages...");
            dispatch(addMessage({
                id: Date.now(), // Use Date.now() to ensure unique IDs
                name: generateRandomName(),
                message: generateRandomMessage()
            }));
        }, 5000);

        return () => clearInterval(interval);
    }, [dispatch]);

    return (
        <>
            <div className='mt-2 w-full p-2 flex flex-col-reverse gap-6 overflow-y-scroll h-[600px]'>
                {messages.map((msg) => (
                    <Chat key={msg.id} name={msg.name} message={msg.message} />
                ))}
            </div>
            <form className='flex items-center m-4'
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(addMessage({
                        id: Date.now(), // Ensure unique ID for the user message
                        name: "User",
                        message: chat
                    }));
                    setChat('');
                }}
            >
                <input type="text" name="" id="" className='border border-gray-300 rounded-lg p-2 flex-1'
                    value={chat}
                    onChange={(e) => setChat(e.target.value)}
                />
                <button type="submit" className='bg-blue-500 text-white rounded-lg px-4 py-2 ml-2'>Send</button>
            </form>
        </>
    );
}

export default LiveChat;
