import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const ThemeToggle = () => {
  const theme = useContext(ThemeContext);
  const toggleTheme = (newMode) => {
    if (newMode === 'system') {
      localStorage.removeItem('theme');
    } else {
      localStorage.setItem('theme', JSON.stringify({ ...theme, mode: newMode }));
    }
    window.location.reload();
  };

  return (
    <div>
      <button onClick={() => toggleTheme('light')}>Light</button>
      <button onClick={() => toggleTheme('dark')}>Dark</button>
      <button onClick={() => toggleTheme('system')}>System</button>
    </div>
  );
};
export default ThemeToggle;