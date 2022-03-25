import { Disclosure, Transition } from '@headlessui/react';
import { INavigation } from '../../types';
import Socials from '../socials';
import CollapsibleNavbarHamburguer from './collapsible-navbar-hamburger';
import CollapsibleNavbarItem from './collapsible-navbar-item';
import ThemeSwitch from './theme-switch';

type Props = {
  navigation: INavigation,
};

const CollapsibleNavbar: React.FC<Props> = ({ navigation }: Props) => (
  <Disclosure>
    {({ open }) => (
      <>
        <div className="relative container mx-auto flex justify-between z-10">
          {open}
          <ThemeSwitch />
          <Disclosure.Button className="p-4">
            <CollapsibleNavbarHamburguer open={open} />
          </Disclosure.Button>
        </div>
        <Transition
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Disclosure.Panel className="absolute top-0 h-screen w-screen bg-amber-500 dark:bg-red-500">
            <div className="pt-24 p-8 h-full flex flex-col justify-between">
              <ul className="flex flex-col gap-8 tall:gap-20 my-auto">
                {navigation.map((item) => (
                  <Disclosure.Button key={item.href}>
                    <CollapsibleNavbarItem key={item.name} item={item} />
                  </Disclosure.Button>
                ))}
              </ul>
              <Socials />
            </div>
          </Disclosure.Panel>
        </Transition>
      </>
    )}
  </Disclosure>
);

export default CollapsibleNavbar;
