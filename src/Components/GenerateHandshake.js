import React, { useEffect, useState } from 'react'
import palmDown from '../Handimages/palmDown.png'
import palmUp from '../Handimages/palmUp.png'
import rightHandOpen from '../Handimages/rightHandOpen.png'
import fistBump from '../Handimages/fistBump.png'
import Videobox from './Videobox'

function GenerateHandshake( { currentUser, saveHandshake }) {
  const [steps, setSteps] = useState()
  const [sequence, setSequence] = useState([])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = [palmDown, palmUp, rightHandOpen, fistBump]
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
        }, 2000)
    }

    return () => clearInterval(intervalId)
  }, [currentImageIndex, sequence])

  const handleGenerate = () => {
    if (steps >= 5) {
      const randomSequence = Array.from({length: steps }, () => Math.floor(Math.random() * 4))
      setSequence(randomSequence)
      setCurrentImageIndex(0)
    } else {
        alert('Please enter at least 5 steps')
    }
  }

  const handleSave = () => {
    saveHandshake({handshake_sequence:sequence})
  }

  const handleStepsChange = (e) => {
    const value = parseInt(e.target.value)
    setSteps(value)
  }
  return (
    <div>
        <div className="videobox">
            <Videobox imageToShow={images[sequence[currentImageIndex]]} animationToShow={animationToShow} number={sequence[currentImageIndex] + 1} />
        </div>
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
            
            <button style={{ fontSize: '18px'}} onClick={handleGenerate}>Generate Handshake</button>
            <input type ="number" placeholder= "# of steps" style= {{textAlign: 'center'}} value={steps} onChange={handleStepsChange} />
            {currentUser && (
            <button style={{ fontSize: '18px'}} onClick={handleSave}> Save </button>
            )}
        </div>
            <p style={{marginTop:"2px"}}>Generated Sequence: {sequence.join(', ')}</p>
    </div>
    
  )
}

export default GenerateHandshake