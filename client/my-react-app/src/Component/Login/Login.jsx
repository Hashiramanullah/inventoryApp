import { useState, useEffect } from 'react';
import axios from 'axios';
import './login.css';

export const Login = () => {
    const [password, setPassword] = useState('');
    const [number, setNumber] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    useEffect(() => {
        // Fetch saved numbers from localStorage and load suggestions
        const savedNumbers = JSON.parse(localStorage.getItem('numbers')) || [];
        console.log('Saved numbers from localStorage:', savedNumbers);
        setSuggestions(savedNumbers);

        // Set the first saved number as the default value if available
        if (savedNumbers.length > 0) {
            setNumber(savedNumbers[0]);  // Use the first number as default
        }
    }, []);

    const handleNumberChange = (e) => {
        const value = e.target.value;

        // Ensure the number always starts with '+'
        if (!value.startsWith('+')) {
            setNumber(`${value.replace(/\D/g, '')}`);  // Remove non-numeric characters
        } else {
            setNumber(value);  // Allow numbers and '+'
        }

        setShowSuggestions(true);  // Show suggestions while typing
    };

    const handleNumberSelect = (e) => {
        setNumber(e.target.value);  // Set selected number from dropdown
        setShowSuggestions(false);  // Hide suggestions after selection
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:9099/login', {
                number,
                password
            }, {
                withCredentials: true  // Important to include cookies in cross-origin requests
            });

            if (response.data.success) {
                localStorage.setItem('token', response.data.token);

                // Retrieve previously saved numbers
                let savedNumbers = JSON.parse(localStorage.getItem('numbers')) || [];

                // Add the current number if it's not already in the list
                if (!savedNumbers.includes(response.data.number)) {
                    savedNumbers.push(response.data.number);  // Add new number
                    localStorage.setItem('numbers', JSON.stringify(savedNumbers));  // Save updated list
                }

                console.log(response.data,'ddd');

                // Update suggestions based on the logged-in user
                setSuggestions(savedNumbers);

                // Save user type (admin or user) in localStorage
                localStorage.setItem('userType', response.data.userType);

                if (response.data.userType === 'admin') {
                    window.location.href = '/admin';  // Redirect to admin page
                } else {
                    window.location.href = '/profile';  // Redirect to user profile page
                }
            } else {
                // Handle login failure
                alert(response.data.message || 'Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <div className="loginBody">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <label htmlFor="phoneNum">Phone Number</label>
                    <input
                        type="text"
                        name="number"
                        value={number}
                        onChange={handleNumberChange}
                        placeholder="Number"
                        onFocus={() => setShowSuggestions(true)}  // Show dropdown on focus
                    />
                    {suggestions.length > 0 && showSuggestions && (
                        <select
                            size={suggestions.length}  // Number of visible options in the dropdown
                            onChange={handleNumberSelect}  // Capture selection
                            onBlur={() => setShowSuggestions(false)}  // Hide dropdown on blur
                            style={{ display: 'block' }}  // Ensure dropdown is visible
                            value={number}  // Bind the selected number to input value
                        >
                            {suggestions.map((suggestion) => (
                                <option key={suggestion} value={suggestion}>
                                    {suggestion}
                                </option>
                            ))}
                        </select>
                    )}
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
                <button type="submit">Login</button>
            </form>
        </div>
    );
};
