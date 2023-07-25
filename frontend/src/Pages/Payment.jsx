import { BiLogoVisa} from "react-icons/bi";
import "./Payment.css"
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from "react-redux";

function Payment() {
  const schema = yup.object().shape({
    cardNumber:yup.number().required("Card number is required")
  })
  
  const authUser = useSelector((state)=> state.users.authUser)

  const { register,handleSubmit, formState: {errors}} = useForm({resolver:yupResolver(schema)})
  async function makeOrder(){
    const response = await fetch('http://localhost:8080/orders',{
      method:'POST',
      headers:{
        token: authUser.token
      }
    })
    const data = await response.json()
    console.log(data);
  }
  return (
    <>
     
      <BiLogoVisa color="blue" className="visa-icon"/>
      
      <form onSubmit={handleSubmit(makeOrder)}>
        <label htmlFor="">Card number</label>
        <input type="number"  placeholder="1111 2222 3333 4444"  {...register("cardNumber")} />
        <p>{errors.cardNumber?.message}</p>

        <label htmlFor="">CVC</label>
        <input type="number" placeholder="123"  {...register("cvc")}/>
        <p>{errors.cvc?.message}</p>
        <label htmlFor="">Card holder name</label>
        <input type="text" placeholder="Jane Doe" {...register ("cardHolder")} />
        <p>{errors.cardHolder?.message}</p>
        <label htmlFor="">Expiration date</label>
        <input type="date" {...register("expirationDate")} />
        <p>{errors.expirationDate?.message}</p>
        
        <input type="submit" className="btn green-btn" value="Complete Payment"/>
        
        
      </form>
    </>
  )
}

export default Payment
