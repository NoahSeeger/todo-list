import React, { useState } from "react";

function TodoInput(props) {
  const { handleAddTodos, todoValue, setTodoValue } = props;

  return (
    <header>
      <input
        type="text"
        value={todoValue}
        placeholder="Enter Todo..."
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (todoValue != "") {
            handleAddTodos(todoValue);
            setTodoValue("");
          }
        }}
      >
        Add
      </button>
    </header>
  );
}

export default TodoInput;
