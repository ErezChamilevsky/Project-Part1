import React from 'react';
import srutonimLogo from "./srutonimLogo.jpg";
import "./like-toolbar.css";

function Card() {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img className="card-img-top" src={srutonimLogo} alt="Srutonim Logo" />
            <div className="card-body">
                <h5 className="card-title">Name of the user</h5>
                <p className="card-text">Num of followers</p>
                <button type="button" className="btn btn-dark custom-button">Subscribe</button>
            </div>
        </div>
    );
}

export default Card;
