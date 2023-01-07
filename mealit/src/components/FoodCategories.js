import React from 'react'

function FoodCategories() {
    return (
        <div className='foodCatagerious'>
            <p className='blockName'>Add items to your plate from categories below :</p>
            <div className='foodCatageriousImg'>
                <div>
                    <img src='/foodCatagerious/burger.avif' className='foodItemImg' alt='img' />
                    <p>Burger</p>
                </div>
                <div>
                    <img src='/foodCatagerious/sandwich.avif' className='foodItemImg' alt='img' />
                    <p>Sandwich</p>
                </div>
                <div>
                    <img src='/foodCatagerious/thali.avif' className='foodItemImg' alt='img' />
                    <p>Thali</p>
                </div>
                <div>
                    <img src='/foodCatagerious/pizza.avif' className='foodItemImg' alt='img' />
                    <p>Pizza</p>
                </div>
                <div>
                    <img src='/foodCatagerious/chicken.webp' className='foodItemImg' alt='img' />
                    <p>Chicken</p>
                </div>
                <div>
                    <img src='/foodCatagerious/biryani.avif' className='foodItemImg' alt='img' />
                    <p>Biryani</p>
                </div>
            </div>
        </div>
    )
}

export default FoodCategories