import React from "react";
import { TodoType } from "./Types/TodoTypes";

const SingleTodo: React.FC<TodoType> = ({ id, name, status }) => {
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
         <button>{status ? "Completed" : "Not Completed"}</button>
      </div>
   );
};

export default SingleTodo;
