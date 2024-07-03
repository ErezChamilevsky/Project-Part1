import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comment from './comment';
import './commentsSection.css';
import AddComment from './addComment';

function CommentSection({ commentList, setCommentList, loggedUser }) {
    const { vid_id } = useParams();
    const intId = parseInt(vid_id, 10);

    const [filteredCommentList, setFilteredCommentList] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [editCommentText, setEditCommentText] = useState("");



    const handleRemoveComment = (commentId) => {
        deleteComment(commentId);
        setCommentList(prevComments => prevComments.filter(comment => comment.commentId !== commentId));
    };

    async function deleteComment(commentId) {
        try {
            const response = await fetch(`http://localhost:12345/api/videos/${intId}/comments/${commentId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    'authorization': 'bearer ' + localStorage.getItem('token')
                },
            });
            if (!response.ok) {
                throw new Error('Failed to delete comment');
            }
            const comment = await response.json();
            return comment;
        } catch (error) {
            console.error('Error deleting comment:', error);
        }
    }

    async function updateComment(commentId, content) {
        try {
            const response = await fetch(`http://localhost:12345/api/videos/${intId}/comments/${commentId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    'authorization': 'bearer ' + localStorage.getItem('token')
                }, 
                body: JSON.stringify({
                    content: content,
                })
            });
            if (!response.ok) {
                throw new Error('Failed to delete comment');
            }
            const comment = await response.json();
            return comment;
        } catch (error) {
            console.error('Error deleting comment:', error);
        }
    }

    //filtering comments to present by vid_id
    useEffect(() => {
        if (intId && commentList) {
            setFilteredCommentList(commentList.filter(comment => comment.videoId === intId));
        }
    }, [intId, commentList]);


    const handleAddComment = (newComment) => {
        setCommentList(prevComments => [...prevComments, newComment]);
    };

    const handleEditComment = async (index) => {
        const commentId = commentList[index].commentId; // Get commentId of the comment being edited
        const updatedComments = [...commentList];

        try {
            await updateComment(commentId, editCommentText); // Pass commentId and new content to updateComment
            updatedComments[index].content = editCommentText;
            setCommentList(updatedComments);
            setEditIndex(null);
            setEditCommentText("");
        } catch (error) {
            console.error('Error updating comment:', error);
        }
    };

    const handleCancelEdit = () => {
        setEditIndex(null);
        setEditCommentText("");
    };



    if (loggedUser != null) {

        return (
            <div>
                <AddComment addComment={handleAddComment} loggedUser={loggedUser} />
                <div className='comment-list'>
                    {filteredCommentList.map((comment, index) => (
                        <div key={comment.commentId} className="comment-item">
                            {editIndex === index ? (

                                <div>
                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        value={editCommentText}
                                        onChange={(e) => setEditCommentText(e.target.value)}
                                        placeholder={comment.content}
                                    />
                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary"
                                        onClick={() => handleEditComment(index)}
                                    >
                                        Save
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary"
                                        onClick={handleCancelEdit}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            ) : (
                                <div>
                                    <Comment
                                        userId={comment.userId}
                                        comment={comment.content}
                                    />
                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary"
                                        onClick={() => setEditIndex(index) || setEditCommentText(comment.content)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary"
                                        onClick={() => handleRemoveComment(comment.commentId)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    //there is no user logged
    else {

        return (
            <div className='comment-list'>
                {filteredCommentList.map((comment) => (
                    <div key={comment.commentId} className="comment-item">
                        <Comment
                            userId={comment.userId}
                            comment={comment.content}
                        />
                    </div>
                ))}
            </div>
        );
    }
}

export default CommentSection;
