import ankara from "../assets/ankara.jpg";
import "./Cart.css";
import { GrFavorite, GrPaypal } from "react-icons/gr";
import { CiCircleRemove } from "react-icons/ci";
import { BiLogoVisa, BiLogoMastercard } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Cart() {
  const [cart, setCart] = useState([])
  let [subtotal, setSubtotal] = useState(0)
  const authUser = useSelector((state)=> state.users.authUser)
  

  async function fetchCart(){
    const response = await fetch('http://localhost:8080/cart', {
      headers:{token:authUser?.token}
    })
    const data = await response.json()
    console.log(data);
    const cartList = []
    let total = 0
    data.forEach(item=>{
      total += item.price * item.quantity
      cartList.push (  
      <div className="cart-item" key={item.id}>
      <div
        className="item-image"
        style={{ backgroundImage: `url(${item.image}) ` }}
      ></div>
      <div className="item-details">
        <div>{item.name}</div>
        <div className="price">Ksh {item.price}</div>
  
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
            className="quantity" defaultValue={item.quantity}
            onChange={(e) => {}}
          />
        </div>
        <GrFavorite color="grey" />
  
        <div id="subtotal">Subtotal Ksh {item.quantity * item.price}</div>
      </div>
      <div className="remove-icon">
        <CiCircleRemove color="black" />
      </div>
    </div>
    )
    
    }) 
    setCart(cartList)
    setSubtotal(total)
  }

  useEffect(()=>{
    fetchCart()
  },[])
  return (
    <>
      <div id="cart-container">
        <div id="total">
          TOTAL
          <hr />
          Subtotal Ksh {subtotal}
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

            {cart.length ? cart : (<div> Your cart is empty </div>)}

        </div>
      </div>
    </>
  );
}

export default Cart;
