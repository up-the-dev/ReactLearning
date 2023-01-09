import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext'

const Cart = () => {
    const { cartItems, setCartItems } = useContext(CartContext)
    return (
        <div className="container">

            {/* {!cartItems.totalItems ?
                <div>
                    <img src='images/empty-cart.png' />
                    <h1 className='text-3xl font-medium font-serif text-center'>Cart is empty</h1>
                </div> : */}
            <div className='cartBox'>
                <div className='header'>
                    <p className="heading">Cart items</p>
                    <Link to={'/'} className='Link' >Home</Link>
                </div>

                <ul className="cartList">
                    <li >
                        <div className="cartFlex">
                            <div className="imgName">
                                <img src='/biryani/Goanfish.avif' alt="product" />
                                <p>Goanfish biryani</p>
                            </div>
                            <div>
                                <button className="couterBtn" >-</button>
                                <span >1</span>
                                <button className="couterBtn ">+</button>
                            </div>
                            <p>₹ 250</p>
                            <button className="dltBtn" >Delete</button>
                        </div>
                    </li>
                    <li >
                        <div className="cartFlex">
                            <div className="imgName">
                                <img src='/biryani/Goanfish.avif' alt="product" />
                                <p>Goanfish biryani</p>
                            </div>
                            <div>
                                <button className="couterBtn" >-</button>
                                <span >1</span>
                                <button className="couterBtn ">+</button>
                            </div>
                            <p>₹ 250</p>
                            <button className="dltBtn" >Delete</button>
                        </div>
                    </li>
                    <li >
                        <div className="cartFlex">
                            <div className="imgName">
                                <img src='/biryani/Goanfish.avif' alt="product" />
                                <p>Goanfish biryani</p>
                            </div>
                            <div>
                                <button className="couterBtn" >-</button>
                                <span >1</span>
                                <button className="couterBtn ">+</button>
                            </div>
                            <p>₹ 250</p>
                            <button className="dltBtn" >Delete</button>
                        </div>
                    </li>
                </ul>
                <hr />
                <div className="total">
                    <b>Grand Total:</b> ₹ 2430
                </div>
                <div className="orderBtn">
                    <button className="dltBtn" >Order Now</button>
                </div>
            </div>


        </div>
    )
}
export default Cart