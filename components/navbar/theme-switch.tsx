import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';

const ThemeSwitch: React.FC<{}> = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation('common');

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
      className="p-4 text-white"
      onClick={switchTheme}
      title={t('switch-theme')}
    >
      <span className="sr-only">{t('switch-theme')}</span>
      <Icon
        className="h-10 w-10 hover:opacity-80 hover:scale-125 transition ease transform duration-300"
        aria-hidden="true"
      />
    </button>
  );
};

export default ThemeSwitch;
