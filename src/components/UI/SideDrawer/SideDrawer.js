import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../../NavBar/NavigationItems/NavigationItems'
import BackDrop from '../BackDrop/BackDrop'
import cs from './SideDrawer.module.css'

const SideDrawer = (props) => {
    return (
        <>
            <BackDrop 
                show={props.showSidebar}
                onClick={props.toogleSidebar}/>
            <div 
                className={cs.SideDrawer}
                style={{
                    '--translate': props.showSidebar?'translate(0)':'translate(-100%)',
                }}>
                <div className={cs.navs}>
                    <Logo />
                </div>
                <NavigationItems />
            </div>
        </>
    )
}

export default SideDrawer
