import ankara from "../assets/ankara.jpg";
import "./Cart.css";
import { GrFavorite, GrPaypal } from "react-icons/gr";
import { CiCircleRemove } from "react-icons/ci";
import { BiLogoVisa, BiLogoMastercard } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Payment from "./Payment";
import { fetchCartFailure, fetchCartSuccess, fetchingCart } from "../Redux/cartSlice";

function Cart() {
  const [cart, setCart] = useState([])
  let [subtotal, setSubtotal] = useState(0)
  const [ cartElements, setCartElements] = useState([])
  const authUser = useSelector((state)=> state.users.authUser)
  let [ orderStatus, setOrderStatus ] = useState(null)
  const dispatch = useDispatch()

  async function removeCartItem(cartItemID){
    const response = await fetch('http://localhost:8080/cart/' + cartItemID,{
      method:"DELETE",
      headers:{token:authUser?.token}
    })
    console.log(await response.json());
    fetchCart();
  }

  async function updateItemQuantity(cartItemID, quantity){
    const response =await fetch('http://localhost:8080/cart/' + cartItemID, {
      method:"PATCH",
      headers:{token:authUser?.token,
        "Content-Type":"application/json"},
      body:JSON.stringify({quantity})
    })
    console.log(await response.json());
    fetchCart();
  }

  async function makeOrder(){
    const response = await fetch('http://localhost:8080/orders', {
      method:"POST",
      headers:{token:authUser?.token}
      
    })
    const data = await response.json()
    setOrderStatus(data.message)
    fetchCart()
  }

  async function fetchCart(){
    dispatch(fetchingCart())
    const response = await fetch('http://localhost:8080/cart', {
      headers:{token:authUser?.token}
      
    })
    const data = await response.json()
    setCart(data)
    response.ok ? dispatch(fetchCartSuccess(data)) : dispatch(fetchCartFailure(data))
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
          <input min="1"
            type="number"
            className="quantity" defaultValue={item.quantity}
            onChange={(e) =>{
              e.target.value = e.target.value >0 ? e.target.value : 1;
              updateItemQuantity(item.id, e.target.value) 
            }}
          />
        </div>
        <GrFavorite color="grey" />
  
        <div id="subtotal">Subtotal Ksh {item.quantity * item.price}</div>
      </div>
      <div className="remove-icon">
        < CiCircleRemove color="black" onClick={()=>removeCartItem(item.id)} />
      </div>
    </div>
    )
    
    }) 
    setCartElements(cartList)
    setSubtotal(total)
  }

  useEffect(()=>{
    fetchCart()
  },[])

  return (
    <>
      <div id="cart-container">
        <div id="total">
          <div>Cart Summary</div>
          <hr />
          <div>TOTAL Ksh {subtotal}</div>
          <Payment  cartItems={cart} />
           <button onClick={makeOrder} className="green-btn btn">Make Order</button>
          <div>
            We accept
            <BiLogoVisa color="blue" />
            <GrPaypal color="blue" />
            <BiLogoMastercard />
          </div>
          {orderStatus && <p>{orderStatus}</p> }
        </div>

        <div>
          <div id="cart-heading">My Cart</div>

            {cartElements.length>0 ? cartElements : (<div> Your cart is empty </div>)}

        </div>
      </div>
    </>
  );
}

export default Cart;
