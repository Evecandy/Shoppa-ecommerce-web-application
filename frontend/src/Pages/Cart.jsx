import ankara from "../assets/ankara.jpg";
import "./Cart.css"
import { GrFavorite, GrPaypal } from "react-icons/gr";
import { CiCircleRemove } from "react-icons/ci";
import { BiLogoVisa, BiLogoMastercard } from "react-icons/bi";
import { Link } from "react-router-dom";

function Cart() {
  

  return (
    <>
    <div>
        <h2>My cart</h2>
    </div>
    
    <div>
    <img src={ankara} alt="Ankaratop and pants"/>
    <p className="price">Ksh 4,500</p>
    
    <label htmlFor="">Size</label>
    <select  className="size">
            <option value="small">S</option>
            <option value="medium">M</option>
            <option value="large">L</option>
        </select>

        <label htmlFor="quantity">Qty</label>
            <GrFavorite color="grey"/>
            <input type="number" value="1" className="quantity"/>

        <div>
            Subtotal Ksh 4,500
        </div>
        <div className="remove-icon">
            <CiCircleRemove color="black"/>
        </div>
        


    </div>

    <div>
        TOTAL
        <hr />
        Subtotal Ksh 9,000
        <Link to = "/payment">
        <button className="btn green-btn">CHECKOUT</button>
        </Link>

        We accept 
        <BiLogoVisa color="blue"/>
        <GrPaypal color="blue"/>
        <BiLogoMastercard/>
        
        

    </div>
    </>
  )
}

export default Cart
