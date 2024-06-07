import React from "react";
import './AddNewVideoScreen.css';

function AddNewVideoScreen(){
    return (
        <div>
            <button type="button" class="btn btn-primary home-btn">Home</button>

            <div className="title">Uplaod Video</div>
                <div className="vid-tit">Video Title</div>
                    <textarea className="vid-tit-input" placeholder="Type here..." />
                <div className="vid-dis-tit">Video Description</div>
                    <textarea className="vid-dis-input" placeholder="Type here..."/>
                    
                    
                    <div className="col-sm-10">
                        <input type="file" className=" form-control vid-upl" accept="video/*"/>
                    </div>
        </div>
    )
}

export default AddNewVideoScreen;