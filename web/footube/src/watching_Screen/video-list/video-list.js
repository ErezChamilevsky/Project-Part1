import React, { useState, useEffect } from 'react';
import './video-list.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import videoData from '../../data/vid.json';

const VideoList = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        setVideos(videoData);
    }, []);

    return (
        <div className="video-list">
            {videos.map((video) => (
                <div key={video.id} className="video-item">
                    <div className="video-thumbnail">
                        <img src={video.img} />
                    </div>
                    <div className="video-details">
                        <h3 className="video-title">{video.title}</h3>
                        <p className="video-uploader">{video.uploader}</p>
                        <p className="video-meta">
                            {video.views} views &bull; {video.timeSinceUpload}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default VideoList;
