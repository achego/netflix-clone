import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import cs from './NavigationItems.module.css'

const NavigationItems = (props) => {
    return (
        <nav className={[cs.NavigationItems, props.className && props.className].join(' ')}>
            <ul>
                <NavigationItem to='/'>Burger Builder</NavigationItem>
                <NavigationItem to='orders'>Orders</NavigationItem>
                <NavigationItem to='sign-up'>Sign Up</NavigationItem>
            </ul>
        </nav>
    )
}

export default NavigationItems
