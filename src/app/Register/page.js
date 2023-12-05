"use client";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Link from 'next/link';

const page = () => {
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
    <div className="container">
      <div className="mt-4">
        <Form.Label htmlFor="Username">Username</Form.Label>
        <Form.Control type="text" id="Username" onChange={(text) => {setUName(text)}} />

        <Form.Label className="mt-4" htmlFor="Password">
        Password
        </Form.Label>
        <Form.Control type="password" id="Password" onChange={(text) => setPassword(text)} />

        <p className="mt-3">Already have an account? <Link href="/Login">Sign in</Link> </p>

        <Link href="/">
        <Button variant="dark" onClick={handleValues}>
          Register
        </Button>
        </Link>
      </div>
    </div>
  )
}

export default page
