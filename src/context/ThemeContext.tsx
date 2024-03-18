'use client';

import React, { createContext, useState, useEffect, useMemo } from 'react';

export const ThemeContext = createContext({
  theme: 'light',
  changeTheme: (theme: string) => {},
});

export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState('light');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const localTheme = localStorage.getItem('theme') ?? 'light';
    setTheme(localTheme);
  }, []);

  const changeTheme = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const value = useMemo(() => ({ theme, changeTheme }), [theme, changeTheme]);

  if (!isMounted) return <>Loading...</>;

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
