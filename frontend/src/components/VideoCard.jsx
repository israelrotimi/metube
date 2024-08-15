
import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = ({ video }) => {
    return (
        <div>
            <Link to={`/video/${video._id}`}>
                <img src={video.thumbnailUrl} alt={video.title} />
                <h3>{video.title}</h3>
            </Link>
        </div>
    );
};

export default VideoCard;

