import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./VideoList.css"
import styled from "styled-components";

const List = styled.li`
width: 20%;
padding: 10px;
margin: 1rem;
`

const VideoList = ({ video }) => {
  const [videoId, setVideoId] = useState ('')

  return (
    <List>
      <Link to={`/${video.id.videoId}`}>
        <img
          src={video.snippet.thumbnails.high.url}
          height='120px'
          alt=""
        />
        <h2 className="title">{video.snippet.title}</h2>
        <h2 className="description">{video.snippet.description.substring(0, 100)}...</h2>
      </Link>
    </List>
  );
};

export default VideoList;
