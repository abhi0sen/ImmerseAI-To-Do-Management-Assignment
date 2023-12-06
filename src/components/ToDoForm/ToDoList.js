"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";

const ToDoList = () => {
  const [userid, setUserid] = useState(1);
  const [todos, setTodos] = useState([])
  const [perPageTodos, setPerPageTodos] = useState([])
  const [page, setPage] = useState(0);
  const [perPage] = useState(5);

  axios
.get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        // console.log(response.data);
        const filteredTodos = response.data.filter(todo => todo.userId === 1);
        setTodos(filteredTodos) 
        // console.log(todos);

        // filtere the data response on the value of userId == 1?
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
      

      

      const Pagination = async() => {
        await setPerPageTodos(todos.slice(page*perPage-5, page*perPage))
      }

      useEffect(() => {
        Pagination()
        if(page<=0){
          setPage(page+1)
        }else if(todos.length/5 < page && page >= 2){
          setPage(page-1)
          // console.log(todos.length/5)
        }
      }, [page])

  return (
    <div>
      <div>
        <ul>
          {perPageTodos.map((
            todo, index) => (          
          <li key={index}>
            <div className="d-flex border border-1 px-3 py-2 rounded">
              <div>
                <div>
                  <strong>{todo.title}</strong>
                </div>
                <div>To create a To Do Management Application</div>
                <div>Due date: 08-12-2023</div>
              </div>
              <div className="ms-auto align-self-center d-flex">
                {todo.completed?
                <button onClick = {() => window.location.href = `/ToDoUpdate/${1}`} className="btn btn-outline-success me-2">✏️</button> : 
                <button className="btn me-2">✅</button> 
                }

                <button className="btn btn-outline-danger">✖️</button>
              </div>
                
            </div>
          </li>
            ))}
        </ul>
      </div>
      <div>
        <button onClick={() => setPage(page-1)}>
          {"<<"}
        </button>
        <span>{page}</span>
        <button onClick={() => setPage(page+1)}>{">>"}</button>
      </div>
    </div>
  );
};

export default ToDoList;
