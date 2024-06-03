import React from "react";

// const TodoList = (props) => {
//   return (
//     <div>{props.todos}</div>
//   )
// }

// {}でprops名を指定しそのまま使うのが一般的
// const TodoList = ({todos, toggleTodo}) => {
//   return todos.map((todo) => <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo} />);
// };

// export default TodoList

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} className="todo-item">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          {todo.name}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
