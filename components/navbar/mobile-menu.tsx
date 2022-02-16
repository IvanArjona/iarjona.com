import { XIcon } from '@heroicons/react/outline'
import MobileMenuItem from './mobile-menu-item';

export default function MobileMenu({ show, navigation, onClose }: {
  show: boolean, navigation: { name: string, href: string }[], onClose: () => any
}) {
  return (
    <div className={`fixed top-0 bg-white dark:bg-black h-full w-full p-4 sm:p-6 transition-all delay-150 duration-300 ${show || '-translate-x-full'}`}>
      <div className="bg-purple-500 h-full flex items-center flex-col justify-between">
        <button onClick={onClose} className="p-4 self-end">
          <XIcon className="h-12 w-12" aria-hidden="true" />
        </button>
        <nav className="w-full flex-auto">
          <ul className="h-full flex flex-col items-center justify-around">
            {navigation.map(({ name, href }) => (
              <MobileMenuItem name={name} href={href} onClose={onClose} key={name} />
            ))}
          </ul>
        </nav>
        <div className="bg-gray-300 scale-100 w-full items-center p-8 text-center">
          <span className="uppercase text-xs">Get in touch</span>
        </div>
      </div>
    </div>
  );
}
