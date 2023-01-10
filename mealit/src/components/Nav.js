import React, { useContext } from 'react'
import '../App.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';

function Nav() {
    const { cart } = useContext(CartContext)
    return (
        <div >
            <div className='navWrap'>
                <div>
                    <h1 className='logotxt1'>meal</h1>
                    <h1 className='logotxt2'>Er</h1>
                </div>
                <Link to={'/cart'} className={' cart'} >
                    <img src='/cartLogo.png' className='cartLogo' alt='cartLogo' />
                    <p className='cartCount'>{cart.totalItems ? cart.totalItems : 0}</p>
                    <p>Cart</p>
                </Link>

            </div>

        </div>

    )
}

export default Nav