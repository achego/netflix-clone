import React from 'react'
import cs from './BackDrop.module.css'

const BackDrop = (props) => {
    return (
        props.show?<div 
                        className={cs.BackDrop}
                        onClick={props.onClick}></div>:null
    )
}

export default BackDrop
