import React from "react";
import { text } from "stream/consumers";
import { TodoType } from "./Types/TodoTypes";
import { getTodos, postTodos } from "./Api/api";
interface TodoInputProps {
   text: string;
   setText: React.Dispatch<React.SetStateAction<string>>;
   fetchTodos: () => void;
}

const TodoInput = ({ text, setText, fetchTodos }: TodoInputProps) => {
   const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>): void => {
      e.preventDefault();

      if (!text) {
         return alert("Write todo name");
      }

      let newTodo: TodoType = {
         name: text,
         id: Date.now(),
         status: false,
      };
      addTodo(newTodo);
   };

   const addTodo = async (newTodo: TodoType) => {
      try {
         let res = await postTodos(newTodo);
         fetchTodos();
      } catch (e) {
         console.log(e);
      }
   };

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <input
               type="text"
               placeholder="Enter todo"
               value={text}
               onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setText(e.target.value)
               }
            />
            <button type="submit">Add Todo</button>
         </form>
      </div>
   );
};

export default TodoInput;
