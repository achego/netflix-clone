import React from 'react'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'
import cs from './Burger.module.css'

const Burger = (props) => {
    let ingredients = []

    for (let ingr in props.ingredients){
        for (let i=0; i < props.ingredients[ingr]; i++){
            ingredients.push(<BurgerIngredients type={ingr}
            key={ingr + i} />)
        }   
    }

    if (ingredients.length === 0){
        ingredients = <p>{props.text}</p>
    }

    return (
        <div 
            className={cs.Burger}
            style={{
                height: props.height,
                width: props.width
            }}>
            <BurgerIngredients type='bread-top'/>
                {ingredients}
            <BurgerIngredients type='bread-bottom'/>
        </div>
    )
}

Burger.defaultProps = {
    width: '28rem',
    height: '20rem',
    text: 'Start adding your ingredients'
}

export default Burger
