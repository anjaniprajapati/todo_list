"use client"
import React, { useState } from 'react';
const TaskManager=()=>{
    const [task ,setTask] =useState([]);
    const [taskName, setTaskName] = useState('');
    const [taskPriority, setTaskPriority] = useState('');
    const [estimatedTime, setEstimatedTime] = useState('');


    const addTask =()=>{
        if (taskName.trim==='' || estimatedTime.trim() === ''){
            return ;
        };
        const newTask = {
            name: taskName,
            priority: taskPriority,
            estimatedTime: estimatedTime,
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


// import { useState } from 'react';

// export default function Home() {
//   const [tasks, setTasks] = useState([
//     { id: 1, text: 'Task 1', done: false },
//     { id: 2, text: 'Task 2', done: false },
//     { id: 3, text: 'Task 3', done: true },
//   ]);

//   const handleDelete = (taskId) => {
//     setTasks(tasks.filter((task) => task.id !== taskId));
//   };

//   const handleToggleDone = (taskId) => {
//     setTasks((prevTasks) =>
//       prevTasks.map((task) =>
//         task.id === taskId ? { ...task, done: !task.done } : task
//       )
//     );
//   };

//   const handleEdit = (taskId) => {
//     const updatedText = prompt('Edit task:', tasks.find((task) => task.id === taskId).text);

//     if (updatedText) {
//       setTasks((prevTasks) =>
//         prevTasks.map((task) =>
//           task.id === taskId ? { ...task, text: updatedText } : task
//         )
//       );
//     }
//   };

//   return (
//     <div>
//       <h1>Todo List</h1>
//       <ul>
//         {tasks.map((task) => (
//           <li key={task.id}>
//             {task.text} {task.done ? '(Done)' : ''}
//             <button onClick={() => handleDelete(task.id)}>Delete</button>
//             <button onClick={() => handleToggleDone(task.id)}>
//               {task.done ? 'Undone' : 'Done'}
//             </button>
//             <button onClick={() => handleEdit(task.id)}>Edit</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }



// import React, { useState } from 'react';

// const TodoList = () => {
//   const [todos, setTodos] = useState([]);
//   const [task, setTask] = useState('');

//   const addTodo = () => {
//     if (task.trim() === '') return;
//     setTodos([...todos, { task, done: false }]);
//     setTask('');
//   };

//   const toggleDone = (index) => {
//     const updatedTodos = [...todos];
//     updatedTodos[index].done = !updatedTodos[index].done;
//     setTodos(updatedTodos);
//   };

//   const editTodo = (index, newTask) => {
//     const updatedTodos = [...todos];
//     updatedTodos[index].task = newTask;
//     setTodos(updatedTodos);
//   };

//   const deleteTodo = (index) => {
//     const updatedTodos = todos.filter((_, i) => i !== index);
//     setTodos(updatedTodos);
//   };

//   return (
//     <div>
//       <h1>Todo List</h1>
//       <div className="todo-input">
//         <input
//           type="text"
//           placeholder="Add a new task"
//           value={task}
//           onChange={(e) => setTask(e.target.value)}
//         />
//         <button onClick={addTodo}>Add</button>
//       </div>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index} className={todo.done ? 'done' : ''}>
//             <span>{todo.task}</span>
//             <button onClick={() => toggleDone(index)}>
//               {todo.done ? 'Undone' : 'Done'}
//             </button>
//             <button onClick={() => deleteTodo(index)}>Delete</button>
//             <button
//               onClick={() => {
//                 const newTask = prompt('Edit task', todo.task);
//                 if (newTask !== null) {
//                   editTodo(index, newTask);
//                 }
//               }}
//             >
//               Edit
//             </button>
//           </li>
//         ))}
//       </ul>
//       <style jsx>{`
//         .todo-input {
//           display: flex;
//           margin-bottom: 10px;
//         }
//         .todo-input input {
//           flex: 1;
//           margin-right: 10px;
//         }
//         ul {
//           list-style: none;
//         }
//         li {
//           display: flex;
//           justify-content: space-between;
//           margin: 5px 0;
//         }
//         .done {
//           text-decoration: line-through;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default TodoList;
