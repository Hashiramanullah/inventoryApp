import React, { useEffect, useState } from "react";
import "./navbar.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState("");  // To track user type (admin or not)
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    // Get token from localStorage on mount
    const storedToken = localStorage.getItem("token");
    setToken(storedToken); // Update token state

    // Check if the user is an admin or user
    const userType = localStorage.getItem("userType");
    setUser(userType);  // Update user state with the stored user type
  }, []);

  // Handle logout
  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:9099/logout",
        {},
        {
          withCredentials: true, // Include cookies in the request
        }
      );

      if (response.status === 200) {
        console.log("Logout successful:", response.data);
        // Clear the token and userType from localStorage
        localStorage.removeItem("token");
        localStorage.removeItem("userType");
        setToken(null); // Clear token state
        setUser(""); // Clear user state
        // Redirect to login page after successful logout
        navigate("/login");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  // Optional: Check if user is an admin and redirect accordingly (can be triggered on mount as well)
  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9099/admin",
          {},
          {
            withCredentials: true, // Important to include cookies in cross-origin requests
          }
        );

        if (response.data.success) {
          console.log(response.data.userType);
          localStorage.setItem("userType", response.data.userType);
          setUser(response.data.userType); // Set user type in the state

          if (response.data.userType === "admin") {
            navigate("/admin"); // Redirect to admin page
          } else {
            navigate("/profile"); // Redirect to user profile page
          }
        } else {
          alert(response.data.message || "Login failed");
        }
      } catch (error) {
        console.error("Error during checking admin status:", error);
      }
    };

    if (token) {
      checkAdmin(); // Run admin check only if token exists
    }
  }, [token, navigate]); // Re-run when the token is updated

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
            <Link className="link" to="/profile">
              Profile
            </Link>
          </li>
          {/* Conditionally render Admin link */}
          {user === "admin" && (
            <li>
              <Link className="link" to="/admin">
                Admin
              </Link>
            </li>
          )}
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
