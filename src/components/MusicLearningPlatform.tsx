import { useState } from 'react';
import { Link } from 'react-router-dom';
import './MusicLearningPlatform.css';

const MusicLearningPlatform = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <header>
        <h1>Melody Masters Platform</h1>
        <button onClick={toggleDarkMode}>
          {darkMode ? '☀️' : '🌙'}
        </button>
      </header>
      <main>
        <h2>Welcome to the Learning Platform</h2>
        <p>Start your musical journey today!</p>
        <Link to="/">Back to Home</Link>
      </main>
    </div>
  );
};

export default MusicLearningPlatform;