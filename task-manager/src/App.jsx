
import { useState, useEffect } from "react";
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
const activeTasks = tasks.filter(
  (task) => !task.completed
).length;

const completedTasks = tasks.filter(
  (task) => task.completed
).length;
  return (
    <div className="container">
      <h1>Task Manager</h1>
<p>Total Tasks: {tasks.length}</p>
<p>Active Tasks: {activeTasks}</p>
<p>Completed Tasks: {completedTasks}</p>
     <input
  type="text"
  placeholder="Enter a task"
  value={task}
  onChange={(e) => setTask(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      addTask();
    }
  }}
/>
      <button onClick={addTask}>
        Add Task
      </button>

      <br />
      <br />

      <button onClick={() => setFilter("all")}>
        All
      </button>

      <button onClick={() => setFilter("active")}>
        Active
      </button>

      <button onClick={() => setFilter("completed")}>
        Completed
      </button>

      <ul>
        {filteredTasks.map((item, index) => (
          <li key={index}>
            {editingIndex === index ? (
  <input
    value={editText}
    onChange={(e) =>
      setEditText(e.target.value)
    }
  />
) : (
  <span
    style={{
      textDecoration: item.completed
        ? "line-through"
        : "none",
    }}
  >
    {item.text}
  </span>
)}
<button
  onClick={() => {
    setEditingIndex(index);
    setEditText(item.text);
  }}
>
  Edit
</button>
{editingIndex === index && (
  <button
    onClick={() => {
      const updatedTasks = [...tasks];

      updatedTasks[index].text = editText;

      setTasks(updatedTasks);

      setEditingIndex(null);
      setEditText("");
    }}
  >
    Save
  </button>
)}

            <button
              onClick={() => {
                const updatedTasks = [...tasks];

                updatedTasks[index].completed =
                  !updatedTasks[index].completed;

                setTasks(updatedTasks);
              }}
            >
              Complete
            </button>

            <button
              onClick={() => {
                const updatedTasks = tasks.filter(
                  (_, i) => i !== index
                );

                setTasks(updatedTasks);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;