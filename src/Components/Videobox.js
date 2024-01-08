import React, { useState } from 'react'
import HandshakeAlgo from './HandshakeAlgo'



function Videobox({ imageToShow, number, animationToShow }) {

    //const [generatedNumber, setGeneratedNumber] = useState(1)

    return(
        <div style={{ border: '4px solid #000', width: '600px', height: '400px', marginTop: "150px"}}> {imageToShow && <img className={'image ' + animationToShow} src={imageToShow} alt ={`Image ${number}`} />}
        </div>
    )
}

export default Videobox