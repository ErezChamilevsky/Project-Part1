import './add-comment.css';
import React, { useState, useEffect } from 'react';
import userData from '../../data/user.json';

function AddComment() {
    const [userImage, setUserImage] = useState('');

    useEffect(() => {
        setUserImage(userData.img);
    }, []);

    return (
        <div className="add-comment">
            <img className="user-image" src={userImage} />
            <input className="comment-input" type="text" placeholder="Add a comment..." />
        </div>
    );
}

export default AddComment;