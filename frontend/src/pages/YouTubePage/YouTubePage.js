import React from "react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { KEY } from "../../localKey";
import VideoMapper from "../../components/VideoMapper/VideoMapper";

const YouTubePage = () => {
  const [videos, setVideos] = useState([]);
  const [videoID, setVideoID] = useState("");

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        let response = await axios
          .get(
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc%2Cc0KYU2j0TM4%2CeIho2S0ZahI&part=snippet&maxResults=12&key=${KEY}`
          )
          .then((response) => {
            setVideos(response.data.items);
          });
        setVideos(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
  });

  return (
    <div className="container">
      <h1></h1>
      <div>
        <VideoMapper videoArray={videos} />
      </div>
    </div>
  );
};

export default YouTubePage;
