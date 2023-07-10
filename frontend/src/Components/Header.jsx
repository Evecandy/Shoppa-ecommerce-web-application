import "./Header.css";
import {AiOutlineShoppingCart} from "react-icons/Ai"
function Header() {
  

    return (
      <>
        <div className="header">
        <a href="#" className="logo">Shoppa</a>
        <div className="header-center">
        <a className="women" href="#">Women</a>
        <a className="men"href="#">Men</a>
        <a className="kids"href="#">Kids</a>
       
        </div>
        <div className="header-right">
        <button className="sign-up" >Sign up</button>
        <a className="sign-in"href="#">Sign in</a>
        <div className="cart">
        <AiOutlineShoppingCart color="white"/>
        </div>
        </div>
        </div>

      </>
    )
  }
  
  export default Header
  