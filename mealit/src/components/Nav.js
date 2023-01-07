import React from 'react'
import '../App.css';

function Nav() {
    return (
        <div >
            <div className='navWrap'>
                <div>
                    <h1 className='logotxt1'>meal</h1>
                    <h1 className='logotxt2'>Er</h1>
                </div>
                <div className='cart'>
                    <img src='/cartLogo.png' className='cartLogo' alt='cartLogo' />
                    <p className='cartCount'>2</p>
                    <p>Cart</p>
                </div>
            </div>

        </div>

    )
}

export default Nav