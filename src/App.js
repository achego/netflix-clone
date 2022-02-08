import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import SignUp from './screens/Authentication/SignUp/SignUp'
import BurgerBuilder from './screens/BurgerBuilder/BurgerBuilder'
import CheckOut from './screens/CheckOut/CheckOut'
import ContactData from './screens/CheckOut/columns/ContactData/ContactData'
import Orders from './screens/Orders/Orders'

const App = () => {

  return ( 
    <div>
      <Layout>
        <Routes>
          <Route path='/' element={<BurgerBuilder />} />
          <Route path='checkout' element={<CheckOut />}>
            <Route path='contact-data' element={<ContactData />} />
          </Route>
          <Route path='orders' element={<Orders />}/>
          <Route path='sign-up' element={<SignUp />}/>
        </Routes>
      </Layout>
    </div>
  )
}

export default App
