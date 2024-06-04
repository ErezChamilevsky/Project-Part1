import React from 'react';
import './comments.css'; // Make sure to import your CSS file
import Chad from "./chadLogo.jpg"

function Comments(){
return (
    <div className='comment-block'>
        <img className="user-image" src={Chad} />

        
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