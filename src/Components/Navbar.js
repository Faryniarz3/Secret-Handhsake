import React from 'react'
import { Link } from 'react-router-dom'


function Navbar( {currentUser, logout }) {
    return (
        <nav style={{ backgroundColor: 'lightblue', padding: '4px', textAlign: 'center' }}>
          <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center', padding: '0' }}>
            {currentUser ? (
                <>
            <li className="username" style={{ margin: '0 10px', position: 'fixed', top: '0', left: '0', fontSize: '20px'}}> {currentUser.username} </li>
            <li style={{ margin: '0 10px' }}>
              <Link to="/ProfilePage">Profile</Link>
            </li>
            <li style={{ margin: '0 10px' }}>
              <Link to="/">Home</Link>
            </li>
            <li style={{margin: '0 10px' }}>
                <Link onClick={logout} to="/">Logout</Link>
            </li>
                </>
            ) : (
                <>
            <li style={{ margin: '0 10px' }}>
              <Link to="/">Home</Link>
            </li>
            <li style={{ margin: '0 10px' }}>
              <Link to="/SignupLogin">Sign-Up/Login</Link>
            </li>
                </>
            )}
          </ul>
        </nav>
      );
    };
    
    export default Navbar;