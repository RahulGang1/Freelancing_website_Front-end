import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const SignupPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('https://freelancing-website-eta.vercel.app/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setErrorMessage(''); // Clear previous error messages
        setShowSuccessPopup(true);
        
        // Redirect to home page after a successful signup
        navigate('/'); // Change this to your actual home page route
      } else {
        setErrorMessage(data.message || 'Registration failed');
      }
    } catch (error) {
      setErrorMessage('An error occurred during registration');
      console.error('Error:', error);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 md:p-10 rounded-lg shadow-lg w-full max-w-lg"
      >
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">Signup</h1>

        {errorMessage && (
          <p className="text-red-500 text-xs italic mb-4">{errorMessage}</p>
        )}

        <InputField
          id="name"
          label="Name"
          type="text"
          value={name}
          onChange={setName}
        />

        <InputField
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={setEmail}
        />

        <PasswordField
          id="password"
          label="Password"
          value={password}
          onChange={setPassword}
          showPassword={showPassword}
          toggleShowPassword={() => setShowPassword((prev) => !prev)}
        />

        <PasswordField
          id="confirmPassword"
          label="Confirm Password"
          value={confirmPassword}
          onChange={setConfirmPassword}
          showPassword={showConfirmPassword}
          toggleShowPassword={() => setShowConfirmPassword((prev) => !prev)}
        />

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-4"
          type="submit"
        >
          Signup
        </button>
      </form>

      {showSuccessPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <h2 className="text-xl font-bold mb-4">Signup Successful!</h2>
            <p className="mb-4">You have successfully signed up as a user.</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setShowSuccessPopup(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const InputField = ({ id, label, type, value, onChange }) => (
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
      {label}
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id={id}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

const PasswordField = ({ id, label, value, onChange, showPassword, toggleShowPassword }) => (
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
      {label}
    </label>
    <div className="relative">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={id}
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button
        type="button"
        onClick={toggleShowPassword}
        className="absolute inset-y-0 right-0 flex items-center pr-3"
      >
        {showPassword ? 'Hide' : 'Show'}
      </button>
    </div>
  </div>
);

export default SignupPage;
