import "./Signin.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();
  
  const onSubmit = () => {
    // Store the token in local storage.
    localStorage.setItem("token", "");
  
    // Navigate to the products page.
    navigate("/products");
  };
  const schema = yup.object().shape({
    Username: yup.string().required("Username is required"),
    Password: yup.string().required("Password is required"),
  });
  const {
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  
 
  

    return (
      <>
       <h2>Sign in</h2>
       <div>
      <form id="signup-form" onSubmit={onSubmit}>
        <label htmlFor=""> Username </label>
        <input type="text" {...register("Username")} placeholder="Username" />
        <p>{errors.Username?.message}</p>
        
        <label htmlFor=""> Password </label>
        <input type="password" {...register("Password")} placeholder="Password" />
        
        <p>{errors.Password?.message}</p>
        
            <p>Sign in as <Link to = "/admin/dashboard">admin?</Link></p>
    
        <input type="submit" value="Sign in"  className="btn green-btn"/>
      </form>
    </div>

      </>
    )
  }
  
  export default Signin
  
