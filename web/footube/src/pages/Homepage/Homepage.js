import VideoItem from "./videoItem/VideoItem";
import './Homepage.css'
import videos from '../../data/vid.json'
import SearchBar from './searchBar/SearchBar';
import SideBar from "./sideBar/SideBar";
import React, {useState} from 'react'



function Homepage({loggedUser,setLoggedUser, currentVideos, setCurrentVideos}) {


    const videoList = currentVideos.map((video, key) => {
        return <VideoItem {...video} />
    })


    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                {/* <!-- Material Icons --> */}

                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                {/* <!-- CSS File --> */}
                <link rel="stylesheet" href="Homepage.css" />
                <title>Youtube UI Clone</title>
            </head>
            <body className="body_Homepage">

                {/* <!-- Header Starts --> */}

                <SearchBar setCurrentVideos={setCurrentVideos} loggedUser={loggedUser} setLoggedUser={setLoggedUser}/>

                {/* <!-- Header Ends --> */}

                {/* <!-- Main Body Starts --> */}
                <div className="mainBody_Homepage">
                    {/* <!-- Sidebar Starts --> */}

                    <SideBar/>

                    {/* <!-- Sidebar Ends --> */}

                    {/* <!-- Videos Section --> */}
                    <div className="videos_Homepage">
                        <h1>Recommended</h1>

                        <div className="videos__container_Homepage">
                            {videoList}
                        </div>
                    </div>
                </div>
                <script src="index.js"></script>
                {/* <!-- Main Body Ends --> */}
            </body>
        </html>
    );

}



export default Homepage;