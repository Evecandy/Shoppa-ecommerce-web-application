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
      <h2>Sign up</h2>
      <div>
        <form id="signup-form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
              <label htmlFor="">Username</label>
              <input type="text" {...register("Username")} placeholder="Username"/>
          </div>
          <p>{errors.Username?.message}</p>
          <label htmlFor="">
            
            Email
            <input
              type="email"
              {...register("EmailAddress")}
              placeholder="email@example.com"
            />
          </label>
          <p>{errors.EmailAddress?.message}</p>
          <div className="input-wrapper">
            <label htmlFor=""> Password </label>
            <input type="password" {...register("Password")} placeholder="Password" />
          </div>
          
          <p>{errors.Password?.message}</p>

          <input type="submit" className="green-btn btn" value="Sign up" />
        </form>
      </div>
    </>
  );
}

export default Signup;
