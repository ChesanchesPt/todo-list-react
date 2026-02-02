import { useState } from "react";
import React from "react";

interface AddTodoFormProps {
  onAdd: (title: string, description?: string) => void;
}

export function AddTodoForm({ onAdd }: AddTodoFormProps) {
  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();

    if (!title.trim()) return;

    onAdd(title, description ? description.trim() : "");
    setTitle("");
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Заголовок"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Описание (опционально)"
      />
      <button type="submit">Добавить задачу</button>
    </form>
  );
}
