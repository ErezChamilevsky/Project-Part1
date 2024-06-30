import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

import './login.css'; 


function Login() {

    const [errorMessages, setErrorMessages] = useState('')  // hold the error messages that return from the server
    const [loginUser, setLoginUser] = useState({userName: '', userPassword: ''});

    const navigate = useNavigate(); // Initialize the navigate function
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setLoginUser({ ...loginUser, [name]: value });
        console.log(loginUser); // to check the login user object
        }


    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:12345/api/tokens', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginUser)
            });
            const data = await response.json();
            if (response.status === 404) { //login faild
                setErrorMessages(data.message || '');  //extarct the error messages from the response
            } else {  //login is success
                setErrorMessages('');  //clear the error messages
                localStorage.setItem('token', data.token); // Save the token in local storage 
                setLoginUser({   //clear the input fields
                  userName: '',
                  userPassword: '',   
                });
                navigate('/'); // Navigate to the home page on successful login
        }  
        
        } catch (error) {
            console.log('Error during login:', error);
        }

    }
 
    
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
                  name="userName"
                  value={loginUser.userName}
                  onChange={handleInputChange} // Update state on input change
                  required
                />
               </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className={`form-control`}
                  name="userPassword"
                  value={loginUser.userPassword}
                  onChange={handleInputChange} // Update state on input change
                  required
                />
              </div>
              <button onClick={handleLogin} type="submit" className="btn btn-danger btn-block login-button ">
                Login
              </button>
                {/* this visualition if userName or password are wrong*/}
                {errorMessages && (
                <div className="form-group row">
                    <div className="col-sm-10">
                        <small className="text-error" style={{ color: 'red', fontWeight: 'bold' }}>
                            {errorMessages}
                        </small>
                    </div>
                </div>
            )}
              <p className="not-registered ">Not registered?</p>    
                  <Link to='/register' className="cr-acc btn btn-info registerButton">Create an account</Link>    
            </form>
          </div>
        </div>
      );
    };
    
    export default Login;
    