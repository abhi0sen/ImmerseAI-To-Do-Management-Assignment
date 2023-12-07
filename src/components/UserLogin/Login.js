"use client";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Link from 'next/link';
import axios from "axios"
import { setAuthentication } from "@/utils/auth";
import Title from '@/components/Navbar/Title';

const Login = () => {
    const [uName, setUName] = useState("");
  const [password, setPassword] = useState("");
    const [ errMsg, setErrMsg] = useState("")

    const handleValues = () => {
        if(uName == ""){
            setErrMsg("Please enter the username")
        }
        else if (password == ""){
            setErrMsg("Please enter the Password")
        }
        else{
          const userData = {
            username: uName,
            password,
          };
          
          console.log(userData)
    
          axios.post('http://localhost:5000/api/login/', userData)
          .then((res) => {
            console.log("Login successful ")
            console.log(res.data.token)

            setAuthentication(res.data.token)
            setErrMsg("")
            window.location.href = "/"
          }
          )
          .catch(err => {console.log(err)
          setErrMsg("Invalid Credential")
          })
        }
      };
  return (
    <div className="mt-4">
        <Title title = {"MyTodo"} />

        <Form.Label htmlFor="Username">Username</Form.Label>
        <Form.Control type="text" id="Username" onChange={(text) => {setUName(text.target.value)}} />

        <Form.Label className="mt-4" htmlFor="Password">
        Password
        </Form.Label>
        <Form.Control type="password" id="Password" onChange={(text) => setPassword(text.target.value)} />


        <div className="text-danger text-sm">{errMsg}</div>

        <span className="mt-3">New user? <Link href="/Register">Register now</Link> </span>

        <p className="">
          <Link href="/ForgotPassword">Forgot Password</Link>
        </p>

        <Button variant="dark" onClick={handleValues}>
          Login
        </Button>
      </div>
  )
}

export default Login
