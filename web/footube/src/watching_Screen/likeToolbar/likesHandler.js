import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LikeToolbar from './likeToolbar'; // Adjust the import path as needed

function LikesHandler({ userId, vidLikes, likesData, setLikesData }) {
    const { vid_id } = useParams();
    const intId = parseInt(vid_id, 10);

    const [likeCount, setLikeCount] = useState(vidLikes);
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);

    useEffect(() => {
        const storedLikesData = JSON.parse(localStorage.getItem('likesData')) || {};
        if (storedLikesData[intId]) {
            setLikeCount(storedLikesData[intId].likeCount);
            setLiked(storedLikesData[intId].liked);
            setDisliked(storedLikesData[intId].disliked);
        } else {
            setLikeCount(vidLikes);
            setLiked(false);
            setDisliked(false);
        }
    }, [vid_id, vidLikes, intId]);

    const updateLocalStorage = (videoId, updatedData) => {
        const storedLikesData = JSON.parse(localStorage.getItem('likesData')) || {};
        storedLikesData[videoId] = updatedData;
        localStorage.setItem('likesData', JSON.stringify(storedLikesData));
    };

    const handleLike = async () => {
        try {
            if (liked) {
                // Dislike the video
                await fetch(`/api/videos/${intId}/likes`, {
                    method: 'DELETE', // API call to dislike the video
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}` // Use the token from local storage
                    },
                });
                setLikeCount(prevCount => prevCount - 1);
                setLiked(false);
                const updatedData = { ...likesData[intId], likeCount: likeCount - 1, liked: false };
                setLikesData(prev => ({ ...prev, [intId]: updatedData }));
                updateLocalStorage(intId, updatedData);
            } else {
                // Like the video
                await fetch(`/api/videos/${intId}/likes`, {
                    method: 'POST', // API call to like the video
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}` // Use the token from local storage
                    },
                });
                setLikeCount(prevCount => prevCount + (disliked ? 2 : 1));
                setLiked(true);
                setDisliked(false);
                const updatedData = {
                    ...likesData[intId],
                    likeCount: likeCount + (disliked ? 2 : 1),
                    liked: true,
                    disliked: false,
                };
                setLikesData(prev => ({ ...prev, [intId]: updatedData }));
                updateLocalStorage(intId, updatedData);
            }
        } catch (error) {
            console.error('Error updating like status:', error);
        }
    };

    const handleDislike = async () => {
        try {
            if (disliked) {
                // Remove dislike
                await fetch(`/api/videos/${intId}/likes`, {
                    method: 'POST', // API call to remove the dislike
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}` // Use the token from local storage
                    },
                });
                setLikeCount(prevCount => prevCount + 1);
                setDisliked(false);
                const updatedData = { ...likesData[intId], likeCount: likeCount + 1, disliked: false };
                setLikesData(prev => ({ ...prev, [intId]: updatedData }));
                updateLocalStorage(intId, updatedData);
            } else {
                // Dislike the video
                await fetch(`/api/videos/${intId}/likes`, {
                    method: 'DELETE', // API call to dislike the video
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}` // Use the token from local storage
                    },
                });
                setLikeCount(prevCount => prevCount - (liked ? 2 : 1));
                setLiked(false);
                setDisliked(true);
                const updatedData = {
                    ...likesData[intId],
                    likeCount: likeCount - (liked ? 2 : 1),
                    liked: false,
                    disliked: true,
                };
                setLikesData(prev => ({ ...prev, [intId]: updatedData }));
                updateLocalStorage(intId, updatedData);
            }
        } catch (error) {
            console.error('Error updating dislike status:', error);
        }
    };

    return (
        <div>
            <LikeToolbar
                userId={userId}
                likeCount={likeCount}
                liked={liked}
                disliked={disliked}
                handleLike={handleLike}
                handleDislike={handleDislike}
            />
        </div>
    );
}

export default LikesHandler;
