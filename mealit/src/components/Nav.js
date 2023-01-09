import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div >
            <div className='navWrap'>
                <div>
                    <h1 className='logotxt1'>meal</h1>
                    <h1 className='logotxt2'>Er</h1>
                </div>
                <Link to={'/cart'} className={'Link cart'} >
                    <img src='/cartLogo.png' className='cartLogo' alt='cartLogo' />
                    <p className='cartCount'>2</p>
                    <p>Cart</p>
                </Link>

            </div>

        </div>

    )
}

export default Nav