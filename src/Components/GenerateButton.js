import React from 'react'

function GenerateButton() {

    return(
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '-100px'}}>
        <button style={{ fontSize: '20px'}}> Generate </button>
        <input type= "number" placeholder= "# of steps" style= {{textAlign: 'center'}}/>
        <button style={{ fontSize: '20px'}}> Save </button>
    </div>
    )
}

export default GenerateButton

//function for generating sequence here
//random numbers between 1-3
// x = number of steps user puts in
// store in an array or store in string

// palm up = 1
// palm open = 2
// palm down = 3

