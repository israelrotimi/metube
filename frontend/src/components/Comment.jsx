import React from 'react';

const Comment = ({ comment }) => {
    return (
        <div>
            <p>{comment.text}</p>
        </div>
    );
};

export default Comment;
