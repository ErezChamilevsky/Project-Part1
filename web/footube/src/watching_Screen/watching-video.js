import './watching-video.css'
import React from 'react';
import Details from './details';
import Card from './card';

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
            <div className='like-toolbar'>
              <Card></Card>
            </div>
            <Details></Details>
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