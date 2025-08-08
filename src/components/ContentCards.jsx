import React from 'react'

const ContentCards = ( {video} ) => {
   return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
      <div className="bg-white rounded-lg shadow-sm h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer pb-2">
        {/* Video Thumbnail */}
        <img
          src={video.snippet.thumbnails.standard.url}
          alt="Video Thumbnail"
          className={`w-full h-48 object-cover rounded-t-lg ${video.snippet.thumbnails.standard.width} ${video.snippet.thumbnails.standard.height}`}
        />

        <div className="p-2">
          {/* Video Title */}
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
            {video.snippet.title}
          </h3>

          {/* Channel Name */}
          <p className="text-md text-gray-800 font-semibold mt-1">
            {video.snippet.channelTitle}
          </p>

          {/* View Count */}
          <p className="text-xs font-semibold text-gray-700 mt-1">
            {new Intl.NumberFormat().format(video.statistics.viewCount)} views
          </p>
        </div>
      </div>
    </div>
  );
};
export default ContentCards