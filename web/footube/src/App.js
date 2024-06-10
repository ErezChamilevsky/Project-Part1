import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Watch from './watching_Screen/watchingPage';
import vidData from './data/vid.json'; //needed to change to state
import userDataList from './data/user.json'; //needed to change to state
import Login from './pages/Login/login.js';
import Register from './pages/Register/Register.js';
import AddNewVideoScreen from './pages/AddNewVideoScreen/AddNewVideoScreen.js';
import React, { useState } from 'react';




function App() {
  const [users, setUsers] = useState(userDataList); // define users array
  const [videos, setVideos] = useState(vidData);

  return (
    <div>
      <Routes>
        <Route path="/" element={ <Login users={users}/> } />
        <Route path='/register' element={ <Register users={users} setUsers={setUsers}/> }></Route>
        <Route path='/addNewVideoScreen' element={ < AddNewVideoScreen /> }></Route>
        <Route path='/watch/:vid_id' element={<Watch videoDataList={videos} userDataList={users}/>} />
       </Routes>
    </div>


  );
}

export default App;
