import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link ,useNavigate} from 'react-router-dom';

import './login.css'; 

function Login({ users }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
      event.preventDefault(); // Prevent form submission and prvent delete the users state
      // Check if the entered username and password match any user in the users array
      const userExists = users.find(user => user.userName === username && user.password === password);

      if (userExists) {
          // User exists, perform necessary actions
          console.log("User exists!");
      } else {
          // User doesn't exist, handle accordingly
          console.log("User does not exist!");
      }
  };


    // Handle login logic here
    // Check if users array is updated
    console.log('Current Users in Login:', users);

    console.log('Username:', username);
    console.log('Password:', password);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="login-card">
        <h2 className="text-center login-title">Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)} // Update state on input change
              required
            />
           </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className={`form-control`}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update state on input change
              required
            />
          </div>
          <button onClick={handleLogin} type="submit" className="btn btn-primary btn-block login-button ">
            Login
          </button>
          <p className="not-registered ">Not registered?</p>    
              <button href="#" className="cr-acc btn btn-info" >Create an account </button>     
        </form>
      </div>
    </div>
  );
};

export default Login;
