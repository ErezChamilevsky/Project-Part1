import '../Homepage.css'
import './SearchBar.css';
import videos from '../../../data/vid.json'
import { Link } from 'react-router-dom';


function SearchBar({setCurrentVideos, loggedUser, setLoggedUser}) {


    function handleSearch() {
        let searchInput = document.getElementById('search_bar_Homepage').value;
        sessionStorage.setItem('currentSessionSearch', searchInput);
    }

    function searchFunction(event) {
        event.preventDefault();
        let lastInput = sessionStorage.getItem('currentSessionSearch')
        const filteredVideos = videos.filter(video => video.title.toLowerCase().includes(lastInput.toLowerCase()))
        setCurrentVideos(filteredVideos)
    }

    function handleLogOut(){
        localStorage.removeItem('token'); // Clears a token of logges user from local storage
        console.log(localStorage.getItem('token')); //check if the token is removed
        setLoggedUser(null);
    }

    //this function show pop up message to confirm the user want to delete the account
    function checkIfDeleteUser(){
        var userConfirmed = confirm("Are you sure you want to delete your account?");
        if (userConfirmed) {
            // Proceed with deleting the user account
            handleDeleteUser();
        } else {
            // User cancelled, do nothing
            console.log("User cancelled the account deletion.");
        }
    }
    

    //this function delete the user account from mongoDB.
    const handleDeleteUser = async () => {
        try {
            const response = await fetch('http://localhost:12345/api/users/' + loggedUser.userId ,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': 'bearer ' + localStorage.getItem('token') // attach the token
                },
            });
            const data = await response.json();
            if (response.status === 404) {
                var serverMsg = confirm(data.message) //extarct the server messages from the response
            } else { //update success 
                var serverMsg = confirm(data.message) //extarct the server messages from the response
                setLoggedUser(null); //set logged user to null
                localStorage.removeItem('token'); // Clears a token of logges user from local storage     
        }  
        
        } catch (error) {
            console.log('Error during details update:', error);
        }
    };



// if no logged user, display the only login button
if(!loggedUser){
    return (
        <div className="header_Homepage">
            <div className="header__left_Homepage" position="relative">
                <i id="menu" className="material-icons">menu</i>
                <Link to='/' id="youtubeLogo" />
                Youtube
            </div>
            <div className="header__search_Homepage">
                <form action="">
                    <input id="search_bar_Homepage" type="text" placeholder="Search" onChange={handleSearch} />
                    <button onClick={searchFunction}><i className="material-icons">search</i></button>
                </form>
            </div>
            <div className="header__icons_Homepage">
                
                <div><Link to='/login' className="cr-acc btn btn-info registerButton login-btn">Login</Link></div>  
                <div><button onClick={handleLogOut} className="cr-acc btn btn-info registerButton">Log Out</button></div>

                {/* this lines display the userName and the image in right side of search bar*/}
                {loggedUser ? (
                    <div className="loggedUser__info">
                        <img src={loggedUser.userImgFile} alt="Profile" className="imageFile" />
                        <span className="userName">{loggedUser.userName}</span>
                    </div>
                ) : (
                    <i className="material-icons display-this">account_circle</i>
                )}
            </div>
        </div>
    );

}



    return (
        <div className="header_Homepage">
            <div className="header__left_Homepage" position="relative">
                <i id="menu" className="material-icons">menu</i>
                <Link to='/' id="youtubeLogo" />
                Youtube
            </div>
            <div className="header__search_Homepage">
                <form action="">
                    <input id="search_bar_Homepage" type="text" placeholder="Search" onChange={handleSearch} />
                    <button onClick={searchFunction}><i className="material-icons">search</i></button>
                </form>
            </div>
            <div className="header__icons_Homepage">
                
               <div><Link to='/addNewVideoScreen' className="cr-acc btn btn-info registerButton">Add New Video</Link></div>    
                <div><Link to='/login' className="cr-acc btn btn-info registerButton login-btn">Login</Link></div>
                <div><button onClick={handleLogOut} className="cr-acc btn btn-info registerButton">Log Out</button></div>
                <div><Link to='/updateUser' className="cr-acc btn btn-info registerButton login-btn">Update Details</Link></div>    
                <div><button onClick={checkIfDeleteUser} className="cr-acc btn btn-info registerButton">Delete user</button></div>

                {/* this lines display the userName and the image in right side of search bar*/}
                {loggedUser ? (
                    <div className="loggedUser__info">
                        <img src={loggedUser.userImgFile} alt="Profile" className="imageFile" />
                        <span className="userName">{loggedUser.userName}</span>
                    </div>
                ) : (
                    <i className="material-icons display-this">account_circle</i>
                )}
            </div>
        </div>
    );

}


export default SearchBar
