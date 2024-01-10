import React from 'react'
import Signup from './UserPanel/Signup'
import Login from './UserPanel/Login'


function SignupLogin({attemptSignup, attemptLogin}) {
    return(
        <div style={{display: 'flex', justifyContent: 'center', padding: '5px'}}>
            <Signup attemptSignup={attemptSignup} style={{marginRight: '20px'}}/>
            <Login attemptLogin={attemptLogin} style={{marginLeft: '100px', marginRight: '50px'}}/>
        </div>
    )
}

export default SignupLogin