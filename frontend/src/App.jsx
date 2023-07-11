import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Header from "./Components/Header.jsx"
import Footer from "./Components/Footer.jsx"
import Signup from './Pages/Signup'
import Signin from './Pages/Signin'
import Products from './Pages/Products'

function App() {
  

    return (
      <>
      <Header/>
      
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/products" element={<Products/>}/>
          </Routes>
        </BrowserRouter>
      </main>
      
      <Footer/>
      </>
    )
  }
  
  export default App