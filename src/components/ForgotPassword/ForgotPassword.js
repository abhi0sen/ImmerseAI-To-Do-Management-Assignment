"use client";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Link from "next/link";

const ForgotPassword = () => {
  const [uName, setUName] = useState("");
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
      window.location.href = "/Login"
    }
  };
  
  return (
    <div className="container">
      <div className="mt-4">
        <Form.Label htmlFor="uName">Username</Form.Label>
        <Form.Control type="text" id="uName" onChange={(text) => {setUName(text.target.value)}} />

        <Form.Label className="mt-4" htmlFor="Password">
          Password
        </Form.Label>
        <Form.Control type="password" id="Password" onChange={(text) => {setPassword(text.target.value)}} />

        <Form.Label className="mt-4" htmlFor="cPassword">
          Confirm Password
        </Form.Label>
        <Form.Control type="password" id="cPassword" onChangeCapture={(text) => {setCPassword(text.target.value)}} />

        <div className="mt-3 text-danger">{errMsg}</div>
        <div>Remember Password? <Link href="/Login">Login now</Link></div>

        <Button variant="dark" className="mt-1" onClick={handleValues}>
          Update Password
        </Button>
      </div>

    </div>
  )
}

export default ForgotPassword
