import React from 'react'
import Videobox from './Videobox'

import GenerateHandshake from './GenerateHandshake'


function Homepage() {
    return (
        <div>
            <header style={{ display: 'flex', justifyContent: 'center', marginTop: '25px'}}>
                Secret Handshake Generator
            </header>
            <div>
                
            <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', marginTop: '-100px' }}>
                <GenerateHandshake />
            </section>
            </div>
        </div>
    )
}

export default Homepage;
