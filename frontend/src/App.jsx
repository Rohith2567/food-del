import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopUp/LoginPopup'

import Example from './pages/Example'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'
const App = () => {

const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin} />:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          < Route path='/' element={<Home />} />
          < Route path='/cart' element={<Cart />} />
          < Route path='/order' element={<PlaceOrder />} />
          < Route path='/verify' element={<Verify />} />
          < Route path='/myorders' element={<MyOrders />} />

          {/* <Route path='/list' element={<Example userId={1}/>} /> */}
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
