'use client';

import { useState } from 'react';

export default function TaskUploadPage() {
  const [taskTitle, setTaskTitle] = useState(''); // Store task title input
  const [taskComment, setTaskComment] = useState(''); // Store task comment input
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      alert('Please select an image to upload.');
      return;
    }

    if (!taskTitle || !taskComment) {
      alert('Please provide a task name and comment.');
      return;
    }

    const newTask = {
      id: Date.now(),
      title: taskTitle,
      description: taskComment,
      imageUrl: preview,
      status: 'completed',
    };

    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const updatedTasks = [...storedTasks, newTask];
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setTasks(updatedTasks);

    setImage(null);
    setPreview('');
    setTaskTitle('');
    setTaskComment('');
    alert('Mountain task image uploaded successfully!');
  };

  const handleBack = () => {
    // You can replace this with any specific page you want to navigate to.
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex justify-center items-center">
      <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md">
        <button
          onClick={handleBack}
          className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded mb-4"
        >
          Back
        </button>
        <h1 className="text-2xl font-bold mb-4 text-center">Assigned Task</h1>
        <p className="mb-6 text-lg text-center">Please provide the task name, comment, and upload an image showing a mountain scene.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Task Name */}
          <div>
            <label htmlFor="taskTitle" className="block text-lg font-semibold">Task Name</label>
            <input
              type="text"
              id="taskTitle"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              placeholder="Enter task name"
              className="w-full p-2 border border-gray-700 bg-gray-800 text-white rounded"
            />
          </div>

          {/* Task Comment */}
          <div>
            <label htmlFor="taskComment" className="block text-lg font-semibold">Task Comment</label>
            <textarea
              id="taskComment"
              value={taskComment}
              onChange={(e) => setTaskComment(e.target.value)}
              placeholder="Enter task comment"
              rows="4"
              className="w-full p-2 border border-gray-700 bg-gray-800 text-white rounded"
            />
          </div>

          {/* File Input */}
          <div>
            <label
              htmlFor="fileInput"
              className={`block cursor-pointer text-center py-2 px-4 rounded-md ${image ? 'bg-green-600' : 'bg-gray-700'}`}
            >
              {image ? 'File Selected: ' + image.name : 'Choose an Image'}
            </label>
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>

          {/* Preview Image */}
          {preview && (
            <div className="flex justify-center mt-4">
              <img
                src={preview}
                alt="Preview"
                className="w-64 h-64 object-cover rounded-lg border-4 border-gray-500"
              />
            </div>
          )}

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded mt-4 w-full"
          >
            Submit Task
          </button>
        </form>
      </div>
    </div>
  );
}
