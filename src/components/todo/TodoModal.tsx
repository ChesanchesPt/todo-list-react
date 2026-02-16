/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

import { ButtonSquare } from "../buttons/buttonSquare";
import "./TodoModal.css";
import type { Todo } from "../../types/todo";

interface TodoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (title: string, description?: string) => void;
  onUpdate: (id: string, title: string, description?: string) => void;
  editingTodo: Todo | null;
}

export function TodoModal({ isOpen, onClose, onAdd, onUpdate, editingTodo }: TodoModalProps) {
  useEffect(() => {
    if (editingTodo) {
      setTitle(editingTodo.title);
      setDescription(editingTodo.description || "");
    } else {
      setTitle("");
      setDescription("");
    }
  }, [editingTodo]);

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  if (!isOpen) return null;

  function handleSubmit() {
    if (!title.trim()) return;

    if (editingTodo) {
      onUpdate(editingTodo.id, title, description);
    } else {
      onAdd(title, description);
    }

    onClose();
  }

  return (
    <div className="modal-background">
      <div className="modal-container">
        <ButtonSquare
          className="close-button"
          icon="src/assets/close.svg"
          alt="Закрыть окно"
          size="medium"
          onClick={onClose}
        />
        <input
          className="title-input"
          type="text"
          placeholder="Заголовок"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="description-input"
          placeholder="Описание"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <ButtonSquare
          className="submit-button"
          icon="src/assets/check.svg"
          alt="Добавить задачу"
          size="medium"
          onClick={handleSubmit}
          disabled={!title.trim()}
        />
      </div>
    </div>
  );
}
