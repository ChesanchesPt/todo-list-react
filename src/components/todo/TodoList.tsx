import type { Todo } from "../../types/todo";

import { TodoItem } from "./TodoItem";
import "./TodoList.css";

interface TodoListProps {
  todos: Todo[];
}

export function TodoList({ todos }: TodoListProps) {
  return (
    <div className="todo-list-container">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
