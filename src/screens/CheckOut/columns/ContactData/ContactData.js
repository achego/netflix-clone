import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import InputWithLabel from '../../../../components/InputWithLabel/InputWithLabel'
import LoadingAnimation from '../../../../components/LoadingAnimation/LoadingAnimation'
import cs from './ContactData.module.css'
import { checkAdressValidity, checkEmailValidity, checkNamevalidity, conditionsCheck } from './formValidation'

const ContactData = (props) => {

    const [loading, setloading] = useState(false)
    const [error, seterror] = useState(false)
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [address, setaddress] = useState('')
    const [deliveryMethod, setdeliveryMethod] = useState('Fastest')
    const [nameErrorText, setnameErrorText] = useState('')
    const [emailErrorText, setemailErrorText] = useState('')
    const [addressErrorText, setaddressErrorText] = useState('')

    const navigate = useNavigate()

    const submitOrder = async (event) => {
        event.preventDefault()
        if (!isFormValid()) {
            return
        }
        const newOrder =  {
            ingredients: props.ingredients,
            price: props.price,
            customer: {
                name: name,
                email: email,
                address: address
            },
            deliveryMethod: deliveryMethod
          }

          setloading(true)
          const res = await fetch('http://localhost:5000/orders', {
              method: 'POST',
              headers: {
                  'Content-type': 'application/json'
              },
              body: JSON.stringify(newOrder)
          }) 
          console.log(res.status);

          if (res.status >= 404){
              setloading(false)
              seterror(true)
              form = <h2>Sorry the page cannot be found</h2>
              return
          }
          setloading(false)
          navigate('/', {
              replace: true
          })
    }

    const storeFormFields = (event, formName) => {
        switch (formName) {
            case 'name':
                setname(event.target.value)
                break;
            case 'email':
                setemail(event.target.value)
                break;
            case 'address':
                setaddress(event.target.value)
                break;
            case 'deliveryMethod':
                setdeliveryMethod(event.target.value)
                break;
        
            default:
                break;
        }
    }

    const isFormValid = () => {
        const nameCheck = checkNamevalidity(name, 'Name', 3)
        const emailCheck = checkEmailValidity(email, 'Email', 6)
        const addressCheck = checkAdressValidity(address, 'Address', 6)

        setnameErrorText(nameCheck.toString())
        setemailErrorText(emailCheck.toString())
        setaddressErrorText(addressCheck.toString())

        const conditions = [
            nameCheck,
            emailCheck,
            addressCheck
        ]

        return conditionsCheck(conditions, 'form')
    }

    let form = (
        <form>
            <InputWithLabel
                inputtype='input'
                title='Name' 
                type='text' 
                placeholder='Enter your name'
                onChange={(event) => storeFormFields(event, 'name')}
                errortext={nameErrorText} />
            <InputWithLabel
                inputtype='input' 
                title='Email'
                type='email' 
                placeholder='Enter your email' 
                onChange={(event) => storeFormFields(event, 'email')}
                errortext={emailErrorText}/>
            <InputWithLabel
                inputtype='input' 
                title='Address'
                type='text' 
                placeholder='street, city, country' 
                onChange={(event) => storeFormFields(event, 'address')}
                errortext={addressErrorText}/>
            <InputWithLabel 
                inputtype='select'
                onChange={(event) => storeFormFields(event, 'deliveryMethod')}>
                <option>Fastest</option>
                <option>Cheapest</option>
            </InputWithLabel>

            <button onClick={submitOrder}>Order</button>
            {/* <input type='text' placeholder='Enter your name' />
            <input type='email' placeholder='Enter your email' />
            <input type='text' placeholder='street, city, country' /> */}
        </form>
    )

    if (loading) {
        form = <LoadingAnimation />
    }

    if (error) {
        form = <h2 style={{
            color: 'red'
        }}>Sorry the page cannot be found</h2>
    }

    return (
        <div className={cs.ContactData}>
            <h3>Enter Your Contact detail</h3>
            {form}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        price: state.totalPrice
    }
}

export default connect(mapStateToProps)(ContactData)
