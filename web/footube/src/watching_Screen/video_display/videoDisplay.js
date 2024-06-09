function VideoDisplay({video_src}){
    
    
    return(
        <video controls>
            <source src={video_src} type="video/mp4" />
        </video>
    );
}


export default VideoDisplay;