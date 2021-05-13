import React, { useState } from "react";

import { ContainerForm, InputForm } from "./styles";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <ContainerForm onSubmit={handleSubmit}>
      <InputForm
        placeholder="To do..."
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </ContainerForm>
  );
}

export default TodoForm;
