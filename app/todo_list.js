"use client"
import React, { useState } from 'react';

const TaskManager = () => {
  const [task, setTask] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [taskPriority, setTaskPriority] = useState('');
  const [estimatedTime, setEstimatedTime] = useState('');

  const addTask = () => {
    if (taskName.trim() === '' || estimatedTime.trim() === '') {
      return;
    }

    const newTask = {
      name: taskName,
      priority: taskPriority,
      estimatedTime: estimatedTime,
      isDone: false,
    };

    setTask([...task, newTask]);
    setTaskName('');
    setTaskPriority('');
    setEstimatedTime('');
  };

  const deleteTask = (index) => {
    const updatedTasks = [...task];
    updatedTasks.splice(index, 1);
    setTask(updatedTasks);
  };

  const toggleDone = (index) => {
    const updatedTasks = [...task];
    updatedTasks[index].isDone = !updatedTasks[index].isDone;
    setTask(updatedTasks);
  };

  const sortedTasks = [...task].sort((a, b) => a.priority - b.priority);

  return (
    <div>
      <div className="MainDiv">
        <input
          className="Task_Name"
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <select
          className="Priority"
          value={taskPriority}
          onChange={(e) => setTaskPriority(e.target.value)}
        >
          <option value="">Priority</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="12">12</option>
          <option value="13">13</option>
        </select>
        <input
          className="Estimated_Time"
          type="text"
          placeholder="Estimated Time"
          value={estimatedTime}
          onChange={(e) => setEstimatedTime(e.target.value)}
        />
        <button className="Add_Button" onClick={addTask}>
          Add
        </button>
      </div>
      <div className="Headerline">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Priority</th>
              <th>Estimated Time</th>
              <th>Done / Not Done</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {sortedTasks.map((task, index) => (
              <tr key={index}>
                <td>
                  <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
                    {task.name}
                  </span>
                </td>
                <td>
                  <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
                    {task.priority}
                  </span>
                </td>
                <td>
                  <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
                    {task.estimatedTime}
                  </span>
                </td>
                <td>
                  <button onClick={() => toggleDone(index)}>
                    {task.isDone ? 'Not Done' : 'Done'}
                  </button>
                </td>
                <td>
                  <button onClick={() => deleteTask(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskManager;

<<<<<<< Updated upstream

=======
    return(
        <div>
            <div className='MainDiv'>
                <input 
                    type="text" 
                    placeholder="Task Name" 
                    value={taskName} 
                    onChange={(e) => setTaskName(e.target.value)} >
                </input><br></br>
                <select  value={taskPriority} onChange={(e) => setTaskPriority(e.target.value)} >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                </select><br></br>
                <input 
                    type ="text" 
                    placeholder="Estimated Time"
                    value={estimatedTime}
                    onChange={(e) => setEstimatedTime(e.target.value)}>
                </input><br></br>
                <button onClick={addTask}>Add</button>
            </div>
            <ul>
                {task.map((task, index) => (
                <li key={index}>
                    <span>Name: {task.name}</span><br></br>
                    <span>Priority: {task.priority}</span><br></br>
                    <span>Time: {task.estimatedTime}</span><br></br>
                    <button onClick={() => deleteTask(index)}>Delete</button>
                </li>
                ))}
            </ul>
        </div>
    )
}
 export default TaskManager;
>>>>>>> Stashed changes



