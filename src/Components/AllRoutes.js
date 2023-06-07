import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../Pages/Cart/Cart'
import Checkout from '../Pages/Checkout/Checkout'
import Main from '../Pages/Home/Main'
import Placeorder from '../Pages/Placeorder/Placeorder'
import ProductsMens from '../Pages/Products/ProductsMens'

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/mens-clothing" element={<ProductsMens />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/placeorder" element={<Placeorder />} />
    </Routes>
  )
}
