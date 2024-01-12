import React, { useEffect, useState } from 'react'
import Videobox from './Videobox'
import NameModal from './NameModal'

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

function GenerateHandshake( { currentUser, saveHandshake }) {
  const [steps, setSteps] = useState()
  const [sequence, setSequence] = useState([])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [handshakeName, setHandshakeName] = useState('')
  const images = [openFistBump, palmFacingUp, rightHandPalmDown, spiderMan, standard, twoFingers, threeFingers, peace, pound, spiderManDown]
  const animations = ['right-to-left', 'left-to-right', 'up-to-down', 'down-to-up', 'unique']
  const animationToShow = currentImageIndex !== sequence.length - 1 ? animations[currentImageIndex % 4] : "unique"
  
  useEffect(() => {
    if (!currentUser) {
        setSequence([])
        setSteps('')
    }
  }, [currentUser])

  useEffect(() => {
    let intervalId

    if (sequence.length >= 5) {
        intervalId = setInterval(() => {
            const nextIndex = (currentImageIndex + 1) % sequence.length;
            setCurrentImageIndex(nextIndex)
        }, 2300)
    }

    return () => clearInterval(intervalId)
  }, [currentImageIndex, sequence])

  const handleGenerate = () => {
    if (steps >= 5) {
      const randomSequence = Array.from({length: steps }, () => Math.floor(Math.random() * 10))
      setSequence(randomSequence)
      setCurrentImageIndex(0)
    } else {
        alert('Please enter at least 5 steps')
    }
  }

  const handleSave = () => {
    setIsModalOpen(true)
    
  }

  const handleModalSave = (name) => {
    saveHandshake({handshake_sequence:sequence, name})
    setIsModalOpen(false)
  }

  const handleModalCancel = () => {
    setIsModalOpen(false)
  }

  const handleStepsChange = (e) => {
    const value = parseInt(e.target.value)
    setSteps(value)
  }
  return (
    <div style ={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div className="videobox">
            <Videobox imageToShow={images[sequence[currentImageIndex]]} animationToShow={animationToShow} number={sequence[currentImageIndex] + 1} />
        </div>
        <div style={{display: 'flex', justifyContent: 'right', marginTop: '10px'}}>
            
            <button style={{ fontSize: '18px', backgroundColor: 'lightblue', flex: '1', margin: '0 5px'}} onClick={handleGenerate}>Generate Handshake</button>
            <input type ="number" placeholder= "# of steps" style= {{textAlign: 'center'}} value={steps} onChange={handleStepsChange} />
            {currentUser && (
                <>
            <button style={{ fontSize: '18px', backgroundColor: 'lightblue'}} onClick={handleSave}> Save </button>
            {isModalOpen && (
                <NameModal onSave={handleModalSave} onCancel={handleModalCancel}/>
            )}
            </>
            )}
        </div>
            <p style={{marginTop:"2px"}}>Generated Sequence: {sequence.map((step, index) => (
                <img key={index} src={images[step]} alt={`Step ${index + 1}`} style={{maxWidth: '50px', maxHeight: '50px', margin: '0 5px'}} />
            ))}
            </p>
    </div>
    
  )
}

export default GenerateHandshake