

'use client';

import { useState } from 'react';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem('user'));

    let hasError = false;
    const newErrors = { username: '', password: '' };

    // Validation
    if (!username.trim()) {
      newErrors.username = 'Username is required';
      hasError = true;
    } else if (storedUser && storedUser.username !== username) {
      newErrors.username = 'Incorrect username';
      hasError = true;
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
      hasError = true;
    } else if (storedUser && storedUser.password !== password) {
      newErrors.password = 'Incorrect password';
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    // Clear errors
    setErrors({ username: '', password: '' });

    // Simulate successful login
    alert('Login successful');
    window.location.href = '/'
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
      <form onSubmit={handleSubmit} className="bg-[#111827] p-8 rounded-xl shadow-lg w-full max-w-sm text-white">
        <h2 className="text-3xl font-bold text-center mb-6 tracking-wide">TRENDY</h2>

        {/* Username */}
        <div className="mb-4">
          <input
            type="text"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <p className="text-red-400 text-sm">{errors.username}</p>}
        </div>

        {/* Password */}
        <div className="mb-4">
          <input
            type="password"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="text-red-400 text-sm">{errors.password}</p>}
        </div>

        {/* Remember Me & Forgot Password - Aligned in one row */}
        <div className="mb-4 flex justify-between items-center text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-blue-500 w-4 h-4" />
            <span>Remember me</span>
          </label>
          <a href="/forgot" className="text-blue-400 hover:underline">Forgot Password?</a>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full py-2 rounded bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold hover:opacity-90 transition"
        >
          Login
        </button>

        {/* Register Link */}
        <p className="mt-4 text-center text-sm">
          Don’t have an account? <a href="/register" className="text-blue-400 hover:underline">Register</a>
        </p>
      </form>
    </div>
  );
}
