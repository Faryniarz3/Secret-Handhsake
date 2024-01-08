import React, { useState } from 'react'
import HandshakeAlgo from './HandshakeAlgo'



function Videobox({ imageToShow, number }) {

    //const [generatedNumber, setGeneratedNumber] = useState(1)

    return(
        <div style={{ border: '4px solid #000', width: '500px', height: '350px'}}> {imageToShow && <img className='image' src={imageToShow} alt ={`Image ${number}`} />}
        </div>
    )
}

export default Videobox