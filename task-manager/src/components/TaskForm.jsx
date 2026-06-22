function TaskForm({
  task,
  setTask,
  addTask,
}) {
  return (
    <>
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) =>
          setTask(e.target.value)
        }
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTask();
          }
        }}
      />

      <button onClick={addTask}>
        Add Task
      </button>
    </>
  );
}

export default TaskForm;