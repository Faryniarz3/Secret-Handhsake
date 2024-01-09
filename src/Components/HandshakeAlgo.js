import React, { useEffect, useState } from 'react'
import palmDown from '../Handimages/palmDown.png'
import palmUp from '../Handimages/palmUp.png'
import rightHandOpen from '../Handimages/rightHandOpen.png'
import fistBump from '../Handimages/fistBump.png'

function HandshakeAlgo({number, index}) {
    const [showImage, setShowImage] = useState(false)
    let imageToShow;
    let animation 

    switch (index) {
        case index % 4 === 0:
            animation = "right-to-left";
            break;
        case index % 4 === 1:
            animation = "left-to-right";
            break;
        case index % 4 === 2:
            animation = "up-to-down";
            break;
        case index % 4 === 3:
            animation = "down-to-up";
            break;
        case 4:
            animation = "unique"
            break;
    }

    switch (number) {
        default:
            imageToShow = null;
            break;
        case 1:
            imageToShow = palmDown;
            break;
        case 2:
            imageToShow = palmUp;
            break;
        case 3:
            imageToShow = rightHandOpen;
            break;
        case 4:
            imageToShow = fistBump;
            break;
        
    }

    return (
        <div>
            {imageToShow && <img className={animation} src={imageToShow} alt={`Image ${number}`} />}
        </div>
    )
}

export default HandshakeAlgo