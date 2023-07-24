import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import Signout from "./Components/Header"
import Products from "./Pages/Products";
import Product from "./Pages/Product";
import MyOrders from "./Pages/MyOrders";
import Cart from "./Pages/Cart";
import Payment from "./Pages/Payment";
import OrderDetails from "./Pages/OrderDetails";
import NotFound from "./Pages/NotFound";
import Admin from "./Pages/Admin/Admin";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initAuth } from "./Redux/userSlice";


function App() {
  const dispatch = useDispatch();
  const authUser = useSelector(state=>state.users.authUser);

  useEffect(()=>{
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    const role = localStorage.getItem('role');
    const authUser = token && username && role ? {token, username, role} : null
    dispatch(initAuth(authUser))
  },[])

  return (
    <>
      <BrowserRouter>
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/signup" element={!authUser ? <Signup /> : authUser.role==='admin' ? <Navigate to="/admin"/> : <Navigate to="/"/>} />
            <Route path="/signin" element= {!authUser ? <Signin /> : authUser.role==='admin' ? <Navigate to="/admin"/> : <Navigate to="/"/> }/>
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/myorders" element={authUser ? <MyOrders /> : <Navigate to="/signin"/>} />
            <Route path="/cart" element={authUser ? <Cart /> : <Navigate to="/signin"/>} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/order/:id" element={authUser ? <OrderDetails /> : <Navigate to="/signin"/>} />
            <Route path="/admin/*" element={!authUser ? <Signin/> : authUser?.role === 'admin' ? <Admin /> : <Navigate to="/"/>}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
