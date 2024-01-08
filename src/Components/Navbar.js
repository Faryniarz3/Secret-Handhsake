import React from 'react'
import { Link } from 'react-router-dom'



function Navbar() {
    return (
        <nav style={{ backgroundColor: 'lightblue', padding: '10px', textAlign: 'center' }}>
          <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center', padding: '0' }}>
            <li style={{ margin: '0 10px' }}>
              <Link to="/ProfilePage">Profile</Link>
            </li>
            <li style={{ margin: '0 10px' }}>
              <Link to="/">Home</Link>
            </li>
            {/* <li style={{ margin: '0 10px' }}>
              <Link to="/search">Search</Link>
            </li> */}
            <li style={{ margin: '0 10px' }}>
              <Link to="/SignupLogin">Sign-Up/Login</Link>
            </li>
          </ul>
        </nav>
      );
    };
    
    export default Navbar;