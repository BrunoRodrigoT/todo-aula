import React from "react";
import Input from "../Input";
import Button from "../Button";
import styles from "./styles.module.css";

export default function NewTaskForm({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();
    const title = event.target[0].value;
    const description = event.target[1].value;
    const createdAt = new Date().toLocaleString();
    onSubmit({ title, description, createdAt });
  }

  return (
    <form className={styles.newTaskForm} onSubmit={handleSubmit}>
      <Input placeholder="Título da task" />
      <Input placeholder="Descrição da task" />
      <div>
        <Button type="submit">Salvar</Button>
      </div>
    </form>
  );
}
