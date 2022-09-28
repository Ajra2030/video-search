import React from 'react'

const VideoItem = ({video}) => {
  return (
    <div>{video.snippet.description}</div>
  )
}

export default VideoItem