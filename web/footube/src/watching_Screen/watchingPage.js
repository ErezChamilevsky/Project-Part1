import React, { useState, useEffect } from 'react';
import './watchingPage.css';
import Details from './detailsSection/details';
import VideoList from './videoList/videoList';
import CommentSection from './commentsSection/commentsSection';
import { useParams } from 'react-router-dom';
import VideoDisplay from './videoDisplay/videoDisplay';
import SearchBar from '../pages/Homepage/searchBar/SearchBar';
import LikesHandler from './likeToolbar/likesHandler';

function Watch({ userDataList, loggedUser, setLoggedUser }) {
  const { vid_id } = useParams();
  const intId = parseInt(vid_id, 10);

  const [currentVideo, setCurrentVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [commentList, setCommentList] = useState([]);
  const [likesData, setLikesData] = useState({});

  //adding a param of loggedUser
  async function getVideo(intId) {
    let url;
    if (loggedUser && loggedUser.userId) {
      url = `http://localhost:12345/api/videos/${intId}?loggedUser=${loggedUser.userId}`;
    } else {
      url = `http://localhost:12345/api/videos/${intId}?loggedUser=-1`;
    }
    console.log(url);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (response.ok) {
        return data; //data is a specific video (who has intId as id)
      } else {
        throw new Error(data.errors || 'Failed to fetch video');
      }
    } catch (error) {
      console.error('Error fetching video:', error);
      return null;
    }
  }

  useEffect(() => {
    async function fetchComments() {
      const url = `http://localhost:12345/api/videos/${intId}/comments`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (response.ok) {
          setCommentList(data);
        } else {
          throw new Error(data.errors || 'Failed to fetch comments');
        }
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    }

    fetchComments();
  }, [intId]);

  useEffect(() => {
    setIsLoading(true);
    getVideo(intId).then(videoData => {
      setCurrentVideo(videoData); //set the current video to the video who get from the server
      setIsLoading(false);

      // Initialize likes data for the current video
      if (videoData) {
        setLikesData(prev => ({
          ...prev,
          [intId]: {
            likeCount: videoData.likes,
            liked: false,
            disliked: false
          }
        }));
      }
    });
  }, [intId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!currentVideo) {
    return (
      <div className="container">
        <div className="up-toolbar">
          <SearchBar />
        </div>
        <div className='video-container'>
          <div className='left-block'>
            <div className='vid-display'>
              <VideoDisplay videoSrc={null} />
            </div>
            <div className='descriptions'>
              <div className='vidTitle'>
                <h4>Video Not Found</h4>
              </div>
            </div>
          </div>
          <div className='right-block-vid-list'>
            <VideoList />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="up-toolbar">
        <SearchBar />
      </div>
      <div className='video-container'>
        <div className='left-block'>
          <div className='vid-display'>
            <VideoDisplay videoSrc={currentVideo.videoSrc} />
          </div>
          <div className='descriptions'>
            <div className='vidTitle'>
              <h4>{currentVideo.title}</h4>
            </div>
            <LikesHandler
              userId={currentVideo.userId}
              vidLikes={currentVideo.likes}
              likesData={likesData}
              setLikesData={setLikesData}
            />
            <Details
              details={currentVideo.description}
              viewsNum={currentVideo.views}
              uploadDate={currentVideo.publicationDate}
            />
            <div className='comment-section'>
              <CommentSection commentList={commentList} setCommentList={setCommentList} loggedUser={loggedUser} />
            </div>
          </div>
        </div>
        <div className='right-block-vid-list'>
          <VideoList />
        </div>
      </div>
    </div>
  );
}

export default Watch;
