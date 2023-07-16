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
import NotFound from './Pages/NotFound'


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
            <Route path="/product/:id" element={<Product/>}/>
            <Route path="/myorders" element={<MyOrders/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/payment" element={<Payment/>}/>
            <Route path="/order/:id" element={<OrderDetails/>}/>
            <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
            <Route path="/admin/customers" element={<Customers/>}/>
            <Route path="/admin/orders" element={<Orders/>}/>
            <Route path="/admin/products" element={<ProductsAdmin/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
       
      </main>
      <Footer/>
      </BrowserRouter>
      
      </>
    )
  }
  
  export default App