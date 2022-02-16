import { useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import { XIcon } from '@heroicons/react/outline'
import Link from 'next/link';

export default function MobileMenu({ show, navigation, onClose }: {
  show: boolean, navigation: { name: string, href: string }[], onClose: () => any
}) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!isBrowser) {
    return null;
  }

  const navigationLinks = navigation.map(({ name, href }) => (
    <li key={name} className="p-2 hover:bg-black hover:underline transition-colors duration-500">
      <Link href={href}>
        <a className="uppercase text-6xl">
          {name}
        </a>
      </Link>
    </li>
  ));

  const content = (
    <div className={`fixed top-0 bg-white dark:bg-black h-full w-full p-4 sm:p-6 transition-all delay-150 duration-300 ${show || '-translate-x-full'}`}>
      <div className="bg-purple-500 h-full flex items-center flex-col justify-between">
        <button onClick={onClose} className="p-4 self-end">
          <XIcon className="h-12 w-12" aria-hidden="true" />
        </button>
        <nav className="w-full flex-auto">
          <ul className="h-full flex flex-col items-center justify-around">
            {navigationLinks}
          </ul>
        </nav>
        <div className="bg-gray-300 scale-100 w-full items-center p-8 text-center">
          <span className="uppercase text-xs">Get in touch</span>
        </div>
      </div>
    </div>
  );

  if (isBrowser) {
    return ReactDOM.createPortal(
      content,
      document.getElementById('modal-root') as HTMLElement
    );
  }
  return null;
}