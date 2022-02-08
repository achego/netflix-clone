import React from 'react'
import cs from './Order.module.css'

const Order = (props) => {
    const ingredients = []
    
    for (let ingr in props.ingredients) {
        const ingrAmount = props.ingredients[ingr]
        if (ingrAmount > 0) {
            ingredients.push({
                ingrName: ingr,
                ingrAmount: ingrAmount
            })
        }
    }

    const allIngr = ingredients.map( ingr => {
        return <p
                    key={ingr.ingrName}>
                {ingr.ingrName} : 
                    <span>
                        {ingr.ingrAmount}
                    </span>
                </p>
    })

    return (
        <div className={cs.Order}>
            <div className={cs.ingredients}>
                <h3>Ingredients</h3>
                {allIngr} 
            </div>
            <p className={cs.price}>Price $<strong>{props.price.toFixed(2)}</strong></p>
        </div>
    )
}

export default Order
