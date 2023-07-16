import {  useState } from 'react'
import './styles.css'
import Form from './Form';
import { Lis } from './Lis';
function App() {
  const [todos, setTodos] = useState([]);
 
  function addTodos(item) {
    setTodos([...todos, { id: crypto.randomUUID(), title: item, completed: true }])
  }
  
  //console.log(todos);

  return (
    <>
      <Form addTodos={addTodos} />
      <h1 className='header'>Todo List</h1>
      <ul className='list' >
        {todos.map((todo) => {
          return (
            <Lis key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
          )
        })}
      </ul>
    </>
  )
}

export default App
