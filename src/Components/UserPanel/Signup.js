import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom'



function Signup({attemptSignup}) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const navigate = useNavigate()

    const handleChangeUsername = e => setUsername(e.target.value)
    const handleChangePassword = e => setPassword(e.target.value)
    const handleChangeEmail = e => setEmail(e.target.value)
    const handleChangePhone = e => setPhone(e.target.value)

    function handleSubmit(e) {
        e.preventDefault()
        attemptSignup({username, password})
        navigate('/')
    }

    return (
        <form className="signup-form" style={{display: 'flex', flexDirection: 'column', marginRight: '100px' }} onSubmit={handleSubmit}>
            <h2>Signup</h2>
            <input type="text" onChange={handleChangeUsername} value={username} placeholder="Username"/>
            <input type="password" onChange={handleChangePassword} value={password} placeholder="Password"/>
            <input type='text' onChange={handleChangeEmail} value={email} placeholder="Email"/>
            <input type='text' onChange={handleChangePhone} value={phone} placeholder="Phone Number" />
            <input type="submit" value="Signup" />
        </form>
    )
}



export default Signup
