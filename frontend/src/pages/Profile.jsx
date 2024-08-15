import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoCard from '../components/VideoCard';

const Profile = () => {
    const [user, setUser] = useState(null);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get('/api/auth/user', {
                headers: {
                    'x-auth-token': localStorage.getItem('token')
                }
            });
            setUser(res.data);
        };
        fetchUser();
    }, []);

    useEffect(() => {
        const fetchVideos = async () => {
            const res = await axios.get('/api/videos');
            setVideos(res.data.filter(video => video.user === user._id));
        };
        if (user) fetchVideos();
    }, [user]);

    return (
        <div>
            {user && (
                <div>
                    <h1>{user.username}</h1>
                    <h2>Your Videos</h2>
                    {videos.map(video => (
                        <VideoCard key={video._id} video={video} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Profile;
