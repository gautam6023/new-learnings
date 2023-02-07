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

export const toggleStatus = async (id: number, todo: { status: boolean }) => {
   let res: AxiosResponse<TodoType> = await axios.patch(
      `http://localhost:5000/todos/${id}`,
      todo
   );
   return res;
};

export const deleteTodo = async (id: number) => {
   let res: AxiosResponse<TodoType> = await axios.delete(
      `http://localhost:5000/todos/${id}`
   );
   return res;
};
