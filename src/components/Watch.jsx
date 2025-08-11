import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RiThumbUpLine, RiThumbDownLine, RiShareForwardLine, RiSaveLine } from 'react-icons/ri';
import { closeMenu } from '../utils/AppSlice';
import { useDispatch } from 'react-redux';
import CommentContainer from './CommentContainer';
import LiveChat from './LiveChat';

const Watch = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  useEffect(() => {
    
    fetchVideoData();
  }, [id]);

  const fetchVideoData = async () => {
    const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
    const videoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${id}&key=${YOUTUBE_API_KEY}`;
    const relatedUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${id}&type=video&key=${YOUTUBE_API_KEY}`;
    
    try {
        // Fetch video details
        const videoResponse = await fetch(videoUrl);
        if (!videoResponse.ok) throw new Error('Failed to fetch video details');
        const videoData = await videoResponse.json();
        setVideo(videoData.items[0]);

        // Fetch related videos
        const relatedResponse = await fetch(relatedUrl);
        if (!relatedResponse.ok) throw new Error('Failed to fetch related videos');
        const relatedData = await relatedResponse.json();

        console.log("Related Videos API Response:", relatedData); // Check this output
        
        // Ensure items exist before setting state
        if (relatedData.items && relatedData.items.length > 0) {
            setRelatedVideos(relatedData.items);
        } else {
            console.log("No related videos found or empty response.");
            setRelatedVideos([]); // Set to an empty array to prevent rendering issues
        }

    } catch (error) {
        console.error("Error fetching video data:", error);
    }
};
  if (!video) return <div>Loading...</div>;

  return (
    <div className="watch-page w-full px-4 md:px-8 lg:px-24 py-8">
      {/* Main video player and live chat section */}
      <div className="flex flex-col lg:flex-row gap-4 w-full">
        <div className="video-player w-full lg:w-2/3 xl:w-3/4">
          <iframe
            className="w-full aspect-video rounded-xl"
            src={`https://www.youtube.com/embed/${id}?autoplay=1`}
            title={video.snippet.title}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          
          {/* Video Details and Controls */}
          <div className="video-details mt-4">
            <h1 className="text-xl font-bold text-gray-900">{video.snippet.title}</h1>
            <div className="flex items-center justify-between mt-2 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="font-semibold">{video.snippet.channelTitle}</span>
              </div>
              <div className="flex items-center gap-4 text-gray-600 mt-2 md:mt-0">
                <button className="flex items-center gap-1 p-2 rounded-full hover:bg-gray-100 transition-colors">
                  <RiThumbUpLine /> {parseInt(video.statistics.likeCount).toLocaleString()}
                </button>
                <button className="flex items-center gap-1 p-2 rounded-full hover:bg-gray-100 transition-colors">
                  <RiThumbDownLine />
                </button>
                <button className="flex items-center gap-1 p-2 rounded-full hover:bg-gray-100 transition-colors">
                  <RiShareForwardLine /> Share
                </button>
                <button className="flex items-center gap-1 p-2 rounded-full hover:bg-gray-100 transition-colors">
                  <RiSaveLine /> Save
                </button>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg mt-4">
              <span className="font-semibold text-sm">
                {parseInt(video.statistics.viewCount).toLocaleString()} views
              </span>
              <p className="mt-2 text-sm whitespace-pre-line">{video.snippet.description.substring(0, 200)}...</p>
            </div>
          </div>
        </div>

        {/* Live Chat and Related Videos sidebar */}
        <div className="w-full lg:w-1/3 xl:w-1/4">
          <div className="p-4 border border-gray-200 rounded-xl mb-4 h-[680px] flex flex-col">
    <h2 className="text-lg font-bold mb-2">Live Chat</h2>
    <div className="flex-1 overflow-y-auto">
        <LiveChat />
    </div>
</div>


          
          {/* Related Videos */}
          <div className="related-videos mt-8 lg:mt-0">
            <h2 className="text-xl font-semibold mb-4">Related Videos</h2>
            <div className="flex flex-col gap-4">
              {relatedVideos.map((relatedVideo) => (
                <div key={relatedVideo.id.videoId} className="flex gap-2 cursor-pointer">
                  <img
                    src={relatedVideo.snippet.thumbnails.medium.url}
                    alt={relatedVideo.snippet.title}
                    className="w-1/2 rounded-lg"
                  />
                  <div className="flex flex-col w-1/2">
                    <h3 className="text-sm font-semibold line-clamp-2">{relatedVideo.snippet.title}</h3>
                    <p className="text-xs text-gray-600 mt-1">{relatedVideo.snippet.channelTitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Comments section */}
      <div className="mt-8">
        <CommentContainer />
      </div>
    </div>
  );
};

export default Watch;