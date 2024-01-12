import React, { useEffect, useState } from 'react'


import openFistBump from '..Handimages/openFistBump.png'
import palmFacingUp from '../Handimages/palmFacingUp.png'
import rightHandPalmDown from '../Handimages/rightHandPalmDown.png'
import spiderMan from '../Handimages/spiderMan.png'
import standard from '../Handimages/standard.png'
import twoFingers from '../Handimages/twoFingers.png'
import threeFingers from '../Handimages/threeFingers.png'

import peace from '../HandImagesUnique/peace.png'
import pound from '../HandImagesUnique/pound.png'
import spiderManDown from '../HandImagesUnique/spiderManDown.png'

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
            imageToShow = openFistBump;
            break;
        case 2:
            imageToShow = palmFacingUp;
            break;
        case 3:
            imageToShow = rightHandPalmDown;
            break;
        case 4:
            imageToShow = spiderMan;
            break;
        case 5:
            imageToShow = standard;
            break;
        case 6:
            imageToShow = threeFingers;
            break;
        case 7:
            imageToShow = twoFingers;
            break;
        
        //Unique//

        case 8:
            imageToShow = peace;
            break;
        case 9:
            imageToShow = pound;
            break;
        case 10:
            imageToShow = spiderManDown;
            break;


        
    }

    return (
        <div>
            {imageToShow && <img className={animation} src={imageToShow} alt={`Image ${number}`} />}
        </div>
    )
}

export default HandshakeAlgo