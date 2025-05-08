'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation

export default function PointsAndTasksPage() {
  const [points, setPoints] = useState(0);
  const [tasks, setTasks] = useState([]);
  const router = useRouter(); // Initialize the router for navigation

  useEffect(() => {
    // Get points from localStorage or set to 0 if not available
    const storedPoints = JSON.parse(localStorage.getItem('points')) || 0;
    setPoints(storedPoints);

    // Get tasks from localStorage
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex justify-center items-center">
      <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md">
        {/* Back Button */}
        <button
          onClick={() => router.back()} // Go back to the previous page
          className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded mb-6"
        >
          Back
        </button>

        {/* Points Display */}
        <h1 className="text-2xl font-bold mb-4 text-center">My Points</h1>
        <p className="text-lg mb-6 text-center">You have earned {points} points!</p>

        {/* Tasks Display */}
        <h2 className="text-xl font-semibold mb-4 text-center">My Tasks</h2>
        <div className="grid gap-4">
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <div key={task.id} className="p-4 bg-gray-800 rounded shadow">
                <h3 className="text-lg font-semibold">{task.title}</h3>
                <p>{task.description}</p>
                {task.imageUrl && (
                  <img
                    src={task.imageUrl}
                    alt="Task"
                    className="w-full h-auto object-cover mt-2 rounded-lg border-4 border-gray-500"
                  />
                )}
              </div>
            ))
          ) : (
            <div className="text-gray-400 text-center">No tasks uploaded yet.</div>
          )}
        </div>
      </div>
    </div>
  );
}
