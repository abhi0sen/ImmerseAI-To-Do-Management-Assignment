// ToDoUpdates/[TodoId].js
"use client"
import ToDoUpdate from '@/components/ToDoForm/ToDoUpdate'
import React from 'react'
import { useRouter } from 'next/navigation';

const page = (params) => {
  const TodoId = params.params.TodoId
    console.log('ID from URL:', TodoId);
  return (
    <div>
      <ToDoUpdate id = {TodoId} />
    </div>
  )
}

export default page
