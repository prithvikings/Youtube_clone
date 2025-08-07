import React from 'react'
import ContentCards from './ContentCards'

const videos = [
    {
      id: 1,
      thumbnail:"https://i.ytimg.com/vi/0OgUxSShtKk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDXb8D1k7Bm9IM30ic72HMa3JjQDg",
      title: "Bhaiyaara | Saiyaara Trailer Spoof | Purav Jha",
      views: 1500000,
      channelName: "Purav Jha"
    },
    {
      id: 2,
      thumbnail: "https://i.ytimg.com/vi/MTSt7a48grU/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCzynFY3X_0C214f_fc4BmkyHXRfg",
      title: "Samay Raina: Beyond the Meme - A Stand-Up Comedy Special",
      views: 2300000,
      channelName: "Brut Media"
    },
    {
        id: 3,
        thumbnail:"https://i9.ytimg.com/vi/U5wStfgp4do/hq720_custom_3.jpg?sqp=CNzx08QG-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDqVNALTlWtDvN1rx7A4CzZOI1Q5Q",
        title: "GPT-5 Full Review & 10 Mind-Blowing Use Cases",
        views: 14000,
        channelName: "Varun Mayya"
    },
    {
      id: 4,
      thumbnail:"https://i.ytimg.com/vi/_kN7DLrsXOM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAAsY5OueluHnnETHt3kslDHdOYpA",
      title: "From Loss to IPO: How Parth Jindal Transformed JSW Cement",
      views: 890000,
      channelName: "Sonia Shenoy"
    }
  ];
  
const Content = () => {

  return (
    <div className='w-full h-full flex flex-wrap px-16 py-16 overflow-y-auto'>
      {videos.map((video,idx)=>{
        return(
          <ContentCards key={video.id} id={idx} video={video} />
        )
      })}
    </div>
  )
}

export default Content