import React from 'react'
import PropTypes from 'prop-types'
import cs from './InputWithLabel.module.css'


const InputWithLabel = (props) => {

    let element = null
    
    switch (props.inputtype) {
        case 'input': element =  (
            <>
                <label>{props.title}</label>
                <input 
                {...props}/>
                {props.errortext==='true'?null:<p className={cs.error}>{props.errortext}</p>}
            </>
        )
        break;
        case 'select': element = (
            <select {...props}>
                {props.children}
            </select>
        )
        break;
    
        default:
            break;
    }
    return (
        <div className={cs.InputWithLabel}>
            {element}
        </div>
    )
}

InputWithLabel.defaultProps = {
    title: 'Title',
    type: "text",
}
InputWithLabel.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,

}

export default InputWithLabel
