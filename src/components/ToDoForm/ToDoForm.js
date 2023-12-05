"use client"
import React, {useState, useEffect} from 'react'
import styles from './ToDo.module.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ToDoForm = () => {
    const [date, setDate] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const handleValues = () => {
        if(title != ""){
            console.log(title.target.value)
        }
        if(desc != ""){
            console.log(desc.target.value)
        }
        if(date != ""){
            console.log(date.target.value)
        }
    }
  return (
    <div className="container">
      
      <div className = "mt-4">
      <Form.Label htmlFor='Title'>Title</Form.Label>
      <Form.Control
      type='text'
      id='Title'
      onChange={setTitle}
      />
      
      <Form.Label className="mt-4" 
       htmlFor='Desc'>Description</Form.Label>
      <Form.Control
      type='text'
      id='Desc'
      onChange={setDesc}
      />

    <Form.Label className="mt-4" htmlFor='Date'>Due Date</Form.Label>
    <Form.Control
  type='date'
  id='Date'
  onChangeCapture={setDate}
/>

<Button variant="dark" className = "mt-3" onClick={handleValues}>Add Task</Button>

    
      </div>
    </div>
  )
}

export default ToDoForm
