import React, { useState } from 'react';
import './Header.css';

const Header = ({ toggleSidebar }) => {
  const [showLogout, setShowLogout] = useState(false);
  
  return (
    <header className="header">
      <div className="header-width">
        <button className="menu-toggle" onClick={toggleSidebar} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <div className="logo-container">
          <div className="logo">HCS</div>
          <div className="brand-name">HUSSAIN CLEANING</div>
        </div>
        
        <nav className="nav-tabs">
          {/* <button className="tab-button">Home</button>
          <button className="tab-button">Services</button> */}
        </nav>
        
        <div className="search-container">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
          />
        </div>
        
        <div className="user-actions">
          <button className="icon-button cart-button" aria-label="Shopping cart">
            🛒
          </button>
          <button 
            className="icon-button" 
            onClick={() => setShowLogout(prev => !prev)}
            aria-label="User menu"
          >
            👤
          </button>
          {showLogout && (
            <div className="logout-dropdown">
              <button className="logout-button">Logout</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;