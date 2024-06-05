import React, { useState } from 'react';
import Comment from './comment';
import commentsData from '../../data/comments.json';
import './commentsSection.css';

function CommentSection() {
    // Initialize state directly with comments data
    const [commentList, setCommentList] = useState(commentsData);
    const [newCommentText, setNewCommentText] = useState(""); // State to manage comment text input
    const [newCommentUser, setNewCommentUser] = useState(""); // State to manage user name input
    const [newCommentImage, setNewCommentImage] = useState(""); // State to manage user image input

    // Function to handle adding a new comment
    const handleAddComment = () => {
        const newComment = {
            userName: newCommentUser,
            userImg: newCommentImage,
            comment: newCommentText
        };

        setCommentList(prevComments => [...prevComments, newComment]); // Add new comment to the list
        setNewCommentText(""); // Reset comment text input
        setNewCommentUser(""); // Reset user name input
        setNewCommentImage(""); // Reset user image input
    };

    return (
        <div>
            {/* Input fields for adding new comment */}
            <div className='name-box'>
                <input
                    type="text"
                    value={newCommentUser}
                    onChange={(e) => setNewCommentUser(e.target.value)}
                    placeholder="Enter Name"
                /><br />
            </div>

            {/* Comment itself */}
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
                <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    value={newCommentText}
                    onChange={(e) => setNewCommentText(e.target.value)}
                    placeholder="Comment.."
                ></textarea>
            </div>
            <br />

            {/* Image URL input (optional) */}
            {/* <input
                type="text"
                value={newCommentImage}
                onChange={(e) => setNewCommentImage(e.target.value)}
                placeholder="Enter Image URL"
            /><br /> */}

            <button onClick={handleAddComment}>Send</button>

            {/* Render the comments */}
            {commentList && commentList.map((comment, index) =>
                <Comment key={index} {...comment} />
            )}
        </div>
    );
}

export default CommentSection;
