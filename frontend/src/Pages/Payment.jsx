import { BiLogoVisa} from "react-icons/bi";
import "./Payment.css"
import { Link } from "react-router-dom";

function Payment() {
  

  return (
    <>
     
      <BiLogoVisa color="blue" className="visa-icon"/>
      
      <form>
        <label htmlFor="">Card number</label>
        <input type="number" placeholder="1111 2222 3333 4444" />

        <label htmlFor="">CVC</label>
        <input type="number" placeholder="123" />
        <label htmlFor="">Card holder name</label>
        <input type="text" placeholder="Jane Doe" />

        <label htmlFor="">Expiration date</label>
        <input type="date" />
        <Link to="/myorders">
        <button className="btn green-btn">Complete Payment</button>
        </Link>
        
      </form>
    </>
  )
}

export default Payment
