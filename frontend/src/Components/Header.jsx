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
          
          {authUser ? (
            <button onClick={signout}>Sign out</button>
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
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
