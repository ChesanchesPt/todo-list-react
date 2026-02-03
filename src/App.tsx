import { useState } from "react";

import { TodoList } from "./components/todo/TodoList";
import { TodoModal } from "./components/todo/TodoModal";
import { useLocalStorageTodos } from "./components/hooks/useTodos";
import { ButtonSquare } from "./components/ui/buttonSquare";
import "./App.css";

export default function App() {
  const { todos, addTodo } = useLocalStorageTodos("todos");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main>
      <h1>TODO лист</h1>
      <p>Запишите все свои задачи списком</p>
      <TodoList todos={todos} />
      <TodoModal onAdd={addTodo} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <ButtonSquare
        icon="src\assets\plus.svg"
        alt="Добавить задачу"
        size="medium"
        onClick={() => setIsModalOpen(true)}
      />
    </main>
  );
}
