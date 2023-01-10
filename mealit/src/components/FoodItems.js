import React from 'react'
import Meal from './Meal'
import './FoodMenuContainer.css'

function FoodItem({ product }) {
    return (
        <>
            <p className='blockName catagoryName'>{product[0]}</p>
            <div className='foodMenuContainer'>
                {product[1].map((prod) => {
                    return <Meal key={prod._id} meal={prod} />
                })}

            </div>
        </>
    )
}

export default FoodItem