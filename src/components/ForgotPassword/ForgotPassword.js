"use client";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Link from "next/link";
import Navbar from "../Navbar/Navbar";
import axios from "axios"
import { getCookie } from "@/utils/auth";

const ForgotPassword = () => {
  const [uName, setUName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [errMsg, setErrMsg] = useState("") 

  const handleValues = () => {
    if (uName == "") {
      setErrMsg("Please enter username")
    }
    else if (password == "") {
      setErrMsg("Please enter new password");
    }
    else if (cPassword == "") {
      setErrMsg("Please confirm your password");
    }
    else if(password != cPassword){
      setErrMsg("Password didn't matched")
    }
    else{
      setErrMsg("")
      alert("An OTP is sent to your registered Email!")
      const userData = {
        username: uName,
        email: email,
        password: password,
      }
      
      // console.log(userData)

      axios.post(`http://localhost:5000/user/update/${getCookie("userId")}`, userData)
      .then(res => console.log((res.data))
      .catch(err => console.log(err))
      );
      window.location.href = "/Login"
    }
  };

  useEffect(() => {
    axios .get(`http://localhost:5000/user/${getCookie("userId")}`)
        .then((response) => {
          setUName(response.data.username)
          setEmail(response.data.email)
          // setPassword(response.data.password)
        })
        .catch((error) => {
          setUName("")
          setEmail("")
          setPassword("")
          console.log(error)
        });
  })
  
  return (
    <div className="container">
      <Navbar />
      <div className="mt-4">
        <Form.Label htmlFor="uName">Email</Form.Label>
        <Form.Control type="email" id="uName" value={email} onChange={(text) => {setUName(text.target.value)}} />

        <Form.Label className="mt-4" htmlFor="Password">
          Password
        </Form.Label>
        <Form.Control type="password" id="Password" value={password} onChange={(text) => {setPassword(text.target.value)}} />

        <Form.Label className="mt-4" htmlFor="cPassword">
          Confirm Password
        </Form.Label>
        <Form.Control type="password" id="cPassword" value={cPassword} onChangeCapture={(text) => {setCPassword(text.target.value)}} />

        <div className="mt-3 text-danger">{errMsg}</div>
        <div className="text-primary">Remember Password? <Link href="/Login">Login now</Link></div>

        <Button variant="dark" className="mt-1" onClick={handleValues}>
          Update Password
        </Button>
      </div>

    </div>
  )
}

export default ForgotPassword
