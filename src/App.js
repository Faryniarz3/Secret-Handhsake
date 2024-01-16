import React from 'react'
import { useState, useEffect } from 'react'
import './App.css';
import './tailwind.css'
import Homepage from './Components/Homepage'
import Navbar from './Components/Navbar'
import ProfilePage from './Components/ProfilePage';
import SignupLoginPage from './Components/SignupLoginPage'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const POST_HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

const URL = "/api"


function App( {username }) {

  const [currentUser, setCurrentUser] = useState(null)

  // CHECK SESSION //
  useEffect(() => {
    fetch(URL + '/check_session')
    .then(res => {
      if (res.ok) {
        res.json()
        .then(userData => {
          setCurrentUser(userData)
        })
      }
    })
  }, [])

  // SIGNUP //
  async function attemptSignup(userInfo) {
    const res = await fetch(URL + '/users', {
      method: 'POST',
      headers: POST_HEADERS,
      body: JSON.stringify(userInfo)
    })
    if (res.ok) {
      const data = await res.json()
      setCurrentUser(data)
    } else {
      alert('Invalid sign up')
    }
  }

  async function saveHandshake(handshakeData) {
    const res = await fetch(URL + '/handshakes', {
      method: 'POST',
      headers: POST_HEADERS,
      body: JSON.stringify(handshakeData)
    })
    if (res.ok) {
      const data = await res.json()
      alert("Handshake Saved!")
    }
  }

  async function savedHandshakes() {
    const handshakeData = {}

  }  

  // LOGIN //
  async function attemptLogin(userInfo) {
    const res = await fetch(URL + '/login', {
      method: 'POST',
      headers: POST_HEADERS,
      body: JSON.stringify(userInfo)
    })
    if (res.ok) {
      const data = await res.json()
      setCurrentUser(data)
    } else {
      alert('Invalid Login')
    }
  }

  // LOGOUT //s
  function logout() {
    setCurrentUser(null)
    fetch(URL + '/logout', { method: "DELETE" })
  }
  // onClick function- for "logout" button

  return (
    <Router>  
      <div className="App">
        <div>
        <Navbar currentUser={currentUser} username={username} logout={logout}/>
        </div>
        <div>
        <Routes>
          <Route index element={<Homepage currentUser={currentUser} saveHandshake={saveHandshake}/>} />
          <Route path="/ProfilePage" element={<ProfilePage currentUser={currentUser} />} />
          <Route path="/SignupLogin" element={<SignupLoginPage attemptSignup={attemptSignup} attemptLogin={attemptLogin} />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
