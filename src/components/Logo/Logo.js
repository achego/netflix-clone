import React from 'react'
import logoImg from '../../assets/images/28.1 burger-logo.png'
import cs from './Logo.module.css'
import PropTypes from 'prop-types'


const Logo = (props) => {
    return (
        <div 
            className={cs.Logo}
            style={{
                '--height': props.height,
                '--background': props.background
            }}>
            <img src={logoImg} alt='imgLogo'></img>
        </div>
    )
}

Logo.defaultProps = {
    height: '100%',
    background: 'white'
}

Logo.propTypes = {
    height: PropTypes.string,
    background: PropTypes.string
}

export default Logo
