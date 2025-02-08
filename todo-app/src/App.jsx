import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import Typography from '@mui/material/Typography';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    const newTodos = [...todos, { text, completed: false }];
    setTodos(newTodos);
  };

  const toggleTodo = index => {
    const newTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ margin: "16px 0", padding: "16px" }}>
        <Typography variant="h4" component="h1" gutterBottom>
          ToDo List
        </Typography>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} toggleTodo={toggleTodo} />
      </Paper>
    </Container>
  );
}

export default App;
