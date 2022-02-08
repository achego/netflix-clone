import React from 'react'
import { NavLink } from 'react-router-dom'
import cs from './NavigationItem.module.css'

const NavigationItem = (props) => {
    return (
        <li className={cs.NavigationItem}>
            <NavLink 
                to={props.to}
                className={({isActive}) => isActive?cs.active:null}
               >
                {props.children}
            </NavLink>
        </li>
    )
}

export default NavigationItem
