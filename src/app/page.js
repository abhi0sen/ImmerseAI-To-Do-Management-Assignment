import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoForm from '@/components/ToDoForm/ToDoForm'
import ToDoList from '@/components/ToDoForm/ToDoList';
import styles from "./page.module.css"

export default function Home() {
  return (
    <div className="container">
      <div className={styles.TodoBox}>
      <div className={styles.TodoForm}>
      <ToDoForm />
      </div>
      <div className={styles.TodoList}>
      <h2>To Do List</h2>
      <ToDoList />
      </div>
      </div>
    </div>
  )
}
