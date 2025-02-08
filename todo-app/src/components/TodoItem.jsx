import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function TodoItem({ todo, index, toggleTodo }) {
  return (
    <Card onClick={() => toggleTodo(index)} style={{ marginBottom: '8px', cursor: 'pointer', backgroundColor: todo.completed ? '#e0e0e0' : '' }}>
      <CardContent>
        <Typography variant="body1">
          {todo.text}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default TodoItem;
