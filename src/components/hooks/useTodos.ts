import { useState } from "react";

import type { Todo } from "../../types/todo";

export function useLocalStorageTodos(key: string) {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const storedTodos = localStorage.getItem(key);
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  function addTodo(title: string, description?: string) {
    setTodos((prev) => {
      const newTodos = [
        ...prev,
        {
          id: crypto.randomUUID(),
          title,
          description,
          completed: false,
        },
      ];
      localStorage.setItem(key, JSON.stringify(newTodos));
      return newTodos;
    });
  }

  function deleteTodo(id: string) {
    setTodos((prev) => {
      const newTodos = prev.filter((todo) => todo.id !== id);
      localStorage.setItem(key, JSON.stringify(newTodos));
      return newTodos;
    });
  }

  function editTodo(id: string, title: string, description?: string) {
    setTodos((prev) => {
      const newTodos = prev.map((todo) =>
        todo.id === id ? { ...todo, title, description } : todo,
      );
      localStorage.setItem(key, JSON.stringify(newTodos));
      return newTodos;
    });
  }

  function toggleTodo(id: string) {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
    );
  }

  return { todos, addTodo, deleteTodo, editTodo, toggleTodo };
}
