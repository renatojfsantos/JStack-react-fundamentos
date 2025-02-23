import { useState, useMemo, useEffect } from 'react';
import themes from '../styles/themes';

export default function useToggleTheme() {
  /**
   * Inicia o estado com o valor salvo no localStorage ou "dark"
   */
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  /**
   * Memoriza o tema atual para evitar cálculos desnecessários
   */
  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  });

  /**
   * Função que alterna o tema e salva a nova escolha no localStorage
   */
  function handleToggleTheme() {
    setTheme(prevState => {
      const newTheme = prevState === 'dark' ? 'light' : 'dark';

      localStorage.setItem('theme', newTheme);

      return newTheme;
    });
  };

  /**
   * Efeito que carrega o tema salvo no localStorage ao montar o componente
   */
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  return { theme, currentTheme, handleToggleTheme };
}
