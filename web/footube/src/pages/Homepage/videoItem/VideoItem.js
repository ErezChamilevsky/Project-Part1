import '../Homepage.css'
import { Link } from 'react-router-dom';

function VideoItem(videos) {


    return (
        <div className="video_Homepage">
            <Link key={videos.id} to={`videos/${videos.id}`}>
                <div className="video__thumbnail_Homepage" >

                    <img src={videos.img} />

                </div>
                <div className="video__details_Homepage">
                    <div className="author_Homepage">
                    </div>
                    <div className="title_Homepage">
                        <h3>
                            {videos.title}
                        </h3>
                        <a href="">{videos.displayName}</a>
                        <span>{videos.views} Views • {videos.publicationDate}</span>
                    </div>
                </div>
            </Link>
        </div>
    );
}


export default VideoItem;
