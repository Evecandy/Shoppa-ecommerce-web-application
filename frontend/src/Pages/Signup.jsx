import "./Signup.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

function Signup() {
  const schema = yup.object().shape({
    Username: yup.string().required("Username is required"),
    Password: yup.string().required("Password is required"),
    EmailAddress: yup.string().required("EmailAddress is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

    return (
      <>
       <h2>Shoppa</h2>
       <div>
      <form id="signup-form" onSubmit={handleSubmit}>
        <label htmlFor=""> Username
        <input type="text" {...register("Username")} placeholder="Username" />
        </label>
        <p>{errors.Username?.message}</p>
        <label htmlFor=""> Email
        <input  type="email" {...register("EmailAddress")}
          placeholder="email@example.com"
        /></label>
        <p>{errors.EmailAddress?.message}</p>
        <label htmlFor=""> Password
        <input type="password" {...register("Password")} placeholder="Password" />
        </label>
        <p>{errors.Password?.message}</p>
        <input type="submit" value="Sign up" />
      </form>
    </div>

      </>
    )
  }
  
  export default Signup
  
