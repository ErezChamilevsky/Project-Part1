import './watching-video.css'
import React from 'react';
import Details from './details-section/details';
import Like_toolbar from './like-toolbar/like-toolbar';
import AddComment from './comments-section/add-comment';
import users from '../data/user.json';
import VideoList from './video-list/video-list';
import CommentSection from './comments-section/commentsSection';
import videoData from '../data/vid.json'; 
import commentsData from '../data/comments.json';



function Watch({ vid_id}) {

  // Find the index of the video with the provided vid_id
  const vidIndex = videoData.findIndex(video => video.id === vid_id);

  // If the video is not found, return null or handle the case accordingly
  if (vidIndex === -1) {
    return null; // You can also return a message or component indicating the video was not found
  }

  // Retrieve the video object based on the found index
  const currentVideoFromVideoList = videoData[vidIndex];

    // Find the index of the user with the same user_id as the current video
  const userIndex = users.findIndex(user => user.user_id === currentVideoFromVideoList.user_id);
  if (userIndex === -1) {
    return null; // You can return a message or handle this case accordingly
  }

  // Retrieve the user object based on the found index
  const currentUser = users[userIndex];

  // const commentIndex = commentsData.findIndex(comment => comment.video_id === currentVideoFromVideoList.id);

  // // If the comment is not found, handle the case accordingly
  // if (commentIndex === -1) {
  //   return null; // Or handle the case as needed
  // }

  // // Retrieve the comment object based on the found index
  // const currentComment = commentsData[commentIndex];
  

  return (
    <div className="container">
      <div class="up-toolbar">
        <div className="up-toolbar">
          <p>this is a tool bar</p>
        </div>
        <div className='video-container'>
          <div class='left-block'>
            <div class='vid-display'>
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
                likes={currentVideoFromVideoList.likes}
              />
              <Details></Details>
              <div className='comment-section'>
                {/* <AddComment></AddComment> */}
                <CommentSection></CommentSection>
              </div>
            </div>
          </div>
          <div class='right-block-vid-list'>
            <VideoList></VideoList>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Watch;
