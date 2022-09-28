import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({videos, onVideoSelected}) => {

const renderedList = videos.map(video => <VideoItem  onVideoSelected={onVideoSelected} key={video.id.videoId} video={video}/>)
  return (
    <div>
        {renderedList}
    </div>
  )
}

export default VideoList