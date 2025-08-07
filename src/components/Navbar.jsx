import React from 'react';
import youtubeLogo from '../assets/youtubeLogo.png'; // Assuming you have a YouTube logo in your assets
import Avtaar from '../assets/Avtaar.jpg'; // Assuming you have an avatar image in your assets
import 'remixicon/fonts/remixicon.css'
const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-4  bg-white shadow-md">
      
        {/* YouTube logo */}
        
        <div className="flex items-center cursor-pointer space-x-8 ml-8">
          <i className="ri-menu-line text-2xl"></i>
          <img src={youtubeLogo} alt="" className='h-24 w-36' />
        </div>

        {/* Search bar and icons section */}
        <div className='flex items-center justify-center w-full mx-auto gap-4'>
          
          <div className='flex items-center justify-center '>
            <input type="text" 
                placeholder="Search" 
                className="border border-gray-300 rounded-l-full px-6 py-4 w-3xl focus:outline-none"
          />
          <button className='bg-zinc-200 text-white rounded-r-full px-6 py-4  hover:bg-zinc-300 transition duration-300 cursor-pointer'>
            <i className="ri-search-line text-xl text-zinc-500"></i>
          </button>
          </div>
          
          {/* Icons section */}
          <div className='mic bg-zinc-200 rounded-full w-15 h-15 px-4 py-4 hover:bg-zinc-300 transition duration-300 cursor-pointer flex items-center justify-center'>
            <i className="ri-mic-fill text-xl text-zinc-500 "></i>
          </div>
        </div>

        {/* User profile section */}
        <div className="flex items-center space-x-4 mr-8">
          <div>
            <button className='rounded-full bg-zinc-200 text-gray-800 flex items-center justify-center w-36 h-12 px-4 py-2 hover:bg-zinc-300 transition duration-300 cursor-pointer'>
              <i className="ri-add-line text-2xl"></i>
              <span className='ml-2 text-lg font-normal'>Create</span>
            </button>

          </div>
          <div>
            <button className='rounded-full bg-zinc-200 text-gray-800 flex items-center justify-center w-12 h-12 hover:bg-zinc-300 transition duration-300 cursor-pointer'>
              <i className="ri-notification-fill text-2xl"></i>
            </button>
          </div>
          <div>
            
            <button className='rounded-full bg-zinc-200 text-gray-800 flex items-center justify-center w-12 h-12 hover:bg-zinc-300 transition duration-300 cursor-pointer'>
              <img src={Avtaar} alt="User Avatar" className='w-full h-full rounded-full object-cover' />
            </button>
          </div>
        </div>

    </div>
    
  );
};

export default Navbar;