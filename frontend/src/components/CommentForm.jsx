import React, { useState } from 'react';
import axios from 'axios';

const CommentForm = ({ videoId }) => {
    const [text, setText] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/comments', { text, videoId }, {
                headers: {
                    'x-auth-token': localStorage.getItem('token')
                }
            });
            setText('');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a comment"
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default CommentForm;
