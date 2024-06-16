import '../Homepage.css'
import videos from '../../../data/vid.json'
import { Link } from 'react-router-dom';


function SearchBar({setCurrentVideos}) {


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


    return (
        <div className="header_Homepage">
            <div className="header__left_Homepage" position="relative">
                <i id="menu" className="material-icons">menu</i>
                <div id="youtubeLogo">
                </div>
                Youtube
            </div>
            <div className="header__search_Homepage">
                <form action="">
                    <input id="search_bar_Homepage" type="text" placeholder="Search" onChange={handleSearch} />
                    <button onClick={searchFunction}><i className="material-icons">search</i></button>
                </form>
            </div>
            <div className="header__icons_Homepage">
                <div>
                <Link to='/addNewVideoScreen' className="cr-acc btn btn-info registerButton">Add New Video</Link>    
                <Link to='/login' className="cr-acc btn btn-info registerButton">Login</Link>    

            </div>
                <i className="material-icons display-this">account_circle</i>
            </div>
        </div>
    );

}


export default SearchBar
