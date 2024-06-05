import React, { useState } from 'react';
import './login.css'; // Ensure this path is correct

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordTouched, setPasswordTouched] = useState(false);

  const validatePassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);

    if (password.length < minLength) {
      return 'Password must be at least 8 characters long.';
    }
    if (!hasUpperCase) {
      return 'Password must contain at least one uppercase letter.';
    }
    if (!hasLowerCase) {
      return 'Password must contain at least one lowercase letter.';
    }
    if (!hasNumbers) {
      return 'Password must contain at least one number.';
    }
    return '';
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const error = validatePassword(password);
    if (error) {
      setPasswordError(error);
      return;
    }
    // Handle login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card login-card">
        <h2 className="text-center login-title">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
           </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className={`form-control ${passwordError ? 'is-invalid' : ''}`}
              id="password"
              value={password}
              onChange={handlePasswordChange}
              onFocus={() => setPasswordTouched(true)}
              required
            />
            {passwordError && <div className="invalid-feedback">{passwordError}</div>}
            {passwordTouched && !passwordError && (
              <div className="valid-feedback d-block">
                Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and the rest numbers.
              </div>
            )}
          </div>
          <button type="submit" className="btn btn-primary btn-block login-button ">
            Login
          </button>
          <p className="not-registered ">Not registered?</p>    
              <a href="#" className="cr-acc btn btn-info" >Create an account </a>     
        </form>
      </div>
    </div>
  );
};

export default Login;
