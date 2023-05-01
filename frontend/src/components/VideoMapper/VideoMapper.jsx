import React from 'react';
import VideoList from '../VideoList/VideoList';
import "./VideoMapper.css"
import styled from 'styled-components';

const FlexContainer = styled.ul`
display:flex;
flex-wrap: wrap;
`

const VideoMapper = ({videoArray}) => {
    return ( 
        <FlexContainer>
            {videoArray.map(el => <VideoList key={el.id.videoId} video ={el} />)}
        </FlexContainer>
     );
}
 
export default VideoMapper;