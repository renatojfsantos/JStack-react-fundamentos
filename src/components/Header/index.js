import React from 'react';
import { Container } from './styles';
import { useTheme } from '../../contexts/ThemeContext';

export default function Header() {
  const { theme, handleToggleTheme } = useTheme();

  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button type="button" onClick={handleToggleTheme}>
        {theme === 'dark' ? '🌞' : '🌜'}
      </button>
    </Container>
  );
}
