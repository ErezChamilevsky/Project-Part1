import React, { useState, useEffect } from 'react';
import "./like-toolbar.css";

function LikeToolbar({ userName, userImg, userFolNum, vidLikes }) {
    const [likeCount, setLikeCount] = useState(vidLikes);
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);

    useEffect(() => {
        // Enable Bootstrap popover
        const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
        const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new window.bootstrap.Popover(popoverTriggerEl));

        // Cleanup function to destroy popovers on component unmount
        return () => {
            popoverList.forEach(popover => popover.dispose());
        };
    }, []); // Empty dependency array ensures this runs only once after the component mounts

    const handleLike = () => {
        if (!liked) {
            setLikeCount(likeCount + 1);
            setLiked(true);
            setDisliked(false);
        }
    };

    const handleDislike = () => {
        if (!disliked) {
            setLikeCount(likeCount - 1);
            setLiked(false);
            setDisliked(true);
        }
    };

  

    return (
        <div className="bar">
            <div className="left-content-tool">
                <img className="card-image" src={userImg} alt="User" />
                <div className="card-details">
                    <h1 className="card-name">{userName}</h1>
                    <p className="card-followers">{userFolNum} followers</p>
                </div>
                <button type="button" className="btn btn-dark">Subscribe</button>
            </div>

            <div className="right-content-tool">
                <div className="other-buttons">
                    <div className='like-dislike'>
                        <h6>{likeCount} likes</h6>
                        <button type="button" className="btn btn-light" onClick={handleLike} disabled={liked}>Like</button>
                        <button type="button" className="btn btn-light" onClick={handleDislike} disabled={disliked}>Dislike</button>
                    </div>
                    <button type="button" className="btn btn-lg btn-secondary" data-bs-toggle="popover"
                        data-bs-title="Share the video" data-bs-content="web\footube\src\telegramIcon.png">Share</button>
                    
                </div>
            </div>
        </div>
    );
}

export default LikeToolbar;