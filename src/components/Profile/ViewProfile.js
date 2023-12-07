"use client";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Link from "next/link";
import axios from "axios";
import { getCookie } from "@/utils/auth";
import Navbar from "../Navbar/Navbar";

const ViewProfile = () => {
  const [uName, setUName] = useState("");
  const [password, setPassword] = useState("****");
  const [mail, setMail] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const temp = 0

  const handleValues = () => {

    if (uName == "") {
      setErrMsg("Please enter the username");
    } else if((mail.includes("@")) == false || (mail.includes(".")) == false){
      setErrMsg("Please enter a valid mail address")
      console.log(mail.includes("."), mail.includes("@"))
    }
     else {
      setErrMsg("");
      const userData = {
        username: uName,
        email: mail,
        password: password,
      }
      
      // console.log(userData)

      axios.post(`http://localhost:5000/user/update/${getCookie("userId")}`, userData)
      .then(res => console.log((res.data))
      .catch(err => console.log(err))
      );
      window.location.href = "/"
    }
  };

  useEffect(()=>{
    axios .get(`http://localhost:5000/user/${getCookie("userId")}`)
        .then((response) => {
          setUName(response.data.username)
          setMail(response.data.email)
          setPassword(response.data.password)
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
        });
  }, [temp])

  return (
    <div className="mt-4">
      <Navbar />
        <Form.Label htmlFor="Username">Username</Form.Label>
        <Form.Control
          type="text"
          id="Username"
          value={uName}
          onChange={(text) => {
            setUName(text.target.value);
          }}
        />

        <Form.Label className="mt-4" htmlFor="Password">
          Password
        </Form.Label>
        <Form.Control
          type="password"
          id="Password"
          value={password}
          readOnly
        />

        <Form.Label className="mt-4" htmlFor="mail">
          Email
        </Form.Label>
        <Form.Control
          type="mail"
          id="mail"
          value={mail}
          onChange={(text) => setMail(text.target.value)}
        />

        <div className="text-danger mt-3">{errMsg}</div>

        <p><Link href="/ForgotPassword">Forgot Password?</Link>{" "}
        </p>

        {/* <Link href="/"> */}
        <Button type="submit" variant="dark" onClick={handleValues}>
          Update
        </Button>
        {/* </Link> */}
      </div>
  )
}

export default ViewProfile
