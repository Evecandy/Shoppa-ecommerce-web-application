import ankara from "../assets/ankara.jpg";
import "./Cart.css";
import { GrFavorite, GrPaypal } from "react-icons/gr";
import { CiCircleRemove } from "react-icons/ci";
import { BiLogoVisa, BiLogoMastercard } from "react-icons/bi";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <>
      <div id="cart-container">
        <div id="total">
          TOTAL
          <hr />
          Subtotal Ksh 18,000
          <Link to="/payment">
            <button className="btn green-btn">CHECKOUT</button>
          </Link>
          We accept
          <BiLogoVisa color="blue" />
          <GrPaypal color="blue" />
          <BiLogoMastercard />
        </div>

        <div>
          <div id="cart-heading">My Cart</div>
          <div className="cart-item">
            <div
              className="item-image"
              style={{ backgroundImage: `url(${ankara}) ` }}
            ></div>
            <div className="item-details">
              <div className="price">Ksh 4,500</div>

              <div className="item-options">
                <label htmlFor="">Size</label>
                <select className="size">
                  <option value="small">S</option>
                  <option value="medium">M</option>
                  <option value="large">L</option>
                </select>
                <label htmlFor="quantity">Qty</label>
                <input
                  type="number"
                  className="quantity" defaultValue={1}
                  onChange={(e) => {}}
                />
              </div>
              <GrFavorite color="grey" />

              <div id="subtotal">Subtotal Ksh 4,500</div>
            </div>
            <div className="remove-icon">
              <CiCircleRemove color="black" />
            </div>
          </div>

          <div className="cart-item">
            <div
              className="item-image"
              style={{ backgroundImage: `url(${ankara}) ` }}
            ></div>
            <div className="item-details">
              <div className="price">Ksh 4,500</div>

              <div className="item-options">
                <label htmlFor="">Size</label>
                <select className="size">
                  <option value="small">S</option>
                  <option value="medium">M</option>
                  <option value="large">L</option>
                </select>
                <label htmlFor="quantity">Qty</label>
                <input
                  type="number"
                  className="quantity" defaultValue={1}
                  onChange={(e) => {}}
                />
              </div>
              <GrFavorite color="grey" />

              <div id="subtotal">Subtotal Ksh 4,500</div>
            </div>
            <div className="remove-icon">
              <CiCircleRemove color="black" />
            </div>
          </div>

          <div className="cart-item">
            <div
              className="item-image"
              style={{ backgroundImage: `url(${ankara}) ` }}
            ></div>
            <div className="item-details">
              <div className="price">Ksh 4,500</div>

              <div className="item-options">
                <label htmlFor="">Size</label>
                <select className="size">
                  <option value="small">S</option>
                  <option value="medium">M</option>
                  <option value="large">L</option>
                </select>
                <label htmlFor="quantity">Qty</label>
                <input
                  type="number"
                  className="quantity" defaultValue={1}
                  onChange={(e) => {}}
                />
              </div>
              <GrFavorite color="grey" />

              <div id="subtotal">Subtotal Ksh 4,500</div>
            </div>
            <div className="remove-icon">
              <CiCircleRemove color="black" />
            </div>
          </div>

          <div className="cart-item">
            <div
              className="item-image"
              style={{ backgroundImage: `url(${ankara}) ` }}
            ></div>
            <div className="item-details">
              <div className="price">Ksh 4,500</div>

              <div className="item-options">
                <label htmlFor="">Size</label>
                <select className="size">
                  <option value="small">S</option>
                  <option value="medium">M</option>
                  <option value="large">L</option>
                </select>
                <label htmlFor="quantity">Qty</label>
                <input
                  type="number"
                  className="quantity" defaultValue={1}
                  onChange={(e) => {}}
                />
              </div>
              <GrFavorite color="grey" />

              <div id="subtotal">Subtotal Ksh 4,500</div>
            </div>
            <div className="remove-icon">
              <CiCircleRemove color="black" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
