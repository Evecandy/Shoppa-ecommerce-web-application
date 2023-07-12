
import "./Header.css";
import { AiOutlineShoppingCart } from "react-icons/Ai";
import { Link } from "react-router-dom";

function SignedinHeader() {
  return (
    <>
      <header>
     
      <Link to="/">
        <a href="" className="logo a" >
          Shoppa
        </a>
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
          
        <Link to= "/myorders">
          <a className="my-orders a" href="">
            My orders
          </a>
          </Link>

          <Link to= "/">
          <a className="sign-out a" href="">
            Sign out
          </a>
          </Link>

          <div className="cart-icon">
            <Link to = "/cart">
            <AiOutlineShoppingCart color="white" />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default SignedinHeader;
