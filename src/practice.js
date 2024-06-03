import React from 'react'

const practice = ({todos, toggleTodo}) => {

  return (
    <div>
        {todos.map((todo) => (
            <input type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
            />
        ))}
        </div>
  )
}

export default practice