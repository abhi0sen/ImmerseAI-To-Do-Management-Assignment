"use client";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Link from 'next/link';

const Login = () => {
    const [uName, setUName] = useState("");
  const [password, setPassword] = useState("");
    const [ errMsg, setErrMsg] = useState("")

    const handleValues = () => {
        if (uName != "") {
          console.log(uName.target.value);
        }

        if (password != "") {
          console.log(password.target.value);
        }

        if(uName == ""){
            setErrMsg("Please enter the username")
        }
        else if (password == ""){
            setErrMsg("Please enter the Password")
        }
        else{
            setErrMsg("Login Successful")
        }
        console.log(errMsg)
      };
  return (
    <div className="mt-4">
        <Form.Label htmlFor="Username">Username</Form.Label>
        <Form.Control type="text" id="Username" onChange={(text) => {setUName(text)}} />

        <Form.Label className="mt-4" htmlFor="Password">
        Password
        </Form.Label>
        <Form.Control type="password" id="Password" onChange={(text) => setPassword(text)} />

        <span className="mt-3">New user? <Link href="/Register">Register now</Link> </span>

        <p className="">
          <Link href="/ForgotPassword">Forgot Password</Link>
        </p>

        <Link href="/">
        <Button variant="dark" onClick={handleValues}>
          Login
        </Button>
        </Link>
      </div>
  )
}

export default Login
