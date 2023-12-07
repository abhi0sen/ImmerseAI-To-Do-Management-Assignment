"use client";
import React, { useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Link from "next/link";
import axios from "axios";

const Register = () => {
    const [uName, setUName] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleValues = () => {
    if (uName != "") {
      console.log(uName);
    }

    if (password != "") {
      console.log(password);
    }

    if (uName == "") {
      setErrMsg("Please enter the username");
    } else if (password == "") {
      setErrMsg("Please enter the Password");
    } else if (password.length < 6) {
      setErrMsg("Your password is too short");
    } else if(!mail.includes("@") && !mail.includes(".")){
      setErrMsg("Please enter a valid mail address")
    }
    else {
      setErrMsg("");
      axios   .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response.data[0].username);
        if (uName == response.data[0].username) {
          alert("Registered Successful!");
          // window.location.href = "/"
          // } else {
            //   alert("Invalid Credentials");
          }
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
        });
        
        const userData = {
        username: uName,
        email: mail,
        password: password,
      }
      
      console.log(userData)

      axios.post('http://localhost:5000/user/add/', userData)
      .then(res => console.log((res.data))
      .catch(err => console.log(err))
      );
      
    }
    console.log(mail.includes("."), mail.includes("@"))
  };

  return (
      <div className="mt-4">
        <Form.Label htmlFor="Username">Username</Form.Label>
        <Form.Control
          type="text"
          id="Username"
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
          onChange={(text) => setPassword(text.target.value)}
        />

        <Form.Label className="mt-4" htmlFor="mail">
          Email
        </Form.Label>
        <Form.Control
          type="mail"
          id="mail"
          onChange={(text) => setMail(text.target.value)}
        />

        <div className="text-danger mt-3">{errMsg}</div>

        <p> Already have an account? <Link href="/Login">Sign in</Link>{" "}
        </p>

        {/* <Link href="/"> */}
        <Button type="submit" variant="dark" onClick={handleValues}>
          Register
        </Button>
        {/* </Link> */}
      </div>
  )
}

export default Register
