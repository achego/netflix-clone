import React, { useState } from 'react'
import InputWithLabel from '../../../components/InputWithLabel/InputWithLabel'
import * as form from '../../CheckOut/columns/ContactData/formValidation'
import cs from './SignUp.module.css'

const SignUp = () => {

    const [loading, setloading] = useState(false)
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [emailErrorText, setemailErrorText] = useState('')
    const [passwordErrorText, setpasswordErrorText] = useState('')
    const [confirmPasswordErrorText, setaddressErrorText] = useState('')

    const storeFormFields = (event, formName) => {
        switch (formName) {
            case 'email':
                setemail(event.target.value)
                break;
            case 'password':
                setpassword(event.target.value)
                break;
            case 'confirm-password':
                setconfirmPassword(event.target.value)
                break;
            default:
                break;
        }
    }

    const submitOrder = async (event) => {
        event.preventDefault()
        if (!isFormValid()) {
            return
        }
          setloading(true)


          setloading(false)
    }

    const isFormValid = () => {
        
        const emailCheck = form.checkEmailValidity(email, 'Email', 6)
        const passwordCheck = form.checkPasswordValidity(password, 'Password', 8,)

        setemailErrorText(emailCheck.toString())
        setpasswordErrorText(passwordCheck.toString())

        const conditions = [
            emailCheck,
            passwordCheck
        ]

        return form.conditionsCheck(conditions, 'form')
    }

    return (
       <div className={cs.SignUp}> 
            <form>
                <InputWithLabel
                    inputtype='input'
                    title='Email' 
                    type='email' 
                    placeholder='Enter your email'
                    onChange={(event) => storeFormFields(event, 'email')}
                    errortext={emailErrorText} />
                <InputWithLabel
                    inputtype='input' 
                    title='Password'
                    type='password' 
                    placeholder='Enter your password' 
                    onChange={(event) => storeFormFields(event, 'password')}
                    errortext={passwordErrorText}/>
                <InputWithLabel
                    inputtype='input' 
                    title='Confirm password'
                    type='password' 
                    placeholder='Re-type your password' 
                    onChange={(event) => storeFormFields(event, 'confirm-password')}
                    errortext={confirmPasswordErrorText}/>

                <button onClick={submitOrder}>Sign Up</button>
            </form>
       </div>
    )
}

export default SignUp
