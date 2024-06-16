import './watchingPage.css';
import Details from './details-section/details';
import VideoList from './video-list/video-list';
import CommentSection from './comments-section/commentsSection';
import { useParams } from 'react-router-dom';
import VideoDisplay from './video_display/videoDisplay';
import React, { useState, useEffect } from 'react';
import commentsDataList from '../data/comments.json';
import LikesHandler from './like-toolbar/likesHandler';
import SearchBar from '../pages/Homepage/searchBar/SearchBar';


function Watch({ videoDataList, userDataList, loggedUser, setLoggedUser }) {
  const { vid_id } = useParams();  // Extract vid_id from useParams
  const intId = parseInt(vid_id, 10);

  const [commentList, setCommentList] = useState(commentsDataList);

  let currentVideoFromVideoList = videoDataList.find(video => video.id === intId);
  let currentUser = userDataList[0];
  

  const [likesData, setLikesData] = useState({});

  // Set initial likes data for the current video if not already set
  useEffect(() => {
    if (!likesData[intId]) {
      setLikesData(prev => ({
        ...prev,
        [intId]: {
          likeCount: currentVideoFromVideoList.likes,
          liked: false,
          disliked: false
        }
      }));
    }
  }, [intId, currentVideoFromVideoList.likes, likesData]);
  

  return (
    <div className="container">

      <div className="up-toolbar">
        <SearchBar setCurrentVideos={videoDataList} loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
      </div>
      <div className='video-container'>

        <div className='left-block'>
          <div className='vid-display'>
            <VideoDisplay vid_src={currentVideoFromVideoList.video_src}/>
          </div>
          <div className='descriptions' key={intId}>
            <div className='vidTitle'>
              <h4>{currentVideoFromVideoList.title}</h4>
            </div>
            <LikesHandler
              userName={currentUser.displayName}
              userImg={currentUser.userImgFile}
              vidLikes={currentVideoFromVideoList.likes}
              likesData={likesData}
              setLikesData={setLikesData}
            />
            <Details
              details={currentVideoFromVideoList.details}
              viewsNum={currentVideoFromVideoList.views}
              uploadDate={currentVideoFromVideoList.publication_date}
            />
            <div className='comment-section'>
              <CommentSection commentList={commentList} setCommentList={setCommentList} loggedUser={loggedUser}/>
            </div>
          </div>
        </div>
        <div className='right-block-vid-list'>
          <VideoList videoData={videoDataList} />
        </div>
      </div>
    </div>
  );
}

export default Watch;
