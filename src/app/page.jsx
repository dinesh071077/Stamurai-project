

'use client';

import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react'; // You can install lucide-react if needed

export default function DashboardPage() {
  const [search, setSearch] = useState('');
  const [tasks, setTasks] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [user, setUser] = useState(null); // State to store user details

  useEffect(() => {
    // Retrieve user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setUser(storedUser);

    // Retrieve tasks from localStorage
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  const filteredTasks = tasks.filter((task) =>
    task.title?.toLowerCase().includes(search.toLowerCase()) ||
    task.description?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className={`bg-gray-800 p-4 transition-all duration-300 ${showSidebar ? 'w-64' : 'w-16'} overflow-hidden`}>
        <div className="flex items-center justify-between">
          <button onClick={() => setShowSidebar(!showSidebar)}>
            <Menu className="text-white" />
          </button>
        </div>
        
        {showSidebar && (
          <nav className="mt-4">
            <div className="flex items-center gap-4 mb-6">
              {/* Profile Section */}
              <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                {/* You can replace this with an avatar image */}
                <span className="text-white text-lg font-bold">{user ? user.username[0].toUpperCase() : ''}</span>
              </div>
              <div>
                {user ? (
                  <div className="text-sm text-white">
                    <p>{user.username}</p>
                    <p>{user.email}</p>
                  </div>
                ) : (
                  <p className="text-sm text-gray-400">Please log in</p>
                )}
              </div>
            </div>

            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/task" className="hover:underline">Task</a></li>
              <li><a href="/mytask" className="hover:underline">My Task</a></li>
              <li><a href="/login" className="hover:underline">Login</a></li>
            </ul>
          </nav>
        )}
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Trendy Task</h1>
          
          {/* Search Bar aligned to the right */}
          <input
            type="text"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 border border-gray-700 bg-gray-800 text-white rounded w-1/3 md:w-1/4"
          />
        </div>

        {/* Task List */}
        <div className="grid gap-4">
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task) => (
              <div key={task.id} className="p-4 bg-gray-800 rounded shadow">
                <h3 className="text-lg font-semibold">{task.title}</h3>
                <p>{task.description}</p>
                {task.imageUrl && (
                  <div className="flex justify-center mt-4">
                    <img
                      src={task.imageUrl}
                      alt="Task"
                      className="w-200 h-154 object-cover rounded-lg border-4 border-gray-500" // Updated image size and border
                    />
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-gray-400">No tasks match the search.</div>
          )}
        </div>
      </main>
    </div>
  );
}
