import AvaliableMeals from './AvaliableMeals'
import MealsSummary from './MealsSummary'
import React from 'react'
import Card from '../Ui/Card'
const Meals=()=>{
    return <React.Fragment>
        <MealsSummary></MealsSummary>
        <AvaliableMeals></AvaliableMeals>
    </React.Fragment>

}
export default Meals;