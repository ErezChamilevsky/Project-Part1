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
        setCommentList(prevComments => prevComments.filter(comment => comment.commentId !== commentId));
    };

    const commentId = commentList.length > 0 ? commentList[commentList.length - 1].commentId + 1 : 1;

    useEffect(() => {
        if (vid_id && commentList) {
            setFilteredCommentList(commentList.filter(comment => comment.videoId === intId));
        }
    }, [vid_id, commentList]);

    const handleAddComment = (newComment) => {
        setCommentList(prevComments => [...prevComments, newComment]);
    };

    const handleEditComment = (index) => {
        const updatedComments = [...commentList];
        updatedComments[index].content = editCommentText;
        setCommentList(updatedComments);
        setEditIndex(null);
        setEditCommentText("");
    };

    const handleCancelEdit = () => {
        setEditIndex(null);
        setEditCommentText("");
    };



    if (loggedUser != null) {

        return (
            <div>
                <AddComment addComment={handleAddComment} commentId={commentId} loggedUser={loggedUser} />
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
                                        userName={comment.userName}
                                        userImage={comment.userImg}
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
                            userName={comment.userName}
                            userImage={comment.userImg}
                            comment={comment.content}
                        />
                    </div>
                ))}
            </div>
        );
    }
}

export default CommentSection;
