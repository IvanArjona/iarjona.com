import Link from 'next/link';
import ThemeSwitch from './theme-switch';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-gray-800/80 dark:bg-blue-800/80">
      <div>
        Name
      </div>
      <nav>
        <ul className="flex items-center gap-8">
          <li>
            <Link href="#">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>Experience</a>
            </Link>
          </li>
          <li>
            <ThemeSwitch />
          </li>
        </ul>
      </nav>
    </header>
  );
}