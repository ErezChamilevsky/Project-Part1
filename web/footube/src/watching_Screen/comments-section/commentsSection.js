import React, { useState } from 'react';
import Comment from './comment';
import './commentsSection.css';

function CommentSection({ comments }) {
    const [commentList, setCommentList] = useState(comments);
    const [newCommentText, setNewCommentText] = useState("");
    const [newCommentUser, setNewCommentUser] = useState("");
    const [newCommentImage, setNewCommentImage] = useState("");
    const [editIndex, setEditIndex] = useState(null); // State to store the index of the comment being edited
    const [editCommentText, setEditCommentText] = useState(""); // State to manage text in the "edit" textarea

    const handleAddComment = () => {
        const newComment = {
            video_id: null,
            userName: newCommentUser,
            userImg: newCommentImage,
            comment: newCommentText
        };

        setCommentList(prevComments => [...prevComments, newComment]);
        setNewCommentText("");
        setNewCommentUser("");
        setNewCommentImage("");
    };

    const handleRemoveComment = (index) => {
        if (index >= comments.length) {
            setCommentList(prevComments => prevComments.filter((_, i) => i !== index));
        }
    };

    const handleEditComment = (index) => {
        const updatedComments = [...commentList];
        updatedComments[index].comment = editCommentText; // Update with the text from the "edit" textarea
        setCommentList(updatedComments);
        setEditIndex(null); // Reset editIndex after saving the edit
        setEditCommentText(""); // Reset editCommentText after saving the edit
    };

    return (
        <div>
            <div className='name-box'>
                <input
                    type="text"
                    value={newCommentUser}
                    onChange={(e) => setNewCommentUser(e.target.value)}
                    placeholder="Enter Name"
                />
            </div>
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
            <button type="button" class="btn btn-outline-secondary" onClick={handleAddComment}>Send</button>
            {commentList && commentList.map((comment, index) => (
                <div key={index}>
                    {editIndex === index ? (
                        <div>
                            <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3"
                                value={editCommentText}
                                onChange={(e) => setEditCommentText(e.target.value)}
                                placeholder={comment.comment} // Placeholder set to the original comment text
                            ></textarea>
                            <button onClick={() => handleEditComment(index)}>Save</button>
                            <button onClick={() => setEditIndex(null)}>Cancel</button>
                        </div>
                    ) : (
                        <div>
                            <Comment {...comment} />
                            <div>
                                {index >= comments.length ? (
                                    <>
                                        {/* Edit button */}
                                            <button type="button" class="btn btn-outline-secondary" onClick={() => setEditIndex(index)}>Edit</button>
                                        {/* Remove button */}
                                            <button type="button" class="btn btn-outline-secondary" onClick={() => handleRemoveComment(index)}>Remove</button>
                                    </>
                                ) : null}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default CommentSection;
