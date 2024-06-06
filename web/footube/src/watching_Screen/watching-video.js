import './watching-video.css'
import React from 'react';
import Details from './details-section/details';
import Like_toolbar from './like-toolbar/like-toolbar';
import AddComment from './comments-section/add-comment';
import users from '../data/user.json';
import VideoList from './video-list/video-list';
import CommentSection from './comments-section/commentsSection';
import commentsData from '../data/comments.json';
import { useParams } from 'react-router-dom';

function Watch({ videoDataList }) {

  const { vid_id } = useParams();  // Extract vid_id from useParams

  const intId = parseInt(vid_id, 10);

  console.log(intId);

  // Find the video object with the provided vid_id
  const currentVideoFromVideoList = videoDataList.find(video => video.id === intId);
  console.log(currentVideoFromVideoList);

  // If the video is not found, return a message or handle the case accordingly
  if (!currentVideoFromVideoList) {
    return <div>Video not found</div>;  // You can also return a message or component indicating the video was not found
  }

  // Find the user object with the same user_id as the current video
  const currentUser = users.find(user => user.user_id === currentVideoFromVideoList.user_id);
  if (!currentUser) {
    return <div>User not found</div>;  // You can return a message or handle this case accordingly
  }

  // Filter the comments for the current video
  const currentComments = commentsData.filter(comment => comment.video_id === currentVideoFromVideoList.id);

  return (
    <div className="container">
      <div className="up-toolbar">
        <div className="up-toolbar">
          <p>this is a tool bar</p>
        </div>
        <div className='video-container'>
          <div className='left-block'>
            <div className='vid-display'>
              <video controls>
                <source src={currentVideoFromVideoList.video_src} type="video/mp4" />
              </video>
            </div>
            <div className='descriptions'>
              <div className='title'>
                <h>{currentVideoFromVideoList.title}</h>
              </div>
              {/* Pass user data to Like_toolbar */}
              <Like_toolbar
                userName={currentUser.user_name}
                userImg={currentUser.user_img}
                userFolNum={currentUser.followers_number}
                vidLikes={currentVideoFromVideoList.likes}
              />
              <Details
                details={currentVideoFromVideoList.details}
                viewsNum={currentVideoFromVideoList.views}
                uploadDate={currentVideoFromVideoList.publication_date}
              />
              <div className='comment-section'>
                {/* <AddComment></AddComment> */}
                <CommentSection comments={currentComments} />
              </div>
            </div>
          </div>
          <div className='right-block-vid-list'>
            <VideoList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Watch;
