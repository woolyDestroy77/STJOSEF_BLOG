import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TextInput, Label, Button, Alert } from 'flowbite-react';

export default function SignIn() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    setErrorMessage(''); // Clear error message when user starts typing again
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return setErrorMessage('Please fill out all the fields.');
    }
    setMessage('');
    setError('');
    setLoading(true); // Show loading spinner

    try {
      const response = await fetch('http://localhost:3001/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Signin failed');

      setMessage('Signin successful!'); // Show success message

      // Save JWT token to localStorage or state for further authentication (optional)
      localStorage.setItem('token', data.token);

      // Redirect to dashboard or home page after successful sign-in
      setTimeout(() => {
        navigate('/'); // Navigate to a protected page (e.g., dashboard)
      }, 1500); // Redirect after 1.5 seconds
    } catch (err) {
      console.error(err.message);
      setErrorMessage(err.message || 'An error occurred. Please try again later.');
    } finally {
      setLoading(false); // Hide loading spinner
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-10 bg-gray-50">
      <div className="flex p-6 max-w-4xl mx-auto flex-col md:flex-row md:items-center gap-8 bg-white shadow-md rounded-lg">
        {/* Left section */}
        <div className="md:w-1/2 text-center md:text-left">
          <Link
            to="/"
            className="font-extrabold dark:text-gray-900 text-4xl md:text-5xl mb-2 inline-block"
          >
            <span className="px-3 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              ST.Josef
            </span>
            News
          </Link>
          <p className="text-gray-700 text-base md:text-lg mt-3">
            Sign in to access your account and stay updated with the latest news and announcements.
          </p>
        </div>

        {/* Right section */}
        <div className="w-full md:w-1/2">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div>
              <Label className="text-lg font-semibold" value="Your email" />
              <TextInput
                type="email"
                placeholder="Email"
                id="email"
                className="h-12 mt-2"
                onChange={handleChange}
                value={formData.email}
              />
            </div>
            <div>
              <Label className="text-lg font-semibold" value="Your password" />
              <TextInput
                type="password"
                placeholder="Password"
                id="password"
                className="h-12 mt-2"
                onChange={handleChange}
                value={formData.password}
              />
            </div>
            <Button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded"
            >
              Sign In
            </Button>
          </form>

          {/* Success Message */}
          {message && (
            <div className="mt-4 flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 11.586 7.707 10.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium">{message}</span>
            </div>
          )}

          {/* Error Message */}
          {errorMessage && (
            <div className="mt-4 flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-7.293-2.707a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 001.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586 10.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium">{errorMessage}</span>
            </div>
          )}

          {/* Loading Spinner */}
          {loading && (
            <div className="flex justify-center mt-4">
              <div className="w-16 h-16 border-t-4 border-b-4 border-purple-500 rounded-full animate-spin"></div>
            </div>
          )}

          <div className="flex justify-center gap-2 text-base mt-5">
            <span>Don't have an account?</span>
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}