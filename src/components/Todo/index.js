import React from "react";

import {
  ContainerTodo,
  ContainerButton,
  ContainerButtonRemove,
  TodoText,
} from "./styles";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <ContainerTodo
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <TodoText>{todo.text}</TodoText>

      <ContainerTodo>
        <ContainerButton onClick={() => completeTodo(index)}>
          Complete
        </ContainerButton>
        <ContainerButtonRemove onClick={() => removeTodo(index)}>
          x
        </ContainerButtonRemove>
      </ContainerTodo>
    </ContainerTodo>
  );
}

export default Todo;
