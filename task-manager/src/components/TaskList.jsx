import TaskItem from "./TaskItem";

function TaskList({
  filteredTasks,
  tasks,
  setTasks,
  editingIndex,
  setEditingIndex,
  editText,
  setEditText,
}) {
  return (
    <ul>
      {filteredTasks.map((item, index) => (
        <TaskItem
          key={item.id}
          item={item}
          index={index}
          tasks={tasks}
          setTasks={setTasks}
          editingIndex={editingIndex}
          setEditingIndex={setEditingIndex}
          editText={editText}
          setEditText={setEditText}
        />
      ))}
    </ul>
  );
}

export default TaskList;