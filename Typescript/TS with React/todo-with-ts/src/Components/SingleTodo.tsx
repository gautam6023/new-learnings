import React from "react";
import { TodoType } from "./Types/TodoTypes";
import { toggleStatus } from "./Api/api";
import { deleteTodo } from "./Api/api";
interface SingleTodoProps extends TodoType {
   fetchTodos: () => void;
}

const SingleTodo = ({ id, name, status, fetchTodos }: SingleTodoProps) => {
   const updateSingleTodo = async (id: number) => {
      try {
         let res = await toggleStatus(id, { status: !status });
         console.log(res);
         fetchTodos();
      } catch (e) {
         console.log(e);
      }
   };

   const handleDeleteTodo = async (id: number) => {
      try {
         let res = await deleteTodo(id);
         fetchTodos();
      } catch (e) {
         console.log(e);
      }
   };

   return (
      <div
         style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
         }}
      >
         <h3>{name}</h3>
         <button onClick={() => updateSingleTodo(id)}>
            {status ? "Completed" : "Not Completed"}
         </button>
         <button onClick={() => handleDeleteTodo(id)}>Delete</button>
      </div>
   );
};

export default SingleTodo;
