import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import './Admin.css';

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const data = await api.login({ username, password });
            if (data.success) {
                localStorage.setItem('isAdmin', 'true'); // Still keep simple check for frontend routes for now
                navigate('/admin/dashboard');
            } else {
                setError(data.message || 'Login failed');
            }
        } catch (err) {
            setError(err.message || 'Login failed');
        }
    };

    return (
        <div className="admin-login-container">
            <div className="login-card">
                <h2>Admin Login</h2>
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="login-input"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="login-input"
                    />
                    {error && <p className="error-msg">{error}</p>}
                    <button type="submit" className="login-btn">Login</button>

                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
