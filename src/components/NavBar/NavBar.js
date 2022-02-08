import React from 'react'
import Logo from '../Logo/Logo'
import cs from './NavBar.module.css'
import NavigationItems from './NavigationItems/NavigationItems'
import { FiMenu } from 'react-icons/fi'

const NavBar = (props) => {
    console.log('NavBar');
    return (
        <div className={cs.NavBar}>
            <FiMenu 
                onClick={props.toogleSidebar}
                fontSize={'1.5rem'}
                className={cs.Menu}/>
            <Logo height='80%'/>
            <NavigationItems className={cs.NavItems}/>
        </div>
    )
}

export default NavBar
