import React from 'react'
import BackDrop from '../../../../components/UI/BackDrop/BackDrop'
import cs from './OrderSummary.module.css'

const OrderSummary = (props) => {

    const ingredients = []
    for (const ingr in props.ingredients) {
        ingredients.push(<li key={ingr}>
            {ingr} : <span>{props.ingredients[ingr]}</span>
        </li>)
    }
    return (
        <div>
            <BackDrop 
                show={props.ordered}
                onClick={props.cancelOrder}/>
            <div 
                className={cs.OrderSummary}
                style={{
                    '--translate': props.ordered?'translateY(0vh)':'translateY(-100vh)',
                    '--opacity': props.ordered?'1':'0'
                }}>
                <h2>Your Order</h2>
                <p>A delicious burger with the following ingredients</p>
                <ul>
                    {ingredients}
                </ul>
                <strong>Total Price: ${props.totalPrice.toFixed(2)}</strong>
                <p>Continue to Checkout ?</p>
                <div className={cs.button}>
                    <button 
                        style={{color: 'green'}}
                        onClick={props.cancelOrder}>Cancel</button>
                    <button 
                        style={{color: 'red'}}
                        onClick={props.continueOrder}>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary
