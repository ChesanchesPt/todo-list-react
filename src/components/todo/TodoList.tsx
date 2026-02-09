import type { Todo } from "../../types/todo";

import { TodoItem } from "./TodoItem";
import "./TodoList.css";

interface TodoListProps {
  todos: Todo[];
  onDeleteTodo: (id: string) => void;
  onEditTodo: (todo: Todo) => void;
  onToggleTodo: (id: string) => void;
}

export function TodoList({ todos, onDeleteTodo, onEditTodo, onToggleTodo }: TodoListProps) {
  return (
    <div className="todo-list-container">
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          order={index + 1}
          onDelete={() => onDeleteTodo(todo.id)}
          onEdit={() => onEditTodo(todo)}
          onCheck={() => onToggleTodo(todo.id)}
        />
      ))}
    </div>
  );
}
