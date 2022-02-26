import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import { INavigation } from '../../types';
import Socials from '../socials';
import CollapsibleNavbarItem from './collapsible-navbar-item';
import ThemeSwitch from './theme-switch';

type Props = {
  navigation: INavigation,
};

const CollapsibleNavbar: React.FC<Props> = ({ navigation }: Props) => {
  const [isOpen, isOpenSet] = useState(false);

  const swapNavbar = () => {
    isOpenSet(!isOpen);
  };

  const Icon = isOpen ? XIcon : MenuIcon;

  return (
    <>
      <div className="fixed container text-right text-white z-50">
        <ThemeSwitch />
        <button
          type="button"
          onClick={swapNavbar}
          className="p-4 self-end"
        >
          <Icon className="h-12 w-12" aria-hidden="true" />
        </button>
      </div>
      <div className={`h-screen w-screen fixed z-40 py-20 bg-red-500 ${isOpen ? '' : 'hidden'}`}>
        <div className="m-4 h-full flex flex-col justify-between">
          <ul className="flex flex-col gap-8">
            {navigation.map((item) => <CollapsibleNavbarItem key={item.name} item={item} />)}
          </ul>
          <Socials />
        </div>
      </div>
    </>
  );
};

export default CollapsibleNavbar;
