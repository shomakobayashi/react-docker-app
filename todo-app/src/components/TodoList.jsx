import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleTodo }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem key={index} index={index} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </div>
  );
}

export default TodoList;
