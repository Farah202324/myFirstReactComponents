import React, { useState } from "react";


const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [error, setError] = useState("");

  const addTodo = () => {
    if (newTodo.trim() === "") {
      setError("Todo description cannot be empty");
      return;
    }

    const todo = {
      id: todos.length + 1,
      description: newTodo
    };

    setTodos([...todos, todo]);
    setNewTodo("");
    setError("");
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-container">
      <h2>Todo App</h2>
      <div className="todo-form">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new todo..."
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>

      {error && <p className="error">{error}</p>}

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            {todo.description}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
