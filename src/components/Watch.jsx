import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RiThumbUpLine, RiThumbDownLine, RiShareForwardLine, RiSaveLine, RiEyeLine } from 'react-icons/ri';

const Watch = () => {
  const { id } = useParams(); // Get the video ID from the URL
  const [video, setVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    // Fetch video details by ID (You can use YouTube API here)
    const getVideoDetails = async () => {
      const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
      const videoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${id}&key=${YOUTUBE_API_KEY}`;

      const response = await fetch(videoUrl);
      const data = await response.json();
      setVideo(data.items[0]);
    };

    // Fetch related videos
    const getRelatedVideos = async () => {
      const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
      const relatedUrl=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${YOUTUBE_API_KEY}`
      const response = await fetch(relatedUrl);
      const data = await response.json();
      setRelatedVideos(data.items);
    };

    getVideoDetails();
    getRelatedVideos();
  }, [id]);

  if (!video) return <div>Loading...</div>;

  return (
    <div className="watch-page w-full h-full bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="video-player w-full bg-black">
          <iframe
            width="100%"
            height="480"
            src={`https://www.youtube.com/embed/${id}`}
            title={video.snippet.title}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video Details */}
        <div className="video-details mt-6">
          <h1 className="text-2xl font-semibold text-gray-900">{video.snippet.title}</h1>
          <div className="flex items-center mt-2">
            <span className="text-gray-600">{video.statistics.viewCount} views</span>
            <span className="mx-4 text-gray-600">•</span>
            <span className="text-gray-600">{video.snippet.channelTitle}</span>
          </div>

          {/* Video Controls */}
          <div className="controls mt-4 flex items-center">
            <button className="mr-4 text-gray-600 flex items-center">
              <RiThumbUpLine className="mr-2" /> Like
            </button>
            <button className="mr-4 text-gray-600 flex items-center">
              <RiThumbDownLine className="mr-2" /> Dislike
            </button>
            <button className="mr-4 text-gray-600 flex items-center">
              <RiShareForwardLine className="mr-2" /> Share
            </button>
            <button className="mr-4 text-gray-600 flex items-center">
              <RiSaveLine className="mr-2" /> Save
            </button>
          </div>

          <div className="video-description mt-4">
            <p>{video.snippet.description}</p>
          </div>
        </div>

        {/* Suggested Videos */}
        <div className="related-videos mt-8">
          <h2 className="text-xl font-semibold text-gray-900">Related Videos</h2>
          <div className="flex flex-wrap gap-4 mt-4">
            {relatedVideos.map((relatedVideo) => (
              <div key={relatedVideo.id.videoId} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                <div className="bg-white shadow-md rounded-lg">
                  <iframe
                    width="100%"
                    height="200"
                    src={`https://www.youtube.com/embed/${relatedVideo.id.videoId}`}
                    title={relatedVideo.snippet.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="p-2">
                    <h3 className="text-sm font-semibold text-gray-900">{relatedVideo.snippet.title}</h3>
                    <p className="text-xs text-gray-600">{relatedVideo.snippet.channelTitle}</p>
                    <p className="text-xs text-gray-500">{relatedVideo.snippet.publishedAt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;
