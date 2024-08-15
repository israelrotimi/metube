import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoCard from '../components/VideoCard';
import { useParams } from 'react-router-dom';

const Search = () => {
    const { query } = useParams();
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            const res = await axios.get(`/api/search/${query}`);
            setVideos(res.data);
        };
        fetchVideos();
    }, [query]);

    return (
        <div>
            {videos.map(video => (
                <VideoCard key={video._id} video={video} />
            ))}
        </div>
    );
};

export default Search;

