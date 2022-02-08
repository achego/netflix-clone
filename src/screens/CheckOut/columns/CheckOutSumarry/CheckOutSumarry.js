import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Burger from '../../../BurgerBuilder/columns/Burger/Burger'
import cs from './CheckOutSumarry.module.css'


const CheckOutSumarry = (props) => {

    const navigation = useNavigate()

    useEffect(() => {
        if (Object.keys(props.ingredients).length === 0) {
            console.log('null');
            navigation('/', {
                replace: true
            })
        }
    }, [])

    
    return (
        <div className={cs.CheckOutSumarry}>
            <h1>We hope it taste well!!</h1>
            <Burger ingredients={props.ingredients} />
            <div className={cs.button}>
                    <button 
                        style={{color: 'green'}}
                        onClick={() => navigation('/', {replace: true})}>Cancel</button>
                    <button 
                        style={{color: 'red'}}
                        onClick={() => navigation('/checkout/contact-data', {replace: true})}>Continue</button>
                </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        price: state.totalPrice
    }
}

export default connect(mapStateToProps)(CheckOutSumarry)
