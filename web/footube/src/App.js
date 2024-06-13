import './App.css';
import Login from './pages/Login/login.js';
import Register from './pages/Register/Register.js';
import AddNewVideoScreen from './pages/AddNewVideoScreen/AddNewVideoScreen.js';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';


function App() {
  const [users, setUsers] = useState([]); // define users array
  const [loggedUser, setLoggedUser] = useState();
  const [userSerialNumber, setUserSerialNumber] = useState(1);
  const [videoSerialNumber, setVideoSerialNumber] = useState(1);
  const[videos, setVideos] = useState([]);

  return (
    <div>
      <Routes>
        <Route path="/" element={ <Login users={users} loggedUser={loggedUser} setLoggedUser={setLoggedUser}/> } />
        <Route path='/register' element={ <Register users={users} setUsers={setUsers} userSerialNumber={userSerialNumber} setUserSerialNumber={setUserSerialNumber}/> }></Route>
        <Route path='/addNewVideoScreen' element={ < AddNewVideoScreen loggedUser={loggedUser} videos={videos} setVideos={setVideos} videoSerialNumber={videoSerialNumber} setVideoSerialNumber={setVideoSerialNumber} /> }></Route>
       </Routes>
    </div>

  );
}

export default App;
