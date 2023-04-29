import React from 'react';
import VideoList from '../VideoList/VideoList';

const VideoMapper = ({videoArray}) => {
    return ( 
        <ul>
            {videoArray.map(el => <VideoList key={el.id.videoId} video ={el} />)}
        </ul>
     );
}
 
export default VideoMapper;