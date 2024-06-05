import React from 'react';
import userImage from '../../data/user.json';
import './comment.css'; // Make sure to import your CSS file

function Comment({ userName, userImg, comment }) {
    
    return (

        <div className='comment-block'>
            <img className="user-image" src={userImg} />


            <div className='right-content'>
                <div className='user-name'>
                    <h1>{userName}</h1>
                </div>
                <div className='comment-text'>
                    <p>{comment}</p>
                </div>
            </div>
        </div>


    );


}
export default Comment;