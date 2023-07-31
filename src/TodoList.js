import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {   // trim() removes space
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleEditTask = (index) => {
    setEditIndex(index);
    setTask(tasks[index]);
  };

  const handleUpdateTask = () => {
    if (task.trim() !== '') {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = task;
      setTasks(updatedTasks);
      setTask('');
      setEditIndex(-1);
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index); // to remove a specific item from a tasks array
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <div>
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          placeholder="Enter a new task"
        />
        {editIndex === -1 ? (
          <button onClick={handleAddTask}>Add Task</button>
        ) : (
          <button onClick={handleUpdateTask}>Update Task</button>
        )}
      </div>
      <ul>
        {tasks.map((taskItem, index) => (
          <li key={index}>
            {taskItem}
            <button onClick={() => handleEditTask(index)}>Edit</button>
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
