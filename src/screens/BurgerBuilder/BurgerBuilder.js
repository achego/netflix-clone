import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import BuildControls from './columns/BuildControls/BuildControls'
import Burger from './columns/Burger/Burger'
import OrderSummary from './columns/OrderSummary/OrderSummary'
import * as burgerBuilderActions from '../../store/actions/burgerBuilderActions'
import { useEffect, useState } from 'react'

const BurgerBuilder = (props) => {

    // Router Constants
    const navigate = useNavigate()

    // Constants
    const [purchacing, setpurchacing] = useState(false)

    useEffect(() => {
        props.initIngredientsAndPrice()
    }, [])

    const updatePurchacing = () => {
        setpurchacing(true)
    }
    const cancelOrder = () => {
        setpurchacing(false)
    }
    const continueOrder = () => {
        navigate('/checkout')
    }
    return (
        <div>
            <OrderSummary 
            ingredients={props.ingredients}
            ordered={purchacing}
            cancelOrder={cancelOrder}
            continueOrder={continueOrder}
            totalPrice={props.totalPrice}/>
            <Burger ingredients={props.ingredients}/>
            <BuildControls 
                ingredients={props.ingredients}
                addIngredient={props.addIngredient}
                removeIngredient={props.removeIngredient}
                totalPrice={props.totalPrice}
                purchace={updatePurchacing}
                />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice
    }
}

const mapDispatchToProps = dispatch => {
    
    return {
        addIngredient: (ingrType) => dispatch(burgerBuilderActions.addIngredient(ingrType)),
        removeIngredient: (ingrType) => dispatch(burgerBuilderActions.removeIngredient(ingrType)),
        initIngredientsAndPrice: () => dispatch(burgerBuilderActions.initIngredientsAndPrice())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder)
