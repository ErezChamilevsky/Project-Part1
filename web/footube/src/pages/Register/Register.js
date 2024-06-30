import React, { useState, useRef } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';


function Register() {

    const fileInputRef = useRef(null);  // Create a ref for the file input element

    const [errorMessages, setErrorMessages] = useState('')  // hold the error messages that return from the server  
    const [successMessage, setSuccessMessage] = useState('')
    const [newUser, setNewUser] = useState({   // hold the current user that register
        userName: '',
        userPassword: '',
        userConfirmPassword: '',
        displayName: '',
        userImgFile: null,
    });


    const handleInputChange = (event) => {
        const { name, value, files } = event.target;
        if (name === 'userImgFile') {  //handle with file input for userImgFile
            const file = files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewUser({ ...newUser, [name]: reader.result });
            };
            reader.readAsDataURL(file);
        } else {
            setNewUser({ ...newUser, [name]: value });
        }
    };



    const userRegister = async () => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:12345/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUser)
            });
            const data = await response.json();
            if (response.status === 409) {
                setErrorMessages(data.message || '');  //extarct the error messages from the response
                setSuccessMessage('');  //clear the success message
            } else {  
                setSuccessMessage(data.message || ''); //extarct the success message from the response}
                setErrorMessages('');  //clear the error messages   
                setNewUser({   //clear the input fields
                    userName: '',
                    userPassword: '',
                    userConfirmPassword: '',
                    displayName: '',
                    userImgFile: null,
                });
                  fileInputRef.current.value = '';  // Clear the file input field
        }  
        
        } catch (error) {
            console.log('Error during registration:', error);
        }
    };


    return (
        <div className="main-div">
            <Link to='/login' className="cr-acc btn btn-info login-page-link">Login Page</Link>
            <div className="card">
                <div className="card-body">
                    Sign in Form
                </div>
            </div>
            <div className="frame">
                <form onSubmit={userRegister}>
                    <div className="form-group row sign-up-field">
                        <label htmlFor="userName" className="col-sm-2 col-form-label">UserName</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                name="userName"
                                placeholder="UserName"
                                value={newUser.userName}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="form-group row sign-up-field">
                        <label htmlFor="displayName" className="col-sm-2 col-form-label">Display Name</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                name="displayName"
                                placeholder="The name that display at App"
                                value={newUser.displayName}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="form-group row sign-up-field">
                        <label htmlFor="userPassword" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input
                                type="password"
                                className="form-control"
                                name="userPassword"
                                placeholder="Password"
                                value={newUser.userPassword}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="form-group row sign-up-field">
                        <label htmlFor="userConfirmPassword" className="col-sm-2 col-form-label">Confirm Password</label>
                        <div className="col-sm-10">
                            <input
                                type="password"
                                className="form-control"
                                name="userConfirmPassword"
                                placeholder="Confirm Password"
                                value={newUser.userConfirmPassword}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="form-group row sign-up-field">
                        <label htmlFor="userImgFile" className="col-sm-2 col-form-label">Upload Image</label>
                        <div className="col-sm-10">
                            <input
                                type="file"
                                className="form-control"
                                name="userImgFile"
                                accept="image/*"
                                ref={fileInputRef}  // Attach the ref to the file input
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    {/*visulation of user profile image*/}
                    {newUser.userImgFile && (
                                <div className="preview">
                                    <img src={newUser.userImgFile} alt="Preview" className="img-preview" />
                                </div>
                            )}
                    {/*sign in button*/}
                    <div className="form-group row">
                        <div className="col-sm-10">
                            <button type="submit" className="btn btn-primary sign-in-btn">Sign in</button>
                        </div>
                    </div>
                </form>
                {/*visulation if registerion not complete successfuly*/}
                {errorMessages && (
                <div className="form-group row">
                    <div className="col-sm-10">
                        <small className="text-error" style={{ color: 'red', fontWeight: 'bold' }}>
                            {errorMessages}
                        </small>
                    </div>
                </div>
            )}
             {/*visulation if registerion complete successfuly*/}
                {successMessage && (
                <div className="form-group row">
                    <div className="col-sm-10">
                        <small className="text-success" style={{ color: 'green', fontWeight: 'bold' }}>
                            {successMessage}
                        </small>
                    </div>
                </div>
            )}
            </div>
        </div>
    );
};

export default Register;
