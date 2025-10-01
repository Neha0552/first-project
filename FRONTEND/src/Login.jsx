import { NavLink } from "react-router-dom";
import { useState } from "react";
import './login.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:9253';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/v1/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Login failed. Please try again.');
        setIsLoading(false);
        return;
      }

      // Store token if provided
      if (data.token) {
        sessionStorage.setItem('authToken', data.token);
      }

      alert('USERNAME STORED SUCCESSFULLY ✅');
      setUsername('');
      setPassword('');

    } catch (error) {
      console.error('Login error:', error);
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="one">
      <div className="login-container">
        <h1><i className="fa-solid fa-users fa-xl" /></h1>

        <form onSubmit={handleSubmit}>
          {error && (
            <div style={{
              color: '#dc3545',
              backgroundColor: '#f8d7da',
              padding: '10px',
              borderRadius: '5px',
              marginBottom: '15px',
              border: '1px solid #f5c6cb'
            }}>
              {error}
            </div>
          )}

          <input
            type="text"
            placeholder="Username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            disabled={isLoading}
            required
          /><br />

          <input
            type="password"
            placeholder="Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            disabled={isLoading}
            required
          /><br /><br />

          <button id="submit" type="submit" disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Submit'}
          </button>
          <hr />
        </form>
      </div>

      <br /><br />

      <NavLink
        id="back"
        to="/"
        style={{
          display: 'inline-block',
          padding: '10px 20px',
          fontSize: '30px',
          background: 'burlywood',
          textDecoration: 'none',
          color: 'black',
          fontFamily: 'cursive',
          borderRadius: '5px',
        }}
      >
        GO BACK!!!
      </NavLink>
    </div>
  );
}