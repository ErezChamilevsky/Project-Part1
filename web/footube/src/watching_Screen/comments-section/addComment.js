import React, { useState } from 'react';
import { useParams } from 'react-router-dom';


function AddComment({ addComment , commentId}) {

    const { vid_id } = useParams();
    const intId = parseInt(vid_id, 10);


    const [newCommentText, setNewCommentText] = useState("");
    const [newCommentUser, setNewCommentUser] = useState("");
    const [newCommentImage, setNewCommentImage] = useState("");
    const [newCommentId, setNewCommentId] = useState("");


    const handleAddComment = () => {
        const newComment = {
            video_id: intId,
            userName: newCommentUser,
            userImg: newCommentImage,
            comment: newCommentText,
            comment_id: commentId
        };
        addComment(newComment);
        setNewCommentText("");
        setNewCommentUser("");
        setNewCommentImage("");
        setNewCommentId("");
    };


    return (
        <div>
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
        </div>
    );


}

export default AddComment;