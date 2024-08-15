import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoPlayer from '../components/VideoPlayer';
import Comment from '../components/Comment';
import CommentForm from '../components/CommentForm';

const Video = ({ match }) => {
    const [video, setVideo] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchVideo = async () => {
            const res = await axios.get(`/api/videos/${match.params.id}`);
            setVideo(res.data);
        };
        fetchVideo();
    }, [match.params.id]);

    useEffect(() => {
        const fetchComments = async () => {
            const res = await axios.get(`/api/comments/${match.params.id}`);
            setComments(res.data);
        };
        fetchComments();
    }, [match.params.id]);

    return (
        <div>
            {video ? <VideoPlayer video={video} /> : <p>Loading...</p>}
            <CommentForm videoId={match.params.id} />
            {comments.map(comment => (
                <Comment key={comment._id} comment={comment} />
            ))}
        </div>
    );
};

export default Video;


