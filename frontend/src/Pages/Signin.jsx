import "./Signin.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signinFailure, signinSuccess } from "../Redux/userSlice";

function Signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const onSubmit = async (data) => {
    const response = await fetch("http://localhost:8080/users/signin", {
      method:"POST",
      headers: {
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    })

    const responseData = await response.json()

    if (response.ok) {
      localStorage.setItem("token", responseData.token);
      localStorage.setItem("username", responseData.username);
      localStorage.setItem("role", responseData.role);

      dispatch(signinSuccess(responseData))
    
      // responseData.role === 'admin' ? navigate("/admin") : navigate("/")

    } else {
      dispatch(signinFailure(responseData))
    }

  };

  const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
  });
  const {
    register, handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  
    return (
      <>
       <h2>Sign in</h2>
       <div>
      <form id="signup-form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor=""> Username </label>
        <input type="text" {...register("username")} placeholder="Username" />
        <p>{errors.username?.message}</p>
        
        <label htmlFor=""> Password </label>
        <input type="password" {...register("password")} placeholder="Password" />
        
        <p>{errors.password?.message}</p>
        <input type="submit" value="Sign in"  className="btn green-btn"/>
      </form>
    </div>

      </>
    )
  }
  
  export default Signin
  
