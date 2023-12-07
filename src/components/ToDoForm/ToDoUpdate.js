"use client";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { getCookie } from "@/utils/auth";
import Navbar from "../Navbar/Navbar";

const ToDoUpdate = (id) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("2023-12-09");
  const [status, setStatus] = useState("Pending");
  const [errMsg, setErrMsg] = useState("");

  const handleValues = () => {
    if (title == "") {
      setErrMsg("Please fill up the title");
    } else if (desc == "") {
      setErrMsg("Please fill up the Description");
    } else if (date == null) {
      setErrMsg("Please choose the due date for task");
      console.log(date);
      console.log(typeof date);
    } else {
      setErrMsg("");
      const todoData = {
        userId: getCookie("userId"),
        title: title,
        description: desc,
        date: date,
        completed: status
      }
      
      // console.log(userData)

      axios.post(`http://localhost:5000/todo/update/${id.id}`, todoData)
      .then(res => console.log((res.data))
      .catch(err => console.log(err))
      );
      window.location.href = "/";
    }
  };

  // JSONPlaceholder API -->
  // axios
  //   .get(`https://jsonplaceholder.typicode.com/todos/${id.id}`)
  //   .then((response) => {
    //     const filteredTodos = response.data;
    //     //   console.log(filteredTodos.title);
    //     setTitle(filteredTodos.title);
    //     setDesc(filteredTodos.title);
    //   })
    //   .catch((error) => {
      //     console.error("Error fetching users:", error);
      //   });
      
      useEffect(() => {
        axios
          .get(`http://localhost:5000/todo/${id.id}`)
          .then((response) => {
              const filteredTodos = response.data;
                console.log(filteredTodos.title);

                // Date
                const dateStr = new Date(String(filteredTodos.date))
                const YYYY = dateStr.getFullYear() || "2023";
                const month = String(dateStr.getMonth() + 1).padStart(2, "0") || "11"; 
                const day = String(dateStr.getDate()).padStart(2, "0") || "11";

              setTitle(filteredTodos.title);
              setDesc(filteredTodos.description);
              setDate(`${YYYY}-${month}-${day}`)
              setStatus(filteredTodos.completed);
            })
            .catch((error) => {
                console.error("Error fetching users:", error);
              });
      }, [])

  return (
    <div className="container">
      <Navbar />
      {/* <div className="mt-4"> */}
      <Form.Label htmlFor="Title">Title</Form.Label>
      <Form.Control
        type="text"
        id="Title"
        onChange={(text) => {
          setTitle(text.target.value);
        }}
        value={title}
      />

      <Form.Label className="mt-4" htmlFor="Desc">
        Description
      </Form.Label>
      <Form.Control
        type="text"
        id="Desc"
        onChange={(text) => {
          setDesc(text.target.value);
        }}
        value={desc}
      />

      <Form.Label className="mt-4" htmlFor="Date">
        Due Date
      </Form.Label>
      <Form.Control
        type="date"
        id="Date"
        onChange={(text) => {
          setDate(text.target.value);
        }}
        value={date}
      />

      <Form.Label className="mt-4" htmlFor="status">
        Status
      </Form.Label>
      <Form.Select id="status" onChange={(text) => setStatus(text.target.value)}>
        <option>{(status)? "Completed ": "Pending"}</option>
        <option value={true}>Completed</option>
        <option value={false}>Pending</option>
      </Form.Select>

      <div>{errMsg}</div>

      <Button variant="dark" className="mt-3" onClick={handleValues}>
        Update Task
      </Button>
      {/* </div> */}
    </div>
  );
};

export default ToDoUpdate;
