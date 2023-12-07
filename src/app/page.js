import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoForm from '@/components/ToDoForm/ToDoForm'
import ToDoList from '@/components/ToDoForm/ToDoList';
import styles from "./page.module.css"
import Navbar from '@/components/Navbar/Navbar';

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <div className={styles.TodoBox}>
      <div className={styles.TodoForm}>
      <ToDoForm />
      </div>
      <div className={styles.TodoList}>
      <h4 className='container'>To Do List</h4>
      <ToDoList />
      </div>
      </div>
    </div>
  )
}
