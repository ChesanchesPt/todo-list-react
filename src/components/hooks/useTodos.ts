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
          id: (prev.length + 1).toString(),
          title,
          description,
          completed: false,
        },
      ];
      localStorage.setItem(key, JSON.stringify(newTodos));
      return newTodos;
    });
  }

  return { todos, addTodo };
}
