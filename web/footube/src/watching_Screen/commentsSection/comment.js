import React, { useState, useEffect } from 'react';
import './comment.css'; // Make sure to import your CSS file

function Comment({userId, comment }) {
    
    const [writer, setWriter] = useState([]);

    useEffect(() => {
        async function fetchWriterDetails() {
            const url = `http://localhost:12345/api/videos/users/${userId}`;
            try {
                const response = await fetch(url);
                const data = await response.json();
                console.log(data);
                if (response.ok) {
                    setWriter(data);
                } else {
                    throw new Error(data.errors || 'Failed to fetch comments');
                }
            } catch (error) {
                console.error('Error fetching comments:', error);
            }
        }

        fetchWriterDetails();
    }, [userId]);

    
    return (

        <div className='comment-block'>
            {/* <img className="user-image" src={userImg} alt='user' /> //TODO if there is time to fix the image*/} 

            <div className='right-content'>
                <div className='user-name'>
                    {writer.displayName}
                </div>
                <div className='comment-text'>
                    <p>{comment}</p>
                </div>
            </div>
        </div>


    );


}
export default Comment;