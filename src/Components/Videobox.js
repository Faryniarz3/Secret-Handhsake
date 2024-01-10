import React from 'react'



function Videobox({ imageToShow, number, animationToShow }) {

    return(
        <div className="Videobox"> 
        {imageToShow && <img className={'image ' + animationToShow} src={imageToShow} alt ={`Image ${number}`} />}
        </div>
    )
}

export default Videobox