import "./Header.css";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../Redux/userSlice";


function Header() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const authUser = useSelector((state) => state.users.authUser);
  const dispatch = useDispatch();
  const cartItemsCount = useSelector(state=>state.cart.items.length)

  function signout (){
    localStorage.removeItem("username");
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    dispatch(signOut())
  }

  return (
    <>
      <header>
        <Link to="/" className="logo a">
          Shoppa
        </Link>
        <nav>
        <Link to="/women" className="women">
          Women
        </Link>
        <Link to="/men" className="men">
          Men
        </Link>
        <Link to="/kids" className="kids">
          Kids
        </Link>
        </nav>
        <div className="header-right">
          
          {authUser ? (
            <>
              <button onClick={signout}>Sign out</button>
              <Link to="/myorders" id="my-orders-btn">My Orders</Link>
            </>
            
          ) : (
            <div className="auth-btns">
              <Link to="/signup">
                <button className="sign-up btn green-btn">Sign up</button>
              </Link>

              <Link to="/signin" className="sign-in a">
                Sign in
              </Link>
            </div>
          )}
          {authUser?.role === 'admin' && <Link to='/admin' id="admin-dashboard-btn">admin dashboard</Link>}
          <div className="cart-icon">
            <Link to="/cart">
              {" "}
              <BsCart3 color="white" />
              <span style={{color:"white"}}>{cartItemsCount}</span>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
