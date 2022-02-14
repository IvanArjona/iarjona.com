import { useTheme } from 'next-themes'
import { SunIcon } from '@heroicons/react/outline'
import { MoonIcon } from '@heroicons/react/outline'

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const Icon = theme === 'dark' ? MoonIcon : SunIcon;

  return (
    <button
      type="button"
      className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition duration-300"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <span className="sr-only">Change theme</span>
      <Icon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
}
