"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { getCookie } from "@/utils/auth";

const ToDoList = () => {
  const [userid, setUserid] = useState(1);
  const [todos, setTodos] = useState([]);
  // const [dbtodos, setDbTodos] = useState([])
  const [perPageTodos, setPerPageTodos] = useState([]);
  const [page, setPage] = useState(0);
  const [perPage] = useState(5);

  // Using Json PlaceHolder API
  // axios
  // .get("https://jsonplaceholder.typicode.com/todos")
  // .then((response) => {
  //   // console.log(response.data);
  //   const filteredTodos = response.data.filter(todo => todo.userId === 1);
  //   setTodos(filteredTodos)
  // })
  // .catch((error) => {
  //   console.error("Error fetching users:", error);
  // });

  // Using Node JS API {Fetched from MOngoDB database}
  const ListTodos = async()=> {axios
    .get("http://localhost:5000/todo/")
    .then((response) => {
      // console.log(response.data);
      setUserid(getCookie("userId"));
      const filteredTodos = response.data.filter(
        (todo) => todo.userId == userid
      );

      setTodos(filteredTodos);
    })
    .catch((error) => {
      console.error("Error fetching users:", error);
    });}

  const Pagination = async () => {
    await setPerPageTodos(todos.slice(page * perPage - 5, page * perPage));
  };

  const deleteTodos = (id) => { 
    axios.delete(`http://localhost:5000/todo/${id}`)
    .then((response) => {
      console.log(response)
    })
    .catch((err) => {console.log(err)})
  }

  useEffect(() => {
    ListTodos()
    Pagination();
    if (page <= 0) {
      setPage(page + 1);
    } else if (todos.length / 5 < page && page >= 2) {
      setPage(page - 1);
      // console.log(todos.length/5)
    }
  }, [page]);

  return (
    <div>
      <div>
        <ul>
          {perPageTodos.map((todo, index) => (
            <li key={index}>
              <div className="d-flex border border-1 px-3 py-2 rounded">
                <div>
                  <div>
                    <strong>{todo.title}</strong>
                  </div>
                  <div>{(todo.Decription)? "To create a To Do Management Application": todo.description}</div>
                  <div>Due date: {todo.date}</div>
                </div>
                <div className="ms-auto align-self-center d-flex">
                  {todo.completed ? (
                    <button className="btn me-2">✅</button>
                  ) : (
                    <button
                      onClick={() =>
                        (window.location.href = `/ToDoUpdate/${todo._id}`)
                      }
                      className="btn btn-outline-success me-2"
                    >
                      ✏️
                    </button>
                    
                  )}

                  <button onClick={()=>{deleteTodos(todo._id)}} className="btn btn-outline-danger">✖️</button>
                </div>
              </div>
              {/* </Link> */}
            </li>
          ))}
        </ul>
      </div>
      <div className="text-center">
        <button onClick={() => setPage(page - 1)}>{"<<"}</button>
        <span>{page}</span>
        <button onClick={() => setPage(page + 1)}>{">>"}</button>
      </div>
    </div>
  );
};

export default ToDoList;
