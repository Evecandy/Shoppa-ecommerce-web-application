import axios from "axios";
import { useSelector } from "react-redux";;

const Payment = ({ cartItems }) => {
  const authUser = useSelector((state) => state.users.authUser);
  const handleCheckout = () => {
    console.log('checkout:',cartItems); 
    // if (!Array.isArray(cartItems)) {
    //   console.error("cartItems is not an array");
    //   return;
    // }
  
    axios.post('http://localhost:8080/stripe/create-checkout-session', {
        cartItems: cartItems, 
        userId: authUser,
      })

      .then((response) => {
        if (response.data.url) {
          window.location.href = response.data.url;
        }
      })
      .catch((error) => console.log(error));
  };
  

  return (
    <>
      <button className="green-btn btn" onClick={()=>{handleCheckout()}}>Check out</button>
    </>
  );
};

export default Payment;