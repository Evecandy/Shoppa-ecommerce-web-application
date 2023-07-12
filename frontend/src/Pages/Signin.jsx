import "./Signin.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

function Signin() {
  const schema = yup.object().shape({
    Username: yup.string().required("Username is required"),
    Password: yup.string().required("Password is required"),
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
        
        <label htmlFor=""> Password
        <input type="password" {...register("Password")} placeholder="Password" />
        </label>
        <p>{errors.Password?.message}</p>
        
            <p>Sign in as admin?</p>

        <input type="submit" value="Sign in" />
      </form>
    </div>

      </>
    )
  }
  
  export default Signin
  
