import React from 'react';

const VideoMapper = ({videoArray}) => {
    return ( 
        <ul>
            {videoArray.map(el => <VideoPage key={el.id.videoId} video ={el} />)}
        </ul>
     );
}
 
export default VideoMapper;