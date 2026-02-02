import "./TodoItem.css";

import type { Todo } from "../../types/todo";

interface TodoItemProps {
  todo: Todo;
}

export function TodoItem({ todo }: TodoItemProps) {
  return (
    <div className="todo-item">
      <h2>{todo.id}</h2>
      <div className="text-column">
        <h2>{todo.title}</h2>
        {todo.description && <p>{todo.description}</p>}
      </div>
      <div className="checkbox-column">
        <input type="checkbox" checked={todo.completed} readOnly />
      </div>
    </div>
  );
}
