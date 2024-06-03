import React, { useState, useRef, useCallback } from "react";
import "./App.css";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 2,
      name: "Todo1",
      comp: false,
    },
  ]);

  const todoNameRef = useRef();

  const hendleAddClick = () => {
    alert("aaa");
  };
  const HandleAddclick = () => {};
  const handleRemoveClick = () => {};
  const handleAddClass = () => {};

  return <div></div>;
};

export default App;

/////// ------------------------------ ここから ------------------------------/////

// function App() {

//   const [todos, setTodos] = useState([
//     // {id: 2,  name: "Todo1", completed: false },
//   ]);

//   const todoNameRef = useRef();

//   const handleAddTodo = () => {
//     // console.log(todoNameRef.current.value);で取得できているか確認
//     const valueName = todoNameRef.current.value;
//     if (valueName === "") return; //からだとタスクを追加しない
//     setTodos((prevTodo) => {
//       return [...prevTodo, {id: uuidv4(), name: valueName, completed: false }]
//     });
//     todoNameRef.current.value = null;
//   };

//   //todosといった状態変数を直接いじることはよくない
//   const toggleTodo = (id) => {
//     const newTodos = [...todos];
//     const todo = newTodos.find((todo) => todo.id === id);
//     todo.completed = !todo.completed;
//     setTodos(newTodos);
//   };

//   const handleClear = () => {
//     const newTodos = todos.filter((todo) => !todo.completed);
//     setTodos(newTodos);
//   };

//   //--このしたに全てのタスクを✓するボタンを作ってもいいかも

//   return (
//     <>
//       <TodoList todos={todos} toggleTodo={toggleTodo} />    {/* props→ todos={todos} ←propsという名前の変数*/}
//       <div className="todo_container">
//         <input type="text" ref={todoNameRef} />
//         <button onClick={handleAddTodo}>タスクの追加</button>
//         <button onClick={handleClear}>完了したタスクの削除</button>
//         <div className="buttons">
//           <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
//           <div>終えたタスク:{todos.filter((todo) => todo.completed).length}</div>
//         </div>
//       </div>
//     </>//jsxフラグメントルールのため空箱は必要
//   );
// }

// export default App;
