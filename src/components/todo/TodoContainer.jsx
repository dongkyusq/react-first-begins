import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoContainer = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "할 일1",
      content: "할 일 1 내용",
      isDone: false,
    },
    {
      id: 2,
      title: "할 일2",
      content: "할 일 2 내용",
      isDone: true,
    },
  ]);

  return (
    <section>
      <h1 className="title">Todo List</h1>
      <TodoForm setTodos={setTodos} />
      <TodoList todos={todos} />
    </section>
  );
};

export default TodoContainer;
