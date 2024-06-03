import React from 'react';
import srutonimLogo from "./srutonimLogo.jpg";
import "./like-toolbar.css";

function Card() {
    return (
        <div className="card">
            <div className="left-content">
                <img className="card-image" src={srutonimLogo} alt="Srutonim Logo" />

                <div className="card-details">

                    <h1 className="card-name">Name of the user</h1>
                    <p className="card-followers">Num of followers</p>
                </div>
                <button type="button" className="btn btn-dark">Subscribe</button>
            </div>
            <div className="right-content">
                <div className="other-buttons">
                    <button type="button" className="btn btn-secondary like">Like</button>
                    <button type="button" className="btn btn-secondary dislike">Dislike</button>
                </div>
            </div>
        </div>
    );
}

export default Card;
