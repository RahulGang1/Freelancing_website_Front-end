import React, { useState } from 'react';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [animation, setAnimation] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false);
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }, 2000);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      {isFormVisible && (
        <form
          onSubmit={handleSubmit}
          className={`${
            animation ? 'animate-pulse' : ''
          } bg-white p-6 md:p-10 rounded-lg shadow-lg w-full max-w-lg relative`} // Adjusted for responsiveness
        >
          <button
            type="button"
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl w-10 h-10 flex items-center justify-center"
            onClick={() => setIsFormVisible(false)}
          >
            &times;
          </button>

          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">Signup</h1>
          
          <InputField
            id="username"
            label="Username"
            type="text"
            value={username}
            onChange={setUsername}
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
            setShowPassword={setShowPassword}
          />
          
          <PasswordField
            id="confirmPassword"
            label="Confirm Password"
            value={confirmPassword}
            onChange={setConfirmPassword}
            showPassword={showConfirmPassword}
            setShowPassword={setShowConfirmPassword}
          />

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-4"
            type="submit"
          >
            Signup
          </button>
        </form>
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

const PasswordField = ({ id, label, value, onChange, showPassword, setShowPassword }) => (
  <div className="mb-4 relative">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
      {label}
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id={id}
      type={showPassword ? 'text' : 'password'}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
    <button
      className="absolute right-2 top-8 text-gray-700 hover:text-gray-900 transition duration-300"
      type="button"
      onClick={() => setShowPassword((prev) => !prev)}
    >
      {showPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
    </button>
  </div>
);

const EyeOpenIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M10 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
    <path
      fillRule="evenodd"
      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"
    />
  </svg>
);

const EyeClosedIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M10 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
    <path
      fillRule="evenodd"
      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"
    />
  </svg>
);

export default SignupPage;
