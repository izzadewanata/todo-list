import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState('')

  // handle 
  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
    persistData(newTodoList)
  }

 function deleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    setTodos(newTodoList)
    persistData(newTodoList)
 } 

 function editTodo(index) {
  const valuetobeEdited = todos[index]
  setTodoValue(valuetobeEdited)
  deleteTodo(index)
 }

 function persistData(newList) {
  localStorage.setItem('todos', JSON.stringify({ todos: newList }))
 }

 // safe data in Local storage
 useEffect(() => {
  if (!localStorage) {
    return
  }
  let localTodos = localStorage.getItem('todos')
  
  if (!localTodos) {
    return
  }

  localTodos = JSON.parse(localTodos).todos
  setTodos(localTodos)
 }, []);


  // pass the functions as props, by insert them in the component tags
  return (
    <>
      <div className="main-container">
        <h1>Make your own To do list</h1>
        <TodoInput 
          handleAddTodos={handleAddTodos} 
          todoValue={todoValue} 
          setTodoValue={setTodoValue} 
        />
        <TodoList  
          todos={todos} 
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
        {/* <h3>by Izza Sinatrya</h3> */}
      </div>
    </>
  )
}

export default App
