import "./Header.css";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

function Header() {
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
          <Link to="/signup">
            <button className="sign-up btn green-btn">Sign up</button>
          </Link>
          <Link to= "/signin" className="sign-in a">
          
            Sign in
          
          </Link>
          
          <div className="cart-icon">
           <Link to = "/cart"> <BsCart3 color="white" /></Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
