'use client';

import { useContext } from 'react';
import { ThemeContext } from '@/components/landingpage/first-layer/theme-provider';

export function useAppTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useAppTheme must be used within a ThemeContextProvider');
  }

  return context;
}
