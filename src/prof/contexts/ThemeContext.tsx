// src/prof/contexts/ThemeContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Définir le type du contexte
type ThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
};

// Créer le contexte
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Hook personnalisé pour utiliser le thème
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Composant Provider
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Charger le thème depuis localStorage ou utiliser 'dark' par défaut
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    // Si rien n'est sauvegardé, on utilise le thème sombre par défaut
    return savedTheme === 'light' ? false : true;
  });

  // Appliquer le thème au chargement et à chaque changement
  useEffect(() => {
    // Sauvegarder dans localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    // Ajouter/retirer la classe 'dark' sur <html>
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // Fonction pour basculer le thème
  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};