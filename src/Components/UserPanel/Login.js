import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login({attemptLogin}) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleChangeUsername = e => setUsername(e.target.value)
    const handleChangePassword = e => setPassword(e.target.value)

    function handleSubmit(e) {
        e.preventDefault()
        attemptLogin({username, password})
        navigate('/')
    }

    return(
        <form className="login-form" style={{display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
            <h2>Login</h2>

            <input type="text" onChange={handleChangeUsername} value={username} placeholder="Username"/>
            <input type="password" onChange={handleChangePassword} value={password} placeholder="Password"/>
            <input type="submit" value="Login"/>
        </form>
    )
}

export default Login