import React from 'react'
import TodoCard from './TodoCard'


export default function TodoList(props) {   // receive the properties; contains children and attribute
  const { todos } = props   // destructuring syntax
  
  return (
    <ul className='main'>
      {todos.map((todo, todoIndex) => {
        return (
          // to render the children contents within the component, use 'props' method
          // send the props to TodoCard, using spread method
          <TodoCard 
            key={todoIndex} 
            {...props} 
            index={todoIndex}
            >
            <p>{todo}</p>
          </TodoCard>
        )
      })}
    </ul>
  )
}
