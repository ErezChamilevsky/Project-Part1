import './watching-video.css'
import React from 'react';
import Details from './details-section/details';
import Like_toolbar from './like-toolbar/like-toolbar';
import AddComment from './comments-section/add-comment';
import users from '../data/user.json';
import VideoList from './video-list/video-list';
import CommentSection from './comments-section/commentsSection';


function Watch() {
  return (
    <div className="container">
      <div class="up-toolbar">
        <div className="up-toolbar">
          <p>this is a tool bar
           </p>
      </div>
      <div className='video-container'>
        <div class='left-block'>
          <div class='vid-display'>
            <iframe width="875" height="450"
              src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>
          </div>
          <div className='descriptions'>
            <div className='title'>
              <h>This is the name of the videos</h>
            </div>
            <Like_toolbar
              userName={users[0].user_name}
              userImg={users[0].user_img}
              userFolNum={users[0].followers_number}
            />
            <Details></Details>

            <div className='comment-section'>
              <AddComment></AddComment>

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