import React, { useEffect, useState } from 'react'
import palmDown from '../Handimages/palmDown.png'
import palmUp from '../Handimages/palmUp.png'
import rightHandOpen from '../Handimages/rightHandOpen.png'
import fistBump from '../Handimages/fistBump.png'

function HandshakeAlgo({number}) {
    const [showImage, setShowImage] = useState(false)
    let imageToShow;

    switch (number) {
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
        default:
            imageToShow = null;
    }



    return (
        <div>
            {imageToShow && <img src={imageToShow} alt={`Image ${number}`} />}
        </div>
    )
}

export default HandshakeAlgo