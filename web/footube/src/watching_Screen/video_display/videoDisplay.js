import React from 'react';

function VideoDisplay({ videoSrc }) {
    return (
        <video key={videoSrc} autoplay="true" controls >
            <source src={videoSrc} type="video/mp4" />
        </video>
    );
}

export default VideoDisplay;