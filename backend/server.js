const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let tasks = [];

// Root check
app.get("/", (req, res) => {
  res.send("Task Manager Backend Running");
});

// Get all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// Add task
app.post("/tasks", (req, res) => {
  const task = {
    id: Date.now(),
    title: req.body.title
  };
  tasks.push(task);
  res.json(task);
});

// Delete task
app.delete("/tasks/:id", (req, res) => {
  tasks = tasks.filter(t => t.id != req.params.id);
  res.json({ message: "Task deleted" });
});

const PORT = 3001;
const HOST = "127.0.0.1";

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
