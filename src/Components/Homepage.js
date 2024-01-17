import React, {useState} from 'react'
import GenerateHandshake from './GenerateHandshake'


function Homepage( { currentUser, saveHandshake }) {
    const [showInstructions, setShowInstructions] = useState(true)
    return (
        <div style={{position:"relative"}}>
            <header style={{ display: 'flex', justifyContent: 'center', fontSize: '25px', fontWeight: 'bold', marginTop: '3px'}}>
                HNDSHK
            </header>
            <div>
                
            <section style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'left', alignItems: 'left', height: '100vh'}}>
                <div style={{ justifyContent: 'left', alignItems: 'left' }}>
                    
                </div>
                <GenerateHandshake currentUser={currentUser} saveHandshake={saveHandshake} />
            </section>
            </div>
        </div>
    )
}

export default Homepage;
