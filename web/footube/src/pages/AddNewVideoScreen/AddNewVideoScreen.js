
import React from "react";
import './AddNewVideoScreen.css';
import { useState, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom';

function AddNewVideoScreen({ loggedUser }) {

  const imgInputRef = useRef(null);  // Create a ref for the videoimg input element
  const videoSrcInputRef = useRef(null);  // Create a ref for the videoSrc input element

  const [errorMessages, setErrorMessages] = useState('')  // hold the error messages that return from the server 
  const[uploadVideo, setuploadVideo] = useState({
    img: null,
    videoSrc: null,
    title: '',
    description: '',
  })
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value, files } = event.target;
    if (name === 'img' || name === 'videoSrc') {  //handle with file input for userImgFile
        const file = files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
          setuploadVideo({ ...uploadVideo, [name]: reader.result });
        };
        reader.readAsDataURL(file);
    } else {
      setuploadVideo({ ...uploadVideo, [name]: value });
    }
};






const handleUpload = async (event) => {
  event.preventDefault();
  try {
      const token = localStorage.getItem('token'); // Get the token from local storage
      const response = await fetch('http://localhost:12345/api/users/'+ loggedUser.userId +'/videos', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'authorization': 'bearer ' + token // attach the token
          },
          body: JSON.stringify(uploadVideo)
      });
      const data = await response.json();
      if (response.status === 404) { //upload faild
          setErrorMessages(data.errors || '');  //extarct the error messages from the response
      } else {  //upload success
        setErrorMessages('');  //clear the error messages 
        setuploadVideo({   //clear the input fields
          img: null,
          videoSrc: null,
          title: '',
          description: '',
      });
        imgInputRef.current.value = '';  // Clear the videoImg input field
        videoSrcInputRef.current.value = '';  // Clear the videoSrc input field
        navigate('/'); // Navigate to the home page on successful login
  }  
  
  } catch (error) {
      console.log('Error during upload video:', error);
  }

}

  
  
  return (
    <div>
      <Link to='/' className="cr-acc btn btn-info login-page-btn">Home Page</Link>
      <div className="title">Upload Video</div>
      <div className="vid-tit">Video Title</div>
      <textarea name="title" className="vid-tit-input" placeholder="Type here..." value={uploadVideo.title} onChange={handleInputChange} />
      <div className="vid-dis-tit">Video Description</div>
      <textarea name="description"  className="vid-dis-input" placeholder="Type here..." value={uploadVideo.descriptionescription} onChange={handleInputChange} />
      
      {/* Input for image upload */}
      <div className="col-sm-10">
        <label htmlFor="imgSrc" className="form-label label-class">Upload Video Image</label>
        <input name="img" type="file" className="form-control vid-upl" accept="image/*" ref={imgInputRef} onChange={handleInputChange}/>
      </div>

      {/* Input for video upload */}
      <div className="col-sm-10">
        <label htmlFor="videoSrc" className="form-label label-class">Upload Video</label>
        <input  name="videoSrc" type="file" className="form-control vid-upl" accept="video/*" ref={videoSrcInputRef} onChange={handleInputChange} />
      </div>

      <div>
        <button onClick={handleUpload} className="cr-acc btn btn-info upload-video-btn">Upload Video</button>
      </div>
       {/*visulation if upload video not complete successfuly*/}
       {errorMessages && (
                <div className="form-group row">
                    <div className="col-sm-10">
                        <small className="text-error" style={{ color: 'red', fontWeight: 'bold' }}>
                            {errorMessages}
                        </small>
                    </div>
                </div>
            )}
    </div>
  );
}

export default AddNewVideoScreen;
