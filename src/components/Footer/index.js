import React from 'react';
import { Container } from './styles';
import { useTheme } from '../../contexts/ThemeContext';

export default function Footer() {
  const { theme, handleToggleTheme } = useTheme();

  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button type="button" onClick={handleToggleTheme}>
        {theme === 'dark' ? '🌞' : '🌜'}
      </button>
    </Container>
  );
}
