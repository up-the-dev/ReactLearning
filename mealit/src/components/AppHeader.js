import React from 'react'
import Nav from './Nav';
function AppHeader() {
    return (
        <header className="App-header">
            <video className='bg-cover-video' autoPlay loop muted playsInline>
                <source src='/bg-cover-video2a.mp4' type='video/mp4' />
            </video>
            <Nav />
            <div className='centerText'>
                <h1>Delicious Food</h1>
                <h1>Delivered To You</h1>
            </div>
        </header>
    )
}

export default AppHeader