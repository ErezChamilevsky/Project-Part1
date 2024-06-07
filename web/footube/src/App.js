import './App.css';
import Login from './pages/Login/login.js';
import Register from './pages/Register/Register.js';
import AddNewVideoScreen from './pages/AddNewVideoScreen/AddNewVideoScreen.js';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [users, setUsers] = useState([]); // define users array

  return (
    <div>
        {/*< AddNewVideoScreen />*/}
      <Routes>
        <Route path="/" element={ <Login users={users}/> } />
        <Route path='/register' element={ <Register users={users} setUsers={setUsers}/> }></Route>
        <Route path='/addNewVideoScreen' element={ < AddNewVideoScreen /> }></Route>
       </Routes>
    </div>

  );
}

export default App;
