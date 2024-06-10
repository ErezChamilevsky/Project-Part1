import React from 'react';
import "./like-toolbar.css";

function LikeToolbar({ userName, userImg, likeCount, liked, disliked, handleLike, handleDislike }) {
    return (
        <div className="bar">
            <div className="left-content-tool">
                <img className="card-image" src={userImg} alt="User" />
                <div className="card-details">
                    <h1 className="card-name">{userName}</h1>
                </div>
            </div>

            <div className="right-content-tool">
                <div className="other-buttons">
                    <div className='like-dislike'>
                        <h6>{likeCount} likes</h6>
                        <button type="button" className="btn btn-light" onClick={handleLike}>{liked ? 'Unlike' : 'Like'}</button>
                        <button type="button" className="btn btn-light" onClick={handleDislike}>{disliked ? 'Undislike' : 'Dislike'}</button>
                    </div>
                    <button type="button" className="btn btn-lg btn-secondary" data-bs-toggle="popover"
                        data-bs-title="Share the video" data-bs-content="web\footube\src\telegramIcon.png">Share</button>
                </div>
            </div>
        </div>
    );
}

export default LikeToolbar;
