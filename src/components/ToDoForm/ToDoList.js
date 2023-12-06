import React from "react";

const ToDoList = () => {
  return (
    <div>
      <div>
        <h2>To Do List</h2>
        <ul>
          <li>
            <div className="d-flex border border-1 px-3 py-2 rounded">
              <div>
                <div>
                  <strong>Complete ImmerseAI Task</strong>
                </div>
                <div>To create a To Do Management Application</div>
                <div>Due date: 08-12-2023</div>
              </div>
              <div className="ms-auto align-self-center">
                <button className="btn btn-outline-success me-2">✔️</button>
                <button className="btn btn-outline-danger">✖️</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
