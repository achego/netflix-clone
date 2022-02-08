import actionTypes from "./actionTypes"

export const addIngredient = (ingrType) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingrType: ingrType 
    }
}

export const removeIngredient = (ingrType) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingrType: ingrType 
    }
}

// const fetchIngr = async () => {
    
//     // setIngredients(ingr)
// }
// fetchIngr()

export const initIngredientsAndPrice = () => {
    return async dispatch => {
        const ingredients =  await (await fetch('http://localhost:5000/ingredients')).json()
        const price = await (await fetch('http://localhost:5000/price')).json()
        dispatch({
            type: actionTypes.INIT_INGREDIENT_AND_PRICE,
            ingredients: ingredients,
            basePrice: price.basePrice,
            ingredientPrices: price.ingredientPrices
        })
    }
}