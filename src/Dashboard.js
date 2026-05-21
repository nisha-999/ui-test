import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Get user from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      // If no user found, redirect to login
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-box">
        <div className="dashboard-header">
          <h1>Dashboard</h1>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
        
        <div className="welcome-section">
          <div className="avatar">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <h2>Welcome, {user.name}!</h2>
          <p className="user-info">Username: {user.username}</p>
        </div>

        <div className="info-card">
          <h3>🎉 Login Successful</h3>
          <p>You have successfully logged into the system.</p>
          <p className="timestamp">
            Logged in at: {new Date().toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
