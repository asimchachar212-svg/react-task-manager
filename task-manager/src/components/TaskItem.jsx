function TaskItem({
  item,
  index,
  tasks,
  setTasks,
  editingIndex,
  setEditingIndex,
  editText,
  setEditText,
}) {
  return (
    <li>
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

            updatedTasks[index].text =
              editText;

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
  );
}

export default TaskItem;