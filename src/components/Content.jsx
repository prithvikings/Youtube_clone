import React, { useEffect,useState } from 'react'
import ContentCards from './ContentCards'
import ButtonList from './ButtonList'
import { Link } from 'react-router-dom';





  
const Content = () => {
  const [videos, setVideos] = useState([]); // Initialize state to hold videos
  
  
  useEffect(()=>{
    // Fetch videos from API or perform any side effects
    getVideos();
  },[])

  const getVideos = async () => {
    try {
      // Construct the full URL with your API key
      const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
      const url =  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=8&regionCode=IN&key=" + YOUTUBE_API_KEY;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setVideos(data.items); // Assuming the videos are in a property called 'items'
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  return (
    <div className='w-full h-full px-16 py-16 overflow-y-auto space-y-4'>
      <ButtonList />
    <div className=''>
      
      {videos.map((video,idx)=>{
        return(
          <Link
          className=' flex flex-wrap items-center justify-center gap-4 '
          to={`/watch/${video.id}`}
          key={video.id}
          >
          <ContentCards id={idx} video={video} />
          </Link>
          // 
        )
      })}
    </div>
    </div>
  )
}

export default Content