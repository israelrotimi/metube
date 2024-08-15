import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Upload = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState('');
    const [video, setVideo] = useState(null);
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('tags', tags);
        formData.append('video', video);

        try {
            const res = await axios.post('/api/videos', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'x-auth-token': localStorage.getItem('token')
                }
            });
            history.push(`/video/${res.data._id}`);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                required
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                required
            />
            <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="Tags (comma separated)"
                required
            />
            <input
                type="file"
                onChange={(e) => setVideo(e.target.files[0])}
                required
            />
            <button type="submit">Upload</button>
        </form>
    );
};

export default Upload;

