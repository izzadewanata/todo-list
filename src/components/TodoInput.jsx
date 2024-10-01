import React, { useState } from 'react'

export default function TodoInput(props) { // expect the props (receive)
  const { handleAddTodos, todoValue, setTodoValue } = props

  return (
    <header>
      <input 
        type='text' 
        value={todoValue} 
        placeholder='Enter text here...'
        onChange={(e) => {
          setTodoValue(e.target.value)  // update value
        }} 
      />
      <button onClick={() => {
        handleAddTodos(todoValue)
        setTodoValue('')  // reset
      }}>
        Add</button>
    </header>
  )
}
