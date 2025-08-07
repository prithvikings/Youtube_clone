import React from 'react'

const ContentCards = ({ video }) => {
   return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
      <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer">
        {/* Video Thumbnail */}
        <img
          src={video.thumbnail}
          alt="Video Thumbnail"
          className="w-full h-auto rounded-t-lg"
        />

        <div className="p-4">
          {/* Video Title */}
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
            {video.title}
          </h3>

          {/* Channel Name */}
          <p className="text-md text-gray-700 mt-1">
            {video.channelName}
          </p>

          {/* View Count */}
          <p className="text-xs text-gray-500 mt-1">
            {new Intl.NumberFormat().format(video.views)} views
          </p>
        </div>
      </div>
    </div>
  );
};
export default ContentCards