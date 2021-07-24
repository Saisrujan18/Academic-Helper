import './Navbar.css';
import {Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

import Logout from '../SignUp/LogOut';

const NavBar = () => {
  
    // const user= JSON.parse (sessionStorage.getItem ('user'));

    return (
        <div>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">

            <Link className="navbar-brand" to="/">NOTE</Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            
            <Nav className="Navbar" style={{width: '85%'}}>
                <Link to="/search">Search</Link>
                <Link to="/upload">Upload</Link>

            </Nav>
            <Logout />

            {/* <Navbar.Text style={{width: '18%'}}>
                {'hello, '}
            </Navbar.Text> */}

            </Navbar.Collapse>
        </Navbar>
        </div>
    );
};

export default NavBar;