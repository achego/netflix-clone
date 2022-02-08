
// Field Validity

export function checkNamevalidity(value, fieldName, length, errorMessage) {
    const conditions = [
        emptyFieldCheck(value, fieldName, errorMessage),
        fieldLengthCheck(value, length, fieldName, errorMessage)
    ]
    
    return conditionsCheck(conditions)
}

export function checkEmailValidity(value, fieldName, length, errorMessage) {
    const condition = [
        emptyFieldCheck(value, fieldName, errorMessage),
        fieldLengthCheck(value, length, fieldName, errorMessage),
        emailValidityCheck(value, errorMessage),
        
    ]
    return conditionsCheck(condition)
}

export function checkAdressValidity(value, fieldName, length, errorMessage) {
    const condition = [
        emptyFieldCheck(value, fieldName, errorMessage),
        fieldLengthCheck(value, length, fieldName, errorMessage),    
    ]
    return conditionsCheck(condition)
}

export function checkPasswordValidity(value, fieldName, length, errorMessage) {
    const condition = [
        emptyFieldCheck(value, fieldName, errorMessage),
        fieldLengthCheck(value, length, fieldName, errorMessage),    
    ]
    return conditionsCheck(condition)
}







export function conditionsCheck(conditions, type) {
    const failedCondition = []
    for (let condition of conditions) {
        if (condition !== true) {
            failedCondition.push(condition)
        }
    }
    if (failedCondition.length <= 0) {
        return true
    }
    else {
        if (type === 'form'){
            return false
        }
        return failedCondition[0]
    }
}



// Utility Functions
const emptyFieldCheck = (value, fieldName='Field', errorMessage = fieldName + ' field cannot be empty') => {
    if (value.length <= 0) {
        return errorMessage
    }
    else {
        return true
    }
}

const fieldLengthCheck = (value, length, fieldName, errorMessage=fieldName + ' should not be less than ' + length + ' Characters') => {
    if (value.length < length ) {
        return errorMessage
    }
    else {
        return true
    }
}

const emailValidityCheck = (value, errorMessage='Enter a valid email') => {
    if (!value.includes('@')) {
        return errorMessage
    }
    else {
        return true
    }
}

