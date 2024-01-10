import React from 'react'
import GenerateHandshake from './GenerateHandshake'


function Homepage( { currentUser, saveHandshake }) {
    return (
        <div style={{position:"relative"}}>
            <header style={{ display: 'flex', justifyContent: 'center', marginTop: '5px'}}>
                HNDSHK
            </header>
            <div>
                
            <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                <GenerateHandshake currentUser={currentUser} saveHandshake={saveHandshake} />
            </section>
            </div>
        </div>
    )
}

export default Homepage;
