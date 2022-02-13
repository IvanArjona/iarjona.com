import { useTheme } from 'next-themes'
import { SunIcon } from '@heroicons/react/outline'
import { MoonIcon } from '@heroicons/react/outline'

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const Icon = theme === 'dark' ? MoonIcon : SunIcon;

  return (
    <button
      className="text-blue-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 rounded-lg p-2"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <Icon className="h-5 w-5" />
    </button>
  );
}
