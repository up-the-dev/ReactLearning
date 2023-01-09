import React from 'react'
import AppHeader from '../components/AppHeader'
import FoodCategories from '../components/FoodCategories'
import FoodContainer from './FoodContainer'
function Home() {
    return (
        <div>
            <AppHeader />
            <FoodCategories />
            <FoodContainer />
        </div>
    )
}

export default Home