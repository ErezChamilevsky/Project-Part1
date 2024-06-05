import React from 'react';
import "./like-toolbar.css";

function Like_toolbar({ userName, userImg, userFolNum, likes }) {
    return (
        <div className="bar">
            
            <div className="left-content-tool">
                <img className="card-image" src={userImg} />
                <div className="card-details">
                    <h1 className="card-name">{userName}</h1>
                    <p className="card-followers">{userFolNum} followers</p>
                </div>
                <button type="button" className="btn btn-dark">Subscribe</button>
            </div>

            <div className="right-content-tool">
                <div className="other-buttons">
                    <div className='like-dislike'>
                        <h6>{likes} likes</h6>
                        <button type="button" className="btn btn-light">Like</button>
                        <button type="button" className="btn btn-light">Dislike</button>

                    </div>
                    <button type="button" className="btn btn-secondary">Share</button>
                    <button type="button" className="btn btn-secondary">Save</button>
                    <button type="button" className="btn btn-secondary">...</button>
                </div>
            </div>
        </div>
    );
}

export default Like_toolbar;
