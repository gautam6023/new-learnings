import { TodoType } from "./../Types/TodoTypes";
import axios, { AxiosResponse } from "axios";

export const postTodos = async (item: TodoType) => {
   let res: AxiosResponse<TodoType> = await axios.post(
      "http://localhost:5000/todos",
      item
   );
   return res.data;
};

export const getTodos = async () => {
   let res: AxiosResponse<TodoType[]> = await axios.get(
      "http://localhost:5000/todos"
   );
   return res.data;
};
