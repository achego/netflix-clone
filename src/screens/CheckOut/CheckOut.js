import React from 'react'
import { Outlet } from 'react-router-dom'
import CheckOutSumarry from './columns/CheckOutSumarry/CheckOutSumarry'

const CheckOut = () => {
    return (
        <div>
            <CheckOutSumarry />
            <Outlet />
        </div>
    )
}

export default CheckOut
