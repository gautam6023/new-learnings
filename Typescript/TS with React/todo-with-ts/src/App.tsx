import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoInput from "./Components/TodoInput";
import { TodoType } from "./Components/Types/TodoTypes";
import { getTodos } from "./Components/Api/api";
import SingleTodo from "./Components/SingleTodo";
function App() {
   const [text, setText] = useState<string>("");
   const [todos, setTodos] = useState<TodoType[]>([]);

   useEffect(() => {
      fetchTodos();
   }, []);

   const fetchTodos = async () => {
      try {
         let res = await getTodos();
         setTodos([...res]);
      } catch (e) {
         console.log(e);
      }
   };
   return (
      <div className="App">
         <h1>Todo App</h1>
         <TodoInput text={text} setText={setText} fetchTodos={fetchTodos} />
         {todos.map((el, i) => {
            return <SingleTodo key={el.id} {...el} fetchTodos={fetchTodos} />;
         })}
      </div>
   );
}

export default App;
