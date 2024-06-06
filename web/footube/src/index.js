import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Watch from './watching_Screen/watching-video';
import videoData from './data/vid.json'; 
import { BrowserRouter } from 'react-router-dom';



// const selectedVideo = videoData[0]; // Change the index to select different videos

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>
);

reportWebVitals();
