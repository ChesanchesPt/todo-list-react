import "./TodoItem.css";

import type { Todo } from "../../types/todo";
import { ButtonSquare } from "../buttons/buttonSquare";

interface TodoItemProps {
  todo: Todo;
  order: string;
  onDelete: () => void;
  onEdit: () => void;
  onCheck: () => void;
}

export function TodoItem({ todo, order, onDelete, onEdit, onCheck }: TodoItemProps) {
  return (
    <div className="todo-item">
      <h2>{order}</h2>
      <div className="text-column">
        <h3>{todo.title}</h3>
        {todo.description && <p>{todo.description}</p>}
      </div>
      <div className="checkbox-column">
        <ButtonSquare
          className="checkbox-button"
          icon={
            todo.completed ? "src/assets/checkbox-checked.svg" : "src/assets/checkbox-unchecked.svg"
          }
          alt="Чекбокс"
          size="small"
          onClick={onCheck}
        />
        <ButtonSquare
          className="edit-button"
          icon="src/assets/edit.svg"
          alt="Редактировать"
          size="small"
          onClick={onEdit}
        />
        <ButtonSquare
          className="delete-button"
          icon="src/assets/trash.svg"
          alt="Удалить"
          size="small"
          onClick={onDelete}
        />
      </div>
    </div>
  );
}
