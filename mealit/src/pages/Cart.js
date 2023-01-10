import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext'
import './Cart.css'
const Cart = () => {
    const { cart, setCart } = useContext(CartContext)
    let totalPrice = 0
    const getPrice = (item) => {
        let price = item.meal?.price
            ? item.meal.price * item.qnt : null
        totalPrice = totalPrice + price
        return price
    }
    const deleteProduct = (product) => {
        let _cart = { ...cart }
        _cart.totalItems = _cart.totalItems - product.qnt
        delete _cart.item[product.meal._id]
        setCart(_cart)

    }
    const increamentQnt = (item) => {
        const _cart = { ...cart }
        _cart.item[item.meal._id].qnt = _cart.item[item.meal._id].qnt + 1
        _cart.totalItems = _cart.totalItems + 1
        setCart(_cart)
    }
    const decrementQnt = (item) => {
        const _cart = { ...cart }
        if (_cart.item[item.meal._id].qnt === 1) {
            return
        }
        _cart.item[item.meal._id].qnt = _cart.item[item.meal._id].qnt - 1
        _cart.totalItems = _cart.totalItems - 1
        setCart(_cart)
    }
    return (
        <div className="container">

            {!cart.totalItems ?
                <div className='emptyCart'>
                    <Link to={'/'} className='blockName' >⬅️Home</Link>
                    <img src='empty-cart.png' width={'40%'} alt="emptyCartImg" />
                    <h1 className=''>Cart is empty</h1>
                </div> :
                < div className='cartBox'>
                    <div className='header'>
                        <p className="heading">Cart items</p>
                        <Link to={'/'} className='blockName' >Home</Link>
                    </div>
                    <ul className="cartList">
                        {Object.entries(cart.item).map((items) => {
                            return items.map((item) => {
                                {
                                    return !item.meal?.image ? "" : <li >
                                        <div className="cartFlex">
                                            <div className="imgName">
                                                <img src={item.meal.image
                                                } alt="product" />
                                                <p>{item.meal.name
                                                }</p>
                                            </div>
                                            <div>
                                                {console.log(item.qnt)}
                                                <button onClick={() => decrementQnt(item)} className={` ${item.qnt === 1 ? `disabled` : `couterBtn`}`} >-</button>
                                                <span >{item.qnt}</span>
                                                <button className="couterBtn" onClick={() => increamentQnt(item)}>+</button>
                                            </div>
                                            <p>₹ {getPrice(item)}</p>
                                            <button className="dltBtn" onClick={() => deleteProduct(item)}>Delete</button>
                                        </div>
                                    </li>
                                }
                            })
                        })}
                    </ul>

                    <hr />
                    <div className="total">
                        <b>Grand Total:</b> ₹ {totalPrice}
                    </div>
                    <div className="orderBtn">
                        <button className="dltBtn" onClick={() => {
                            window.alert('Order placed successfully')
                            setCart({})
                        }} >Order Now</button>
                    </div>
                </div>

            }
        </div >
    )
}
export default Cart