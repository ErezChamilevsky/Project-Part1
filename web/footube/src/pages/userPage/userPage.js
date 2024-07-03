import VideoItem from '../Homepage/videoItem/VideoItem';
import './userPage.css';
import SearchBar from '../Homepage/searchBar/SearchBar';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function UserPage({ loggedUser, setLoggedUser }) {
    //getting the user id
    const { user_id } = useParams();
    const userId = parseInt(user_id, 10);


    const [uploaderVideos, setUploaderVideos] = useState([]);
    const [uploaderUser, setUploaderUser] = useState(null);


    useEffect(() => {
        async function fetchUploaderDetails() {
            const url = `http://localhost:12345/api/videos/users/${userId}`;
            try {
                const response = await fetch(url);
                const data = await response.json();
                if (response.ok) {
                    setUploaderUser(data);
                } else {
                    throw new Error(data.errors || 'Failed to fetch user');
                }
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        }
        fetchUploaderDetails();
    }, [userId]);

    useEffect(() => {
        async function fetchUploaderVideos() {
            const url = `http://localhost:12345/api/videos/users/${userId}/uploads`;
            try {
                const response = await fetch(url);
                const data = await response.json();
                if (response.ok) {
                    setUploaderVideos(data);
                } else {
                    throw new Error(data.errors || 'Failed to fetch videos');
                }
            } catch (error) {
                console.error('Error fetching videos:', error);
            }
        }
        fetchUploaderVideos();
    }, [userId]);

    if (!uploaderUser) {
        return (
            <div className="userPage">
                <SearchBar setUploaderVideos={setUploaderVideos} loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
                <div className="mainBody">
                    <div className="videos">
                        <h1>User not found</h1>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="userPage">
            <SearchBar setUploaderVideos={setUploaderVideos} loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
            <div className="mainBody">
                <div className="videos">
                    <div className="userInfo">
                        <img src={uploaderUser.userImgFile} alt={uploaderUser.displayName} className="userAvatar" />
                        <h1>{uploaderUser.displayName}</h1>
                    </div>
                    <div className="videos__container">
                        {uploaderVideos.map((video, key) => (
                            <VideoItem key={key} {...video} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserPage;
