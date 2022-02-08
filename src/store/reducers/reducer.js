import actionTypes from "../actions/actionTypes"

const initialState = {
    ingredients: {},
    totalPrice: 4,
    ingredientPrices: {},
}

const reducer = (state = initialState, action) => {
    const newState = {...state, ingredients: {...state.ingredients}}
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
             // update ingredients
            newState.ingredients[action.ingrType] = state.ingredients[action.ingrType] + 1
            // update price
            newState.totalPrice = state.totalPrice + state.ingredientPrices[action.ingrType]
           return newState

        case actionTypes.REMOVE_INGREDIENT:
            // update ingredients
            newState.ingredients[action.ingrType] = state.ingredients[action.ingrType] - 1
            // update price
            newState.totalPrice = state.totalPrice - state.ingredientPrices[action.ingrType]
           return newState
        
        case actionTypes.INIT_INGREDIENT_AND_PRICE:
            console.log('In here');
            newState.ingredients = action.ingredients
            newState.totalPrice = action.basePrice
            newState.ingredientPrices = action.ingredientPrices
            return newState

        default:
            return state;
    }
}

export default reducer