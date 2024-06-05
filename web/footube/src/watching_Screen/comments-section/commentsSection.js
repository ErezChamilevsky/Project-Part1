import React, { useState, useEffect } from 'react';
import Comment from './comment';
import commentsData from '../../data/comments.json';
import userData from '../../data/user.json';
import './commentsSection.css';

function CommentSection() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        // Map through the comments data and add user information to each comment
        const commentsWithUser = commentsData.comments.map(comment => {
            const user = userData.find(user => user.user_id === comment.user_id);
            return { ...comment, userName: user.user_name, userImg: user.user_img };
        });
        setComments(commentsWithUser);
    }, []);

    return (
        <div>
            {comments.map(comment => (
                <Comment
                    key={comment.id}
                    userName={comment.userName}
                    userImg={comment.userImg}
                    comment={comment.text}
                />
            ))}
        </div>
    );
}

export default CommentSection;
