import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Header from "./Components/Header.jsx"
import Footer from "./Components/Footer.jsx"
import Signup from './Pages/Signup'
import Signin from './Pages/Signin'
import Products from './Pages/Products'
import Product from './Pages/Product'
import MyOrders from './Pages/MyOrders'
import Cart from './Pages/Cart'
import Payment from './Pages/Payment'

function App() {
  

    return (
      <>
      <BrowserRouter>
      <Header/>
      
      <main>
        
          <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/myorders" element={<MyOrders/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/payment" element={<Payment/>}/>
          </Routes>
       
      </main>
      <Footer/>
      </BrowserRouter>
      
      </>
    )
  }
  
  export default App