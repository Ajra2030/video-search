import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video , onVideoSelected}) => {
  const { description, thumbnails, title } = video.snippet;

  return (
    <div onClick={() => onVideoSelected(video)} className="video-item">
      <div className="ui card">
        <div className="image">
          <img src={thumbnails.medium.url} />
        </div>
        <div className="content">
          <div className="header">{title}</div> 
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
