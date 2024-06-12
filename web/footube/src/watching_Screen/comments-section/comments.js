import React, { useState, useEffect } from 'react';
import userImage from '../../data/user.json';
import './comments.css'; // Make sure to import your CSS file

function Comments() {
    const [userImage, setUserImage] = useState([]);

    useEffect(() => {
        setUserImage(userImage);
    }, []);


    return (

        <div className='comment-block'>
            <img className="user-image" src={userImage.img} />


            <div className='right-content'>
                <div className='user-name'>
                    <h1>Name</h1>
                </div>
                <div className='comment-text'>
                    <p>this is the comment</p>
                </div>
            </div>
        </div>


    );


}
export default Comments;