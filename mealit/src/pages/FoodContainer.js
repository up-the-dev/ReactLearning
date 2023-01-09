import React from 'react'
import { useEffect, useState } from 'react'
import FoodItem from '../components/FoodItems'
const jsondat = require('../menu.json')

function FoodContainer() {

    const [products, setProducts] = useState([])
    useEffect(() => {
        setProducts(jsondat)
    }, [])

    return (
        <div className='foodContainer'>
            {Object.entries(products).map((prod) => {
                return <FoodItem product={prod} key={prod[0]} />
            })}
        </div>
    )
}

export default FoodContainer