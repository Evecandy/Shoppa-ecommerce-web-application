import "./Header.css";
import { AiOutlineShoppingCart } from "react-icons/Ai";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <a href="#" className="logo">
          Shoppa
        </a>
        <nav>
          <a className="women" href="#">
            Women
          </a>
          <a className="men" href="#">
            Men
          </a>
          <a className="kids" href="#">
            Kids
          </a>
        </nav>
        <div className="header-right">
          <Link to="/signup">
            <button className="sign-up btn green-btn">Sign up</button>
          </Link>

          <a className="sign-in a" href="#">
            Sign in
          </a>
          <div className="cart">
            <AiOutlineShoppingCart color="white" />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
