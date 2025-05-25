// components/Navigation.js
import React, { useState } from 'react';
import '../App.css';
import HomePage from './HomePage';
import SearchPage from './SearchPage';
import ProfilePage from './ProfilePage';

const Navigation = () => {
  const [activeButton, setActiveButton] = useState('home');

  const buttons = [
    { id: 'search', icon: 'svg/search-svgrepo-com.svg', alt: 'Search', component: <SearchPage /> },
    { id: 'home', icon: 'svg/home-svgrepo-com.svg', alt: 'Home', component: <HomePage /> },
    { id: 'profile', icon: 'svg/profile-svgrepo-com.svg', alt: 'Profile', component: <ProfilePage /> },
  ];

  const handleButtonClick = (id) => {
    setActiveButton(id);
  };

  const activeComponent = buttons.find(button => button.id === activeButton)?.component;

  return (
    <>
      <div style={{ marginBottom: '90px' }}> {/* Отступ для нижнего меню */}
        {activeComponent}
      </div>
      <div id="main_buttons_box">
        {buttons.map((button) => (
          <button
            key={button.id}
            className={`nav-button ${activeButton === button.id ? 'active' : ''}`}
            onClick={() => handleButtonClick(button.id)}
            aria-pressed={activeButton === button.id}
          >
            <img src={button.icon} alt={button.alt} />
          </button>
        ))}
      </div>
    </>
  );
};

export default Navigation;