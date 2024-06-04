import React, { useState, useEffect } from 'react';
import "./like-toolbar.css";
import user from '../../data/user.json';

function Like_toolbar() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        setUser(user);
    }, []);

    return (
        <div className="card">

            <div className="left-content">
                <img className="card-image" src={user.img} />

                <div className="card-details">

                    <h1 className="card-name">{user.user_name}</h1>
                    <p className="card-followers">{user.followers_number}</p>
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
