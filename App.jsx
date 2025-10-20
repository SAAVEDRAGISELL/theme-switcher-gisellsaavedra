import { useState } from 'react';
import ThemeCard from './ThemeCard';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'app dark' : 'app light'}>
      <h1>Theme Switcher</h1>
      <ThemeCard />
      <button onClick={toggleTheme} className="toggle-btn">
        Cambiar a {darkMode ? 'Modo Claro ☀️' : 'Modo Oscuro 🌙'}
      </button>
    </div>
  );
}

export default App;
