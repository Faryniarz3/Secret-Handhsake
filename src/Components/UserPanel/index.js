import Signup from './Signup'
import Login from './Login'
import UserDetails from './UserDetails'

function UserPanel({currentUser, attemptLogin, attemptSignup, logout}) {

  if (!currentUser) {
    return(
      <div className="flex-row">
        <Signup attemptSignup={attemptSignup} />
        <Login attemptLogin={attemptLogin} />
      </div>
    )
  } else {
    return(
      <UserDetails currentUser={currentUser} logout={logout} />
    )
  }
}

export default UserPanel