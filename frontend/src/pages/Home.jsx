import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoCard from '../components/VideoCard';

const Home = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            const res = await axios.get('/api/videos');
            setVideos(res.data);
        };
        fetchVideos();
    }, []);

    return (
        <div>
            {videos.map(video => (
                <VideoCard key={video._id} video={video} />
            ))}
        </div>
    );
};

export default Home;

export default Home;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoCard from '../components/VideoCard';

const Home = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            const res = await axios.get('/api/videos');
            setVideos(res.data);
        };
        fetchVideos();
    }, []);

    return (
        <div>
            {videos.map(video => (
                <VideoCard key={video._id} video={video} />
            ))}
        </div>
    );
};

export default Home;
