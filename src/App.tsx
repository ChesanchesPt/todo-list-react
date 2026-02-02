import "./App.css";

import type { Todo } from "./types/todo";
import { TodoList } from "./components/todo/TodoList";
import { AddTodoForm } from "./components/todo/AddTodoForm";
import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(title: string, description?: string) {
    const newTodo: Todo = {
      id: `${todos.length + 1}`,
      title,
      description,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
  }

  return (
    <>
      <h1>TODO лист</h1>
      <p>Запишите все свои задачи списком</p>
      <TodoList todos={todos} />
      <AddTodoForm onAdd={addTodo} />
    </>
  );
}
