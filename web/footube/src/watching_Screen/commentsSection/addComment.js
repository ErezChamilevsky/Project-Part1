import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function AddComment({ addComment, loggedUser }) {
    const { vid_id } = useParams();
    const intId = parseInt(vid_id, 10);

    const [newCommentText, setNewCommentText] = useState("");

    async function createComment() {
        try {
            const response = await fetch(`http://localhost:12345/api/videos/${intId}/comments`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'authorization': 'bearer ' + localStorage.getItem('token')
                },
                body: JSON.stringify({
                    userId: loggedUser.userId,
                    content: newCommentText,
                })
            });
            if (!response.ok) {
                throw new Error('Failed to create comment');
            }
            const comment = await response.json();
            return comment;
        } catch (error) {
            console.error('Error creating comment:', error);
            // Handle error here
        }
    }

    const handleAddComment = async () => {
        try {
            const newComment = await createComment();
            console.log(newComment);
            addComment(newComment);
            setNewCommentText("");
        } catch (error) {
            console.error('Error adding comment:', error);
            // Handle error here
        }
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
            <button type="button" className="btn btn-outline-secondary" onClick={handleAddComment}>Send</button>
        </div>
    );
}

export default AddComment;
