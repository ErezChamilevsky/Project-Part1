import React, { useState, useEffect } from 'react';
import './videoList.css';
import { Link } from 'react-router-dom';

function VideoList() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        // Fetch videos from the server
        async function fetchRandomVideos() {
            const url = 'http://localhost:12345/api/videos/';
            try {
                const response = await fetch(url);
                const data = await response.json();
                setVideos(data); // Assuming data is an array of video objects
            } catch (error) {
                console.error('Error fetching random videos:', error);
            }
        }

        fetchRandomVideos();
    }, []);

    const DisplayVideoList = () => {
        if (!Array.isArray(videos) || videos.length === 0) {
            return <div>No videos available</div>;
        }

        return (
            <div className="video-list">
                {videos.map((video) => (
                    <Link key={video.id} to={`/videos/${video.id}`}>
                        <div className="video-item">
                            <div className="video-thumbnail">
                                <img src={video.img} alt={video.title} />
                            </div>
                            <div className="video-details">
                                <h3 className="video-title">{video.title}</h3>
                                <p className='video-meta'>{video.displayName}</p>
                                <p className="video-meta">
                                    {video.views} views &bull; {video.publicationDate}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        );
    };

    return <DisplayVideoList />;
}

export default VideoList;
