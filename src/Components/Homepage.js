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
                <p style={{ display: 'flex', justifyContent: 'center'}}>
                Let's fucking go
                </p>
            <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', marginTop: '-100px' }}>
                {/* <Videobox /> */}
                <GenerateHandshake />
            </section>
            </div>
        </div>
    )
}

export default Homepage;
