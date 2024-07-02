import React, { useState, useRef } from 'react';
import './updateUser.css';
import { Link, useNavigate} from 'react-router-dom';



function UpdateUser({loggedUser, setLoggedUser}) {

    const navigate = useNavigate();  // Initialize the navigate function
    const fileInputRef = useRef(null);  // Create a ref for the file input element (userImgFile)

    const [errorMessages, setErrorMessages] = useState('')  // hold the error messages that return from the server  
    const [successMessage, setSuccessMessage] = useState('')
    const [updateUser, setUpdateUser] = useState({   // hold the current user that register
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
                setUpdateUser({ ...updateUser, [name]: reader.result });
            };
            reader.readAsDataURL(file);
        } else {
            setUpdateUser({ ...updateUser, [name]: value });
        }
    };



    const updateUserDetails = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:12345/api/users/' + loggedUser.userId ,{
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': 'bearer ' + localStorage.getItem('token') // attach the token
                },
                body: JSON.stringify(updateUser)
            });
            const data = await response.json();
            if (response.status === 404) {
                setErrorMessages(data.message || '');  //extarct the error messages from the response
                setSuccessMessage('');  //clear the success message
            } else { //update success 
                setSuccessMessage(data.message || ''); //extarct the success message from the response
                setErrorMessages('');  //clear the error messages
                setLoggedUser({
                    userId: loggedUser.userId,
                    userName: loggedUser.userName,
                    displayName: updateUser.displayName,
                    userImgFile: updateUser.userImgFile,
                });
                setUpdateUser({   //clear the input fields
                    userPassword: '',
                    userConfirmPassword: '',
                    displayName: '',
                    userImgFile: null,
                });
                  fileInputRef.current.value = '';  // Clear the file input field
                  navigate('/'); // Navigate to the home page on successful login
        }  
        
        } catch (error) {
            console.log('Error during details update:', error);
        }
    };


    return (
        <div className="main-div">
            <Link to='/login' className="cr-acc btn btn-info login-page-link">Login Page</Link>
            <div className="card">
                <div className="card-body">
                    update user details
                </div>
            </div>
            <div className="frame">
                <form onSubmit={updateUserDetails}>
                    <div className="form-group row sign-up-field">
                        <label htmlFor="displayName" className="col-sm-2 col-form-label">Display Name</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                name="displayName"
                                placeholder="The name that display at App"
                                value={updateUser.displayName}
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
                                value={updateUser.userPassword}
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
                                value={updateUser.userConfirmPassword}
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
                    {updateUser.userImgFile && (
                                <div className="preview">
                                    <img src={updateUser.userImgFile} alt="Preview" className="img-preview" />
                                </div>
                            )}
                    {/*sign in button*/}
                    <div className="form-group row">
                        <div className="col-sm-10">
                            <button type="submit" className="btn btn-primary sign-in-btn">Update</button>
                        </div>
                    </div>
                </form>
                {/*visulation if update not complete successfuly*/}
                {errorMessages && (
                <div className="form-group row">
                    <div className="col-sm-10">
                        <small className="text-error" style={{ color: 'red', fontWeight: 'bold' }}>
                            {errorMessages}
                        </small>
                    </div>
                </div>
            )}
             {/*visulation if update complete successfuly*/}
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

export default UpdateUser;
