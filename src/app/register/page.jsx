

'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RegisterForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store user data in localStorage
    localStorage.setItem('user', JSON.stringify({ username, email, password }));

    // Simulate successful registration
    alert('Registration successful');
    window.location.href = '/login'
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
      <form onSubmit={handleSubmit} className="bg-[#111827] p-8 rounded-xl shadow-lg w-full max-w-sm text-white">
        <h2 className="text-3xl font-bold text-center mb-6 tracking-wide">Register</h2>

        {/* Username */}
        <div className="mb-4">
          <input
            type="text"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <input
            type="email"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <input
            type="password"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Register Button */}
        <button
          type="submit"
          className="w-full py-2 rounded bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold hover:opacity-90 transition"
        >
          Register
        </button>

        {/* Login Link */}
        <p className="mt-4 text-center text-sm">
          Already have an account?{' '}
          <Link href="/login" className="text-blue-400 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
