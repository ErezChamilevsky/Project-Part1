import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Watch from './watching_Screen/watching-video';
import vidData from './data/vid.json'; //needed to change to state
import userDataList from './data/user.json'; //needed to change to state
import commentsDataList from './data/comments.json';

import Login from './pages/Login/login.js';
import Register from './pages/Register/Register.js';
import AddNewVideoScreen from './pages/AddNewVideoScreen/AddNewVideoScreen.js';
import react, { useState } from 'react';
import Homepage from './pages/Homepage/Homepage.js';
import userData from './data/user.json'
import videos from './data/vid.json'


function App() {

  const [users, setUsers] = useState([]); // define users array

  const [loggedUser, setLoggedUser] = useState([]);

  const [currentVideos, setCurrentVideos] = useState(videos)

  return (

    <div>
      <Routes>
        <Route path="/" element= {<Homepage loggedUser={users} currentVideos={currentVideos} setCurrentVideos={setCurrentVideos} />}/>
        <Route path="/login" element={ <Login users={users}/> } />
        <Route path='/register' element={ <Register users={users} setUsers={setUsers}/> }></Route>
        <Route path='/addNewVideoScreen' element={ < AddNewVideoScreen /> }></Route>
        <Route path='/watch/:vid_id' element={<Watch videoDataList={vidData} userDataList={userDataList} commentsDataList={commentsDataList} />} />
       </Routes>
    </div>

  );
}

export default App;