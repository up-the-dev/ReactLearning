import React from 'react'

function Meal({ meal }) {
    return (
        <div className='food'>
            <img src={meal.image} alt='biryaniImg' />
            <div className='foodDescrption'>
                <p className='itemName'>{meal.name}</p>
                <p className='itemdesc'>{meal.desc}</p>
                <div className='pricenadd'>
                    <p>₹{meal.price}</p>
                    <button className='btn'>Add</button>
                </div>
            </div>
        </div>
    )
}

export default Meal