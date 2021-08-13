/* eslint-disable no-unused-vars */
import './Navbar.css';
import {Link} from 'react-router-dom';

import Logout from '../SignUp/LogOut';

const NavBar = () => {
  
    const user= JSON.parse (sessionStorage.getItem ('user'));
    // console.log(user);
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark alle">
                <Link className="navbar-brand title" to="/">Academic Helper</Link>
                <span class="navbar-text">Help your Friends !</span>
                <div  id="navbarText">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link className="nav-link" to="/search">Search</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/upload">Upload</Link>
                        </li>
                    </ul>
                </div>
                <Logout/>
            </nav>
        </div>
    );
};

export default NavBar;