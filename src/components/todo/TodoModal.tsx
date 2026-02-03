/* eslint-disable no-unused-vars */
import { useState } from "react";
import React from "react";
import { ButtonSquare } from "../ui/buttonSquare";
import "./TodoModal.css";

interface TodoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (title: string, description?: string) => void;
}

export function TodoModal({ isOpen, onClose, onAdd }: TodoModalProps) {
  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  if (!isOpen) return null;

  function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();

    if (!title.trim()) return;

    onAdd(title, description);
    setTitle("");
    setDescription("");
    onClose();
  }

  return (
    <div className="modal-background">
      <div className="modal-container">
        <ButtonSquare
          className="close-button"
          icon="src\assets\close.svg"
          alt="Закрыть окно"
          size="small"
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
          icon="src\assets\check.svg"
          alt="Добавить задачу"
          size="small"
          onClick={handleSubmit}
          disabled={!title.trim()}
        />
      </div>
    </div>
  );
}
