import React, { useEffect, useState } from 'react'
import LoadingAnimation from '../../components/LoadingAnimation/LoadingAnimation'
import Order from './Order/Order'
import cs from './Orders.module.css'

const Orders = () => {

    const [orders, setorders] = useState([])
    const [loading, setloading] = useState(true)

    useEffect(() => {
        const getOrders = async () => {
            const orders =  await (await fetch('http://localhost:5000/orders')).json()
            setorders(orders)
            setloading(false)
        }
        getOrders()
    }, [])

    let allOrders = orders.map(order => {
        return <Order 
                    key={order.id}
                    ingredients={order.ingredients}
                    price={order.price}/>
    })

    if (loading){
        allOrders = <LoadingAnimation />
    }

    if (orders.length <= 0 && !loading) {
        allOrders = <h1 style={{
            textAlign: 'center',
            paddingTop: 'calc(100vh/2.3)'
        }}>Ooops!! no Order yet</h1>
    }
    return (
        <div className={cs.Orders}>
            {allOrders}
        </div>
    )
}

export default Orders
