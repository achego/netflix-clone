import React from 'react'
import Burger from '../../screens/BurgerBuilder/columns/Burger/Burger'
import cs from './LoadingAnimation.module.css'

const ingredients = {
    salad: 1,
    bacon: 1,
    cheese: 1,
    meat: 1,
}

const LoadingAnimation = () => {
    
    return (
        <div className={cs.LoadingAnimation}>
            <Burger 
                ingredients={ingredients}
                text='Loading..'
                width='70px' height='70px' />
        </div>
    )
}

export default LoadingAnimation
