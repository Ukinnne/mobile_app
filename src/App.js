import React, { useState } from 'react';
import Navigation from './components/Navigation';
import AuthModal from './components/AuthModal';
import './App.css';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(true);

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  return (
    <div className="App">
      <Navigation />
      {isAuthModalOpen && <AuthModal onClose={closeAuthModal} />}
    </div>
  );
}

export default App;