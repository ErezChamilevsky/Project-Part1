import '../Homepage.css'

function VideoItem(videos) {

    const handleOnClick= () => {
        alert("LIOZ GAY");
    }

    return (
        <div className="video_Homepage">
            <div className="video__thumbnail_Homepage" >
                <button className="video_click_button_Homepage" onClick={handleOnClick}>
                    <img src={videos.img}/>
                </button>
            </div>
            <div className="video__details_Homepage">
                <div className="author_Homepage">
                    <img src={videos.uploader_pic}/>
                </div>
                <div className="title_Homepage">
                    <h3>
                        {videos.title}
                    </h3>
                    <a href="">{videos.artist}</a>
                    <span>{videos.views} Views • {videos.publication_date}</span>
                </div>
            </div>
        </div>
    );
}


export default VideoItem;