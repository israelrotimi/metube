import React from 'react';

const VideoPlayer = ({ video }) => {
    return (
        <div>
            <video src={`/${video.videoUrl}`} controls width="600" />
            <h3>{video.title}</h3>
            <p>{video.description}</p>
        </div>
    );
};

export default VideoPlayer;

