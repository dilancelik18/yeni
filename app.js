const express = require('express');
const app = express();

app.use(express.json());

let todos = [
  { id: 1, task: 'Learn REST API', completed: false },
];

app.get('/todos', (req, res) => {
  res.json(todos);
});

module.exports = app;
