import React, { useContext, useState } from 'react'
import { CartContext } from '../CartContext'

function Meal({ meal }) {
    const { cart, setCart } = useContext(CartContext)
    const [isAdding, setIsAdding] = useState(false)
    const addtoCart = (e, meal) => {
        e.preventDefault()
        const _cart = { ...cart } //this prevents pass by reference

        /*cart: {
            items: [
                "5eee651fsdsdf739f8c123fd736ee" : {
                        },
            ];
            totalSum: Integer;
        }
        */


        //checking if cart.item exits
        if (!_cart.item) {
            _cart.item = {}
        }
        // //checking if product already in cart
        if (!(_cart.item[meal._id])) {
            _cart.item[meal._id] = {
                qnt: 1,
                meal: meal
            }
        } else {
            _cart.item[meal._id].qnt = _cart.item[meal._id].qnt + 1
        }
        if (!_cart.totalItems) {
            _cart.totalItems = 1
        } else {
            _cart.totalItems = _cart.totalItems + 1
        }
        setCart(_cart)
        setIsAdding(true)
        setTimeout(() => {
            setIsAdding(false)
        }, 300)
    }
    return (
        <div className='food'>
            <img src={meal.image} alt='biryaniImg' />
            <div className='foodDescrption'>
                <p className='itemName'>{meal.name}</p>
                <p className='itemdesc'>{meal.desc}</p>
                <div className='pricenadd'>
                    <p>₹{meal.price}</p>
                    <button disable={isAdding} onClick={(e) => addtoCart(e, meal)} className='btn'>Add{isAdding ? 'ed' : ''}</button>
                </div>
            </div>
        </div>
    )
}

export default Meal