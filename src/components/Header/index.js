import React from 'react';
import { Container } from './styles';
import { useTheme } from '../../contexts/ThemeContext';
import { useHistory } from 'react-router-dom';

export default function Header() {
  const { theme, handleToggleTheme } = useTheme();
  const history = useHistory();
  console.log("🚀 ~ Header ~ history:", history)

  const handleNavigate = () => {
    history.push('/');
  }

  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button type="button" onClick={handleNavigate} style={{ color: '#FFF' }}>
        Navegar
      </button>
      <button type="button" onClick={handleToggleTheme}>
        {theme === 'dark' ? '🌞' : '🌜'}
      </button>
    </Container>
  );
}
