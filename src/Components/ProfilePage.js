import { useEffect, useState } from 'react'
import Bron from './LebronHandshake'
import '../App.css';

import openFistBump from '../Handimages/openFistBump.png'
import palmFacingUp from '../Handimages/palmFacingUp.png'
import rightHandPalmDown from '../Handimages/rightHandPalmDown.png'
import spiderMan from '../Handimages/spiderMan.png'
import standard from '../Handimages/standard.png'
import twoFingers from '../Handimages/twoFingers.png'
import threeFingers from '../Handimages/threeFingers.png'

import peace from '../HandImagesUnique/peace.png'
import pound from '../HandImagesUnique/pound.png'
import spiderManDown from '../HandImagesUnique/spiderManDown.png'


function ProfilePage({ currentUser }) {
    const [savedHandshakes, setSavedHandshakes] = useState([])
    const images = [openFistBump, palmFacingUp, rightHandPalmDown, spiderMan, standard, twoFingers, threeFingers, peace, pound, spiderManDown]

    useEffect(() => {
        if (currentUser) {
            fetch(`/api/handshakes/${currentUser.id}`)
            .then(response => response.json())
            .then(data => setSavedHandshakes(data))
            .catch(error => console.error('Error fetching handshakes:', error))
        }
    }, [currentUser])



    return (
        <div>
          <header style={{ marginTop: '15px', marginBottom: '15px', fontSize: '25px', fontWeight: 'bolder' }}>Saved Handshakes</header>
          <div className="handshake-list">
            {savedHandshakes.map((handshake) => (
              <div className="handshake-item" key={handshake.id}>
                <div className="handshake-name">{handshake.name}</div>
                <div className="handshake-sequence">
                  <p style={{ marginTop: '2px' }}> </p>
                  {handshake.sequence.split(',').map((step, index) => (
                    <img
                      key={index}
                      src={images[step]}
                      alt={`Step ${index + 1}`}
                      style={{ maxWidth: '250px', maxHeight: '250px', margin: '0 5px' }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    export default ProfilePage;