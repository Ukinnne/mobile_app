import React, { useState } from 'react';
import '../App.css';

const Navigation = () => {
  const [activeButton, setActiveButton] = useState('home'); // По умолчанию активна кнопка Home

  const buttons = [
    { id: 'search', icon: 'svg/search-svgrepo-com.svg', alt: 'Search' },
    { id: 'home', icon: 'svg/home-svgrepo-com.svg', alt: 'Home' },
    { id: 'profile', icon: 'svg/profile-svgrepo-com.svg', alt: 'Profile' },
  ];

  return (
    <div id="main_buttons_box">
      {buttons.map((button) => (
        <button
          key={button.id}
          className={`nav-button ${activeButton === button.id ? 'active' : ''}`}
          onClick={() => setActiveButton(button.id)}
        >
          <img src={button.icon} alt={button.alt} />
        </button>
      ))}
    </div>
  );
};

export default Navigation;