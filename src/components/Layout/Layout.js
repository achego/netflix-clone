import React, { useState } from 'react'
import NavBar from '../NavBar/NavBar'
import SideDrawer from '../UI/SideDrawer/SideDrawer'
import cs from './Layout.module.css'

const Layout = (props) => {

    const [showSidebar, setShowSidebar] = useState(false)

    const toogleSidebar = () => {
        setShowSidebar(!showSidebar)
    }

    return (
        <div className={cs.Layout}>
            <NavBar 
                toogleSidebar={toogleSidebar}/>
            <SideDrawer 
                showSidebar={showSidebar}
                toogleSidebar={toogleSidebar}
                />
            <main>
                {props.children}
            </main>
        </div>
    )
}

export default Layout
