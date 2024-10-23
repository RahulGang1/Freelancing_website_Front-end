import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirecting

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate hook

  const handleLogin = async () => {
    try {
      const response = await fetch('https://freelancing-website-eta.vercel.app/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setLoginFailed(false);
        // Show success popup and redirect to Home page
        alert('Login successful! Redirecting to Home page...');
        navigate('/home'); // Redirect to Home page after success
      } else {
        setLoginFailed(true);
        console.error('Login failed:', data.message || 'Invalid credentials');
      }
    } catch (error) {
      setLoginFailed(true);
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              value={email}
              onChange={({ target: { value } }) => setEmail(value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={({ target: { value } }) => setPassword(value)}
            />
            <button
              className="text-gray-700 hover:text-gray-900 transition duration-300"
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          {loginFailed && (
            <p className="text-red-500 text-xs italic mb-4">Invalid email or password</p>
          )}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};  

export default LoginPage;
