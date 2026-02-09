import { useState } from "react";

import { TodoList } from "./components/todo/TodoList";
import { TodoModal } from "./components/todo/TodoModal";
import { useLocalStorageTodos } from "./components/hooks/useTodos";
import { ButtonSquare } from "./components/ui/buttonSquare";
import "./App.css";
import type { Todo } from "./types/todo";

export default function App() {
  const { todos, addTodo, deleteTodo, editTodo, toggleTodo } = useLocalStorageTodos("todos");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);

  function handleEdit(todo: Todo) {
    setEditingTodo(todo);
    setIsModalOpen(true);
  }

  return (
    <main>
      <h1>TODO лист</h1>
      <p>Запишите все свои задачи списком</p>
      <TodoList
        todos={todos}
        onDeleteTodo={deleteTodo}
        onEditTodo={handleEdit}
        onToggleTodo={toggleTodo}
      />
      <TodoModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingTodo(null);
        }}
        onAdd={addTodo}
        onUpdate={editTodo}
        editingTodo={editingTodo}
      />
      <ButtonSquare
        icon="src/assets/plus.svg"
        alt="Добавить задачу"
        size="large"
        onClick={() => setIsModalOpen(true)}
      />
    </main>
  );
}
