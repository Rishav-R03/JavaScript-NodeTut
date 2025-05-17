import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  const [formData, setFormData] = useState({
    taskid: '',
    title: '',
    description: '',
    iscompleted: false
  });

  const fetchTasks = async () => {
    try {
      const res = await axios.get('http://localhost:3000/fetchAll');
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/postTask', formData);
      fetchTasks();
      setFormData({ taskid: '', title: '', description: '', iscompleted: false });
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async taskid => {
    try {
      await axios.delete(`http://localhost:3000/deleteTask/${taskid}`);
      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">ToDo Application</h1>

      <form onSubmit={handleSubmit} className="mb-6">
        <input name="taskid" value={formData.taskid} onChange={handleChange} placeholder="Task ID" className="border p-2 mr-2" required />
        <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" className="border p-2 mr-2" required />
        <input name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="border p-2 mr-2" />
        <label className="mr-2">
          <input type="checkbox" name="iscompleted" checked={formData.iscompleted} onChange={handleChange} /> Completed
        </label>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Task</button>
      </form>

      <ul>
        {tasks.map(task => (
          <li key={task.taskid} className="border p-2 mb-2 flex justify-between">
            <div>
              <h3 className="font-semibold">{task.title}</h3>
              <p>{task.description}</p>
              <p>Status: {task.iscompleted ? 'Completed' : 'Pending'}</p>
            </div>
            <button onClick={() => handleDelete(task.taskid)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
