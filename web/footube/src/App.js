import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Watch from './watching_Screen/watchingPage';
import vidData from './data/vid.json'; //needed to change to state
import userDataList from './data/user.json'; //needed to change to state
import Login from './pages/Login/login.js';
import Register from './pages/Register/Register.js';
import AddNewVideoScreen from './pages/AddNewVideoScreen/AddNewVideoScreen.js';
import Homepage from './pages/Homepage/Homepage.js';
import React, { useState } from 'react';
import { useEffect } from 'react';


function App() {

  const [loggedUser, setLoggedUser] = useState();
  const [userSerialNumber, setUserSerialNumber] = useState(3);
  const [videoSerialNumber, setVideoSerialNumber] = useState(11);
  const [users, setUsers] = useState(userDataList);
  const [videos, setVideos] = useState(vidData);

  return (

    <div>
      <Routes>
        <Route path="/" element= {<Homepage loggedUser={loggedUser} currentVideos={videos} setCurrentVideos={setVideos} />}/>
        <Route path="/login" element={ <Login users={users} loggedUser={loggedUser} setLoggedUser={setLoggedUser}/> } />
        <Route path='/register' element={ <Register users={users} setUsers={setUsers} userSerialNumber={userSerialNumber} setUserSerialNumber={setUserSerialNumber}/> }></Route>
        <Route path='/addNewVideoScreen' element={ < AddNewVideoScreen loggedUser={loggedUser} videos={videos} setVideos={setVideos} videoSerialNumber={videoSerialNumber} setVideoSerialNumber={setVideoSerialNumber} /> }></Route>
        <Route path='/watch/:vid_id' element={<Watch videoDataList={videos} userDataList={users} loggedUser={loggedUser}/>} />
      </Routes>
    </div>
  );
}

export default App;