import { useState } from "react";

import List from "./List";
import Form from "./Form";

const todosList = [
  {
    id: 1,
    content: "店予約する",
  },
  {
    id: 2,
    content: "卵買う",
  },
  {
    id: 3,
    content: "郵便出す",
  },
];

const Todo = () => {
  const [ todos, setTodos] = useState(todosList);

  const deleteTodo = (id) => {
    // 消すというよりはidでわたってきたもの以外で再度リストを生成するイメージ
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(newTodos);
  }

  // おそらく下の引数のtodoは一時的な変数宣言で、フォームにわたされて機能する
  const createTodo = (todo) => {
    setTodos([...todos, todo]);
  }
  return (
    <>
      <List todos={todos} deleteTodo={deleteTodo} />
      <Form createTodo={createTodo}/>
    </>
  );

};

export default Todo;