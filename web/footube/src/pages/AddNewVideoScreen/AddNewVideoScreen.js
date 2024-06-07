import React from "react";
import './AddNewVideoScreen.css';
import { Link } from 'react-router-dom';

function AddNewVideoScreen(){
    return (
        <div>
            <Link to='/' className="cr-acc btn btn-info login-page-btn">Login Page</Link>    
            <div className="title">Uplaod Video</div>
                <div className="vid-tit">Video Title</div>
                    <textarea className="vid-tit-input" placeholder="Type here..." />
                <div className="vid-dis-tit">Video Description</div>
                    <textarea className="vid-dis-input" placeholder="Type here..."/>
                    
                    {/* this frame for uopload the new video*/ }
                    <div className="col-sm-10">
                        <input type="file" className=" form-control vid-upl" accept="video/*"/>
                    </div>
        </div>
    )
}

export default AddNewVideoScreen;