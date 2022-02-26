import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';

const ThemeSwitch: React.FC<{}> = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const Icon = theme === 'dark' ? MoonIcon : SunIcon;

  useEffect(() => setMounted(true), []);

  const switchTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) {
    return null;
  }

  return (
    <button
      type="button"
      className="p-4"
      onClick={switchTheme}
    >
      <span className="sr-only">Change theme</span>
      <Icon className="h-10 w-10" aria-hidden="true" />
    </button>
  );
};

export default ThemeSwitch;
