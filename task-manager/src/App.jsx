import { useState, useEffect } from "react";
import TaskStats from "./components/TaskStats";
import TaskForm from "./components/TaskForm";
import FilterButtons from "./components/FilterButtons";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [filter, setFilter] = useState("all");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    return savedTasks
      ? JSON.parse(savedTasks)
      : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks)
    );
  }, [tasks]);

  const addTask = () => {
    if (!task.trim()) return;

    const newTask = {
  id: Date.now(),
  text: task,
  completed: false,
};

    setTasks([...tasks, newTask]);
    setTask("");
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") {
      return !task.completed;
    }

    if (filter === "completed") {
      return task.completed;
    }

    return true;
  });

  return (
    <div className="container">
      <h1>Task Manager</h1>

      <TaskStats tasks={tasks} />

     <TaskForm
  task={task}
  setTask={setTask}
  addTask={addTask}
/>

      <br />
      <br />

      <FilterButtons setFilter={setFilter} />

      
            
          
        
      <TaskList
  filteredTasks={filteredTasks}
  tasks={tasks}
  setTasks={setTasks}
  editingIndex={editingIndex}
  setEditingIndex={setEditingIndex}
  editText={editText}
  setEditText={setEditText}
/>
    </div>
  );
}

export default App;