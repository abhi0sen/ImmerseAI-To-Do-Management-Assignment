import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoForm from '@/components/ToDoForm/ToDoForm'
import ToDoList from '@/components/ToDoForm/ToDoList';


export default function Home() {
  return (
    <div className="container">

      <div className="d-flex">
      <div className='w-50 mt-4'>
      <ToDoForm />
      </div>
      <div className='w-50 mt-4'>
      <ToDoList />
      </div>
      </div>
    </div>
  )
}
