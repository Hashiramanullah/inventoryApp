import React, { useState } from 'react';
import axios from 'axios';
import './register.css';

export const Register = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:8989/register', { password, name, number });
      console.log(response);

      if (response.data.success) {
        console.log('Registration successful, token:', response.data.token);
      
        // Temporarily comment out the redirect for debugging
        // window.location.href = '/profile';
      }
      console.log(response.data);  // Log the response data for debugging

      if (response.data.success) {
        // Optionally store the token in localStorage if needed
        localStorage.setItem('newCookie','hello new cookie')
        localStorage.setItem('token', response.data.token);
  
        // Redirect to profile page
        console.log('kewrjkwer',response.data.token);
        
        // window.location.href = '/profile';
      }
   
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className="loginBody">
    <h1>Register</h1>
    <form onSubmit={handleSubmit}> {/* Attach the handleSubmit function here */}
      <div className="row">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="row">
        <label htmlFor="phoneNum">Phone Number</label>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="+923500000"
        />
      </div>
      <div className="row">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
  );
};
