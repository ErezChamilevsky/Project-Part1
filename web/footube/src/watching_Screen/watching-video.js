import './watching-video.css'
import React from 'react';
import Details from './details-section/details';
import Like_toolbar from './like-toolbar/like-toolbar';
import Comments from './comments-section/comments';
import AddComment from './comments-section/add-comment';

import users from '../data/user.json';

function Watch() {
  return (

    <div class="container">
      <div class="up-toolbar">
        <p>this is a tool bar
        </p>
      </div>
      <div className='video-container'>
        <div class='left-block'>
          <div class='display'>
            <iframe width="875" height="450"
              src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>
          </div>
          <div className='descreptions'>
            <div className='title'>
              <h>This is the name of the videos</h>
            </div>
            <Like_toolbar></Like_toolbar>
            <Details></Details>
            
            <div className='comment-section'>
              <AddComment></AddComment>

              <Comments></Comments>
              <Comments></Comments>
              <Comments></Comments>
            </div>

          </div>
        </div>
        <div class='right-block'>
          <h>other title</h>
          <p>some other text</p>
        </div>
      </div>
    </div>
  )
}

export default Watch;