"use client";
import React, { useState, useEffect } from "react";
import styles from "./ToDo.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { getCookie } from "@/utils/auth";
import axios from "axios"

const ToDoForm = () => {
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [errMsg, setErrMsg] = useState("")

  const handleValues = () => {
    if (title == "") {
      setErrMsg("Please Enter the title")
    }
    else if (desc == "") {
      setErrMsg("Please provide the task description")
    }
    else if (date == "") {
      setErrMsg("Please confirm the due date for the task")
    } else{
      setErrMsg("")
      const data = getCookie("userId")

      const todoData = {
        userId: data,
        title: title,
        description: desc,
        date: date,
      }
      
      console.log(todoData)

      axios.post('http://localhost:5000/todo/add/', todoData)
      .then(res => console.log((res.data))
      // .catch(err => console.log(err))
      );

      console.log(title, desc, date, data)
    }
  };

  
  return (
    <div className="container">
      {/* <div className="mt-4"> */}
        <Form.Label htmlFor="Title">Title</Form.Label>
        <Form.Control type="text" id="Title" onChange={(text) => {setTitle(text.target.value)}} />

        <Form.Label className="mt-4" htmlFor="Desc">
          Description
        </Form.Label>
        <Form.Control type="text" id="Desc" onChange={(text) => {setDesc(text.target.value)}} />

        <Form.Label className="mt-4" htmlFor="Date">
          Due Date
        </Form.Label>
        <Form.Control type="date" id="Date" onChange={(text) => {setDate(text.target.value)}} />

        <div className="text-sm text-danger mt-2">{errMsg}</div>

        <Button variant="dark" className="mt-3" onClick={handleValues}>
          Add Task
        </Button>
      {/* </div> */}
    </div>
  );
};

export default ToDoForm;
