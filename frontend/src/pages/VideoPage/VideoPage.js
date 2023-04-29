import SearchBar from "../../components/SearchBar/SearchBar";
import React, { useState, useEffect } from "react";
import { KEY } from "../../localKey";
import axios from "axios";
import VideoMapper from "../../components/VideoMapper/VideoMapper";

const VideoPage = (props) => {
  const [videos, setVideos] = useState([]);
  const [videoID, setVideoID] = useState("");

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      let response = await axios
        .get(
          `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoID}&type=video&part=snippet&maxResults=18&key=${KEY}`
        )
        .then((response) => {
          setVideos(response.data.items);
        });
      setVideos(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div>
      <div>
        <SearchBar />
      </div>
      <iframe
        title="ytplayer"
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${videoID}?autoplay=1&origin=http://example.com`}
        frameborder="0"
      ></iframe>
      <div>
        <VideoMapper videoArray={videos} />
      </div>
    </div>
  );
};

export default VideoPage;
