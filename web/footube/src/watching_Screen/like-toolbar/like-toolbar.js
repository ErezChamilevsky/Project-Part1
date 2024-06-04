import React from 'react';
import "./like-toolbar.css";

function Like_toolbar({ userName, userImg, userFolNum }) {
    return (
        <div className="card">
            <div className="left-content">
                <img className="card-image" src={userImg} />
                <div className="card-details">
                    <h1 className="card-name">{userName}</h1>
                    <p className="card-followers">{userFolNum} followers</p>
                </div>
                <button type="button" className="btn btn-dark">Subscribe</button>
            </div>
            <div className="right-content">
                <div className="other-buttons">
                    <button type="button" className="btn like">Like</button>
                    <button type="button" className="btn dislike">Dislike</button>
                    <button type="button" className="btn btn-secondary">Share</button>
                    <button type="button" className="btn btn-secondary">Save</button>
                    <button type="button" className="btn btn-secondary">...</button>
                </div>
            </div>
        </div>
    );
}

export default Like_toolbar;
