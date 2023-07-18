import "./Header.css";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  
  return (
    <>
      <header>
     
      <Link to="/" className="logo a">
          Shoppa
        </Link>
        <nav>
          <a className="women" href="">
            Women
          </a>
          <a className="men" href="">
            Men
          </a>
          <a className="kids" href="">
            Kids
          </a>
        </nav>
        <div className="header-right">
            {isSignedIn ? (
              <a href ="/homepage">Sign out</a>
             ) : (
          <div className="auth-btns">
            <Link to="/signup">
              <button className="sign-up btn green-btn">Sign up</button>
            </Link>
            
            <Link to= "/signin" className="sign-in a">
              Sign in
            </Link>

            </div>
            )}
          <div className="cart-icon">
           <Link to = "/cart"> <BsCart3 color="white" /></Link>
          </div>
          <div>Sign out</div>
        </div>
      </header>
    </>
  );
}

export default Header;
