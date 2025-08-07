import React from 'react'

const SideBar = () => {
  return (
    <div
    className='w-72  bg-gray-100 shadow-md px-8 py-4 flex flex-col gap-8'>


      <div className='flex flex-col space-y-2 border-b-2 pb-4  border-gray-300'>
        <div className='flex items-center space-x-4 cursor-pointer hover:bg-gray-200 p-2 rounded-md transition duration-200 ease-in-out'>
        <i className="ri-home-line text-3xl"></i>
        <span className='text-lg font-semibold'>Home</span>
      </div>
      <div className='flex items-center space-x-4 cursor-pointer hover:bg-gray-200 p-2 rounded-md transition duration-200 ease-in-out'>
        <i className="ri-video-line text-3xl"></i>
        <span className='text-md font-semibold'>Videos</span>
      </div>
      <div className='flex items-center space-x-4 cursor-pointer hover:bg-gray-200 p-2 rounded-md transition duration-200 ease-in-out'>
        <i className="ri-video-ai-line text-3xl"></i>
        <span className='text-md font-semibold'>Subscriptions</span>
      </div>
      </div>



      <div className='flex flex-col space-y-2 border-b-2 pb-4  border-gray-300'>
        <div className='flex items-center space-x-4 cursor-pointer hover:bg-gray-200 p-2 rounded-md transition duration-200 ease-in-out'>
        <i class="ri-history-line text-3xl"></i>
        <span className='text-lg font-semibold'>History</span>
      </div>
      <div className='flex items-center space-x-4 cursor-pointer hover:bg-gray-200 p-2 rounded-md transition duration-200 ease-in-out'>
        <i class="ri-rfid-line text-3xl"></i>
        <span className='text-md font-semibold'>Playlist</span>
      </div>
      <div className='flex items-center space-x-4 cursor-pointer hover:bg-gray-200 p-2 rounded-md transition duration-200 ease-in-out'> 
        <i class="ri-movie-2-line text-3xl"></i>
        <span className='text-md font-semibold'>Your videos</span>
      </div>
      <div className='flex items-center space-x-4 cursor-pointer hover:bg-gray-200 p-2 rounded-md transition duration-200 ease-in-out'>
        <i class="ri-film-line text-3xl"></i>
        <span className='text-md font-semibold'>Your courses</span>
      </div>
      <div className='flex items-center space-x-4 cursor-pointer hover:bg-gray-200 p-2 rounded-md transition duration-200 ease-in-out'> 
        <i class="ri-time-line text-3xl"></i>
        <span className='text-md font-semibold'>Watch Later</span>
      </div>
      <div className='flex items-center space-x-4 cursor-pointer hover:bg-gray-200 p-2 rounded-md transition duration-200 ease-in-out'> 
        <i class="ri-thumb-up-line text-3xl"></i>
        <span className='text-md font-semibold'>Liked videos</span>
      </div>
      <div className='flex items-center space-x-4 cursor-pointer hover:bg-gray-200 p-2 rounded-md transition duration-200 ease-in-out'> 
        <i class="ri-scissors-cut-line text-3xl"></i>
        <span className='text-md font-semibold'>Your Clips</span>
      </div>
      </div>


      <div className='flex flex-col space-y-3 border-b-2 pb-4 mb-4 border-gray-300'>
        <div className='flex-1'></div>
      <div className='text-sm text-gray-800 cursor-pointer'>© 2023 YouTube Clone</div>
      <div className='text-sm text-gray-800 cursor-pointer'>All rights reserved</div>
      <div className='text-sm text-gray-800 cursor-pointer'>Made with ❤️ by Prithvi</div>
      </div>

    </div>
  )
}

export default SideBar