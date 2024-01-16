import { useEffect, useState } from 'react'
import Bron from './LebronHandshake'

function ProfilePage({ currentUser }) {
    const [savedHandshakes, setSavedHandshakes] = useState([])

    useEffect(() => {
        if (currentUser) {
            fetch(`/api/handshakes/${currentUser.id}`)
            .then(response => response.json())
            .then(data => setSavedHandshakes(data))
            .catch(error => console.error('Error fetching handshakes:', error))
        }
    }, [currentUser])

    
console.log(savedHandshakes)

    return(
        <div>
            <header style={{ marginTop: '15px'}}>Profile Page</header>
            <ul>
                {savedHandshakes.map(handshake => (
                    <li key={handshake.id}>{handshake.name}</li>
                ))}
            </ul>
            <div style={{ marginTop: '25px'}}>
                <Bron />
            </div>
            
        </div>
    )
}

export default ProfilePage