import "./Signup.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";


function Signup() {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    emailAddress: yup.string().required("Email address is required"),
    password: yup.string().required("Password is required")
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) =>{
    console.log(data);
    const response = await fetch("http://localhost:8080/users", {
      headers:{
        "Content-Type":"application/json"
      },
      method:"POST",
      body:JSON.stringify(data)
    })
    console.log(await response.json());

  }

  return (
    <>
      <h2>Sign up</h2>
      <div>
        <form id="signup-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="input-wrapper">
              <label htmlFor="">Username</label>
              <input type="text" {...register("username")} placeholder="Username"/>
          </div>
          <p>{errors.Username?.message}</p>
        <div className="input-wrapper">
          <label htmlFor=""> Email </label>
          <input
              type="email" {...register("emailAddress")} placeholder="email@example.com"/>
        </div>
          <p>{errors.EmailAddress?.message}</p>
          <div className="input-wrapper">
            <label htmlFor=""> Password </label>
            <input type="password" {...register("password")} placeholder="Password" />
          </div>
          
          <p>{errors.password?.message}</p>
      
          <input type="submit" className="green-btn btn" value="Sign up" />
        </form>
      </div>
    </>
  );
}

export default Signup;
