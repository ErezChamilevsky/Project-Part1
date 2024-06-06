import './App.css';
import Login from './pages/Login/login.js';
import Register from './pages/Register/Register.js';
import React, { useState } from 'react';

function App() {
  const [users, setUsers] = useState([]); // define users array

  return (
    <div>
      <Login users={users}/>
      <Register users={users} setUsers={setUsers}/>
    </div>
  );
}

export default App;
