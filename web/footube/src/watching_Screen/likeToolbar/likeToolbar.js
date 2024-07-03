import React, { useEffect, useState } from 'react';
import "./likeToolbar.css";
import { Link } from 'react-router-dom';

function LikeToolbar({ userId, likeCount, liked, disliked, handleLike, handleDislike }) {
    const [showModal, setShowModal] = useState(false);
    const [uploader, setUploader] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const getUploaderDetails = async (userId) => {
        try {
            const response = await fetch('http://localhost:12345/api/videos/users/' + userId, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': 'bearer ' + localStorage.getItem('token')
                }
            });
            const data = await response.json();
            if (response.status === 404) {
                setErrorMessage(data.errors || 'User not found');
                return null;
            } else {
                setErrorMessage('');
                return data;
            }
        } catch (error) {
            console.log('Error during get user details:', error);
            setErrorMessage('An error occurred while fetching user details');
            return null;
        }
    }

    useEffect(() => {
        const fetchUploaderDetails = async () => {
            const data = await getUploaderDetails(userId);
            if (data) setUploader(data);
        };
        fetchUploaderDetails();
    }, [userId]);

    const handleShareClick = () => {
        setShowModal(true);
        document.body.classList.add('modal-open');
    };

    const handleCloseModal = () => {
        setShowModal(false);
        document.body.classList.remove('modal-open');
    };

    return (
        <div className="bar">
            {uploader && (
                <div className="left-content-tool">
                    <Link to={`/userPage/${uploader.userId}`}>
                        <img className="card-image" src={uploader.userImgFile} alt="User" />
                        <div className="card-details">
                            <h1 className="card-name">{uploader.displayName}</h1>
                        </div>
                    </Link>
                </div>
            )}

            {errorMessage && <div className="error-message">{errorMessage}</div>}

            <div className="right-content-tool">
                <div className="other-buttons">
                    <div className='like-dislike'>
                        <div className='like-amount'><p>{likeCount} likes</p></div>
                        <button type="button" className="btn btn-light" onClick={handleLike}>
                            {liked ? 'Unlike' : 'Like'}
                        </button>
                        <button type="button" className="btn btn-light" onClick={handleDislike}>
                            {disliked ? 'Undislike' : 'Dislike'}
                        </button>
                    </div>
                    <button type="button" className="btn btn-lg btn-secondary" onClick={handleShareClick}>
                        Share
                    </button>
                </div>
            </div>

            {showModal && (
                <div className="modal fade show" id='fadedByReut' tabIndex="-1" role="dialog" >
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Share the video</h5>
                                <button type="button" className="close" onClick={handleCloseModal}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="modal-images">
                                    <img src="/images/icons/telegramIcon.png" alt="Telegram Icon" />
                                    <img src="/images/icons/gmail.png" alt="Gmail Icon" />
                                    <img src="/images/icons/xIcon.png" alt="X Icon" />
                                    <img src="/images/icons/whatsappicon.jpg" alt="WhatsApp Icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {showModal && <div className="modal-backdrop fade show"></div>}
        </div>
    );
}

export default LikeToolbar;