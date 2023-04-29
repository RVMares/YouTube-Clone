import React, { useState } from "react";
import { Link } from "react-router-dom";

const VideoList = ({ video }) => {
  const [videoID, setVideoID] = useState ('')

  return (
    <li>
      <Link to={`/${videoID}`}>
        <img
          src={video.snippet.thumbnails.high.url}
          height={video.snippet.thumbnails.high.height}
          width={video.snippet.thumbnails.high.width}
          alt=""
        />
      </Link>
      <h2>{video.snippet.title}</h2>
    </li>
  );
};

export default VideoList;
