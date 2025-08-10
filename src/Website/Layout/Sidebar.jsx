import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <div className="user-profile">
          <div className="avatar">👤</div>
          <div className="user-info">
            <div className="user-name">Hello, User</div>
            <div className="user-location">📍 Chandigarh, India</div>
          </div>
        </div>
      </div>
      
      <nav className="sidebar-nav">
        <ul>
          <li><a href="#" className="nav-link">Bookings</a></li>
          <li><a href="#" className="nav-link">Profile</a></li>
        </ul>
      </nav>
      
      <div className="sidebar-footer">
        <button className="logout-btn">Logout</button>
      </div>
    </aside>
  );
};

export default Sidebar;