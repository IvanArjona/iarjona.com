import { XIcon } from '@heroicons/react/outline';
import MobileMenuItem from './mobile-menu-item';
import MobileMenuSocial from './mobile-menu-social';
import { INavigation } from '../../types';

type Props = {
  show: boolean,
  navigation: INavigation,
  onClose: () => any
};

const MobileMenu: React.FC<Props> = ({ show, navigation, onClose }: Props) => (
  <div className={`fixed top-0 z-10 h-full w-full flex border-[1rem] border-orange-500 dark:border-black items-center flex-col justify-between from-orange-300 to-orange-100 bg-gradient-to-br dark:from-indigo-800 dark:to-teal-800 transition-all delay-50 duration-700 ${show || 'invisible opacity-0'}`}>
    <button
      type="button"
      onClick={onClose}
      className="p-4 self-end"
    >
      <XIcon className="h-12 w-12" aria-hidden="true" />
    </button>
    <nav className="w-full flex-auto my-8 sm:my-12">
      <ul className="h-full flex flex-col items-center justify-around">
        {navigation.map(({ name, href }) => (
          <MobileMenuItem name={name} href={href} onClose={onClose} key={name} />
        ))}
      </ul>
    </nav>
    <MobileMenuSocial />
  </div>
);

export default MobileMenu;
