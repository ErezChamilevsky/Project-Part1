import '../Homepage.css';
import React from 'react';
import { Link } from 'react-router-dom';

function SideBar({ loggedUser }) {
    console.log(loggedUser);
    if (loggedUser == undefined) {
        return (
            <div className="sidebar_Homepage">
                <div className="sidebar__categories_Homepage">
                    <div className="sidebar__category_Homepage">
                        <i className="material-icons">home</i>
                        <span>Home</span>
                    </div>
                    <div className="sidebar__category_Homepage">
                        <i className="material-icons">local_fire_department</i>
                        <span>Trending</span>
                    </div>
                    <div className="sidebar__category_Homepage">
                        <i className="material-icons">subscriptions</i>
                        <span>Subscriptions</span>
                    </div>
                </div>
                <hr />
                <hr />
            </div>
        );
    }

    return (
        <div className="sidebar_Homepage">
            <div className="sidebar__categories_Homepage">
                <div className="sidebar__category_Homepage">
                    <i className="material-icons">home</i>
                    <span>Home</span>
                </div>
                <div className="sidebar__category_Homepage">
                    <i className="material-icons">local_fire_department</i>
                    <span>Trending</span>
                </div>
                <div className="sidebar__category_Homepage">
                    <i className="material-icons">subscriptions</i>
                    <span>Subscriptions</span>
                </div>
            </div>
            <hr />
            <div className="sidebar__categories_Homepage">
                <div className="sidebar__category_Homepage">
                    <i className="material-icons">history</i>
                    <span>History</span>
                </div>
                <div className="sidebar__category_Homepage">
                    <i className="material-icons">play_arrow</i>
                    <Link to={`/userPage/${loggedUser.userId}`}>Your videos</Link>
                </div>
                <div className="sidebar__category_Homepage">
                    <i className="material-icons">thumb_up</i>
                    <span>Liked Videos</span>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default SideBar;
