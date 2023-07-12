import "./Signin.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
  
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  useEffect(() => {
    // Get the data from local storage
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
     // Set the state variables with the data from local storage
    if (storedUsername) {
        setUsername(storedUsername);
      }
      if (storedPassword) {
        setPassword(storedPassword);
      }
    }, []);

    // Save the data to local storage
  const handleSignin = (e) => {
    e.preventDefault();

    // Save the data to local storage
    localStorage.setItem("username", Username);
    localStorage.setItem("password", Password);
  };

  

    return (
      <>
       <h2>Sign in</h2>
       <div>
      <form id="signup-form" onSubmit={handleSignin}>
        <label htmlFor=""> Username </label>
        <input type="text" {...register("Username")} placeholder="Username" />
        <p>{errors.Username?.message}</p>
        
        <label htmlFor=""> Password </label>
        <input type="password" {...register("Password")} placeholder="Password" />
        
        <p>{errors.Password?.message}</p>
        
            <p>Sign in as <Link to = "/admindashboard">admin?</Link></p>

        <input type="submit" value="Sign in" />
      </form>
    </div>

      </>
    )
  }
  
  export default Signin
  
