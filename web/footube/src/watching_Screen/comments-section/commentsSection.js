import React, { useState } from 'react';
import { useEffect } from 'react';
import Comment from './comment';
import './commentsSection.css';
import { useParams } from 'react-router-dom';
import AddComment from './addComment';


function CommentSection({ commentList, setCommentList }) {

    const { vid_id } = useParams();
    const intId = parseInt(vid_id, 10);

    const [filteredCommentList, setFilteredCommentList] = useState([]);

    // const [editIndex, setEditIndex] = useState(null); // State to store the index of the comment being edited
    // const [editCommentText, setEditCommentText] = useState(""); // State to manage text in the "edit" textarea


    const handleRemoveComment = (comment_id) => {
        setCommentList(prevComments => prevComments.filter(comment => comment.comment_id !== comment_id));
    };

    const commentId = commentList.length > 0 ? commentList[commentList.length - 1].comment_id + 1 : 1;

    // const handleEditComment = (index) => {
    //     const updatedComments = [...commentList];
    //     updatedComments[index].comment = editCommentText; // Update with the text from the "edit" textarea
    //     setCommentList(updatedComments);
    //     setEditIndex(null); // Reset editIndex after saving the edit
    //     setEditCommentText(""); // Reset editCommentText after saving the edit
    // };

    useEffect(() => {
        if (vid_id && commentList) {
            setFilteredCommentList(commentList.filter(comment => comment.video_id === intId));
        }
    }, [vid_id, commentList]);

    // Function to add a new comment
    const handleAddComment = (newComment) => {
        setCommentList(prevComments => [...prevComments, newComment]);
    };

    return (
        <div>
            <AddComment addComment={handleAddComment} commentId={commentId} />
            <div className='comment-list'>
                {filteredCommentList.map((comment) => (
                    <div key={comment.comment_id} className="comment-item">
                        <Comment
                            userName={comment.userName}
                            userImage={comment.userImg}
                            comment={comment.comment}
                        />
                        <button
                            type="button"
                            className="btn btn-outline-secondary"
                            onClick={() => handleRemoveComment(comment.comment_id)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>);

    //     {commentList && commentList.map((comment, index) => (
    //         <div key={index}>
    //             {editIndex === index ? (
    //                 <div>
    //                     <textarea
    //                         className="form-control"
    //                         id="exampleFormControlTextarea1"
    //                         rows="3"
    //                         value={editCommentText}
    //                         onChange={(e) => setEditCommentText(e.target.value)}
    //                         placeholder={comment.comment} // Placeholder set to the original comment text
    //                     ></textarea>
    //                     <button onClick={() => handleEditComment(index)}>Save</button>
    //                     <button onClick={() => setEditIndex(null)}>Cancel</button>
    //                 </div>
    //             ) : (
    //                 <div>

    //                     <div>
    //                         {index >= comments.length ? (
    //                             <>
    //                                 {/* Edit button */}
    //                                     <button type="button" class="btn btn-outline-secondary" onClick={() => setEditIndex(index)}>Edit</button>
    //                                 {/* Remove button */}
    //                                     <button type="button" class="btn btn-outline-secondary" onClick={() => handleRemoveComment(index)}>Remove</button>
    //                             </>
    //                         ) : null}
    //                     </div>
    //                 </div>
    //             )}
    //         </div>
    //     ))}

    // </div>
    // );
}

export default CommentSection;
