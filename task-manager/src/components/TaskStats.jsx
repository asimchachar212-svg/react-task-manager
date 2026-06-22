function TaskStats({ tasks }) {
  const activeTasks = tasks.filter(
    (task) => !task.completed
  ).length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  return (
    <>
      <div>
  <h3>📊 Task Summary</h3>

  <p>📋 Total: {tasks.length}</p>

  <p>⏳ Remaining: {activeTasks}</p>

  <p>✅ Completed: {completedTasks}</p>
</div>
    </>
  );
}

export default TaskStats;