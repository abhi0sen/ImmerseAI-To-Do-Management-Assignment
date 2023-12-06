"use client";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Link from "next/link";
import axios from "axios";

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
      window.location.href = "/"
    }
  };

  useEffect(()=>{
    axios .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          // console.log(response.data[0].username);
          setUName(response.data[0].username)
          setMail(response.data[0].email)
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
        });
  }, [temp])

  return (
    <div className="mt-4">
        <Form.Label htmlFor="Username">Username</Form.Label>
        <Form.Control
          type="text"
          id="Username"
          value={uName}
          onChange={(text) => {
            setUName(text);
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

        <p> Change Password? <Link href="/ForgotPassword">Sign in</Link>{" "}
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
