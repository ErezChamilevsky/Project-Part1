import React from 'react';

function VideoDisplay({ vid_src }) {
    return (
        <video key={vid_src} controls>
            <source src={vid_src} type="video/mp4" />
        </video>
    );
}

export default VideoDisplay;