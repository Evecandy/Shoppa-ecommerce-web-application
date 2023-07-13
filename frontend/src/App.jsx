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
import OrderDetails from './Pages/OrderDetails'
import AdminDashboard from './Pages/Admin/AdminDashboard'
import Customers from './Pages/Admin/Customers'
import Orders from "./Pages/Admin/Orders"
import ProductsAdmin from './Pages/Admin/ProductsAdmin'


function App() {
  

    return (
      <>
      <BrowserRouter>
      <Header/>
      
      <main>
        
          <Routes>
            <Route path="/" element={<Products/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/myorders" element={<MyOrders/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/payment" element={<Payment/>}/>
            <Route path="/orderdetails" element={<OrderDetails/>}/>
            <Route path="/admindashboard" element={<AdminDashboard/>}/>
            <Route path="/customers" element={<Customers/>}/>
            <Route path="/orders" element={<Orders/>}/>
            <Route path="/products" element={<ProductsAdmin/>}/>



          </Routes>
       
      </main>
      <Footer/>
      </BrowserRouter>
      
      </>
    )
  }
  
  export default App