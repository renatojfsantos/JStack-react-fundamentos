import React, { createContext, useContext } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import useToggleTheme from '../hooks/useToggleTheme';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const { theme, currentTheme, handleToggleTheme } = useToggleTheme();

  return (
    /**
     * O ThemeContext.Provider é o componente que irá prover o contexto para os
     * componentes filhos. O value é o objeto que será compartilhado.
     *
     * O StyledThemeProvider é o componente que irá prover o tema para os
     * componentes estilizados. O theme é o objeto que contém as propriedades
     * do tema.
     */
    <ThemeContext.Provider value={{ theme, currentTheme, handleToggleTheme }}>
      <StyledThemeProvider theme={currentTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
