import React, { useState, useEffect } from "react";
import axios from "axios";
import { KEY } from "../../localKey";
import VideoMapper from "../../components/VideoMapper/VideoMapper";
import VideoList from "../../components/VideoList/VideoList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons'

const YouTubePage = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos()
  }, []);

    const fetchVideos = async () => {
        try {
          let response = await axios
            .get(
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=12&regionCode=US&key=${KEY}`
            )
            .then((response) => {
            setVideos(response.data.items);
            });
          console.log(videos)
        } catch (error) {
        console.log(error.response.data);
        }
    };



  return (
    <div className="container">
      <h1>Popular Videos <FontAwesomeIcon icon={faVideo} style={{color: "lightseagreen",}} /></h1>
      <div>
        <VideoMapper videoArray={videos}/>
      </div>
    </div>
  );
};

export default YouTubePage;
