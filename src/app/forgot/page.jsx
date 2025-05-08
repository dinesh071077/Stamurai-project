'use client';

import { useState } from 'react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleReset = (e) => {
    e.preventDefault();
    if (!email) {
      alert('Please enter your email');
      return;
    }
    // Simulate password reset process
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <form
        onSubmit={handleReset}
        className="bg-[#111827] p-8 rounded-xl shadow-lg w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>

        {!submitted ? (
          <>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1 text-sm font-semibold">
                Enter your registered email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 mt-2 rounded bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold hover:opacity-90 transition"
            >
              Create New Password
            </button>
          </>
        ) : (
          <div className="text-center text-green-400 font-medium">
            A password reset link has been sent to <br />
            <span className="text-white font-semibold">{email}</span>
          </div>
        )}
      </form>
    </div>
  );
}
