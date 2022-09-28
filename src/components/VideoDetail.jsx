import React from "react";

const VideoDetail = ({ video }) => {
  return (
    <div className="ui grid">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${video.id.videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="row"
      ></iframe>
      <div className="content row ui segment">
        <div className="header">{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
