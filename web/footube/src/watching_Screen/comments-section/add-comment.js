import React from 'react';
import './add-comment.css';
import userImage from '../chadLogo.jpg';

function AddComment() {
    return (
        <div className="add-comment">
            <img className="user-image" src={userImage} alt="User Avatar" />
            <input className="comment-input" type="text" placeholder="Add a comment..." />
        </div>
    );
}

export default AddComment;
