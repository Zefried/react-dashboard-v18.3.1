import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import './MainLayout.css';

const MainLayout = ({ children }) => {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const toggleSidebar = () => setSidebarVisible(prev => !prev);
    const closeSidebar = () => setSidebarVisible(false);

    return (
        <div className="main-layout">
            <Header toggleSidebar={toggleSidebar} />
            {sidebarVisible && <div className="overlay" onClick={closeSidebar}></div>}

            <Sidebar isOpen={sidebarVisible} />

            <div className="main-content">{children}</div>
        </div>
    );
};

export default MainLayout;
