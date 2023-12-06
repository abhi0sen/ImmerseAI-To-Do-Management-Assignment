"use client";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

const ToDoUpdate = (id) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("2023-12-09");
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
      window.location.href = "/";
    }
  };

  axios
    .get(`https://jsonplaceholder.typicode.com/todos/${id.id}`)
    .then((response) => {
      const filteredTodos = response.data;
      //   console.log(filteredTodos.title);
      setTitle(filteredTodos.title);
      setDesc(filteredTodos.title);
    })
    .catch((error) => {
      console.error("Error fetching users:", error);
    });

  return (
    <div className="container">
      {/* <div className="mt-4"> */}
      <Form.Label htmlFor="Title">Title</Form.Label>
      <Form.Control
        type="text"
        id="Title"
        onChange={(text) => {
          setTitle(text);
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
          setDesc(text);
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
      <Form.Select id="status">
        <option disabled>Select</option>
        <option value="Completed">Completed</option>
        <option value="Pending">Pending</option>
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
