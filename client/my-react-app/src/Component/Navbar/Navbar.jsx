import React, { useEffect, useState } from 'react';
import './navbar.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [token, setToken] = useState(null);
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    // Get token from localStorage on mount
    const storedToken = localStorage.getItem('token');
    setToken(storedToken); // Update token state
  }, []);

  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:8989/logout', {}, {
        withCredentials: true // Include cookies in the request
      });

      if (response.status === 200) {
        console.log('Logout successful:', response.data);
        // Clear the token from localStorage
        localStorage.removeItem('token');
        setToken(null); // Clear token state
        // Redirect to login page after successful logout
        navigate('/login');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  const auth = () => {
    if (!token) {
      window.location = '/login';
    } else {
      window.location = '/profile';
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <input type="checkbox" name="" id="" />
        <div className="hamburger-lines">
          <span className="line line1" />
          <span className="line line2" />
          <span className="line line3" />
        </div>
        <ul className="menu-items">
          <li>
            <Link className="link" onClick={auth} to="/profile">
              Profile
            </Link>
          </li>
          <li>
            {token ? (
              // Show Logout button if token is present
              <Link className="link" onClick={handleLogout} to="#">
                Logout
              </Link>
            ) : (
              // Show Login button if token is absent
              <Link className="link" to="/login">
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
