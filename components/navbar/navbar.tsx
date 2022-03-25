import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import { INavigation } from '../../types';
import FixedNavbar from './fixed-navbar';
import CollapsibleNavbar from './collapsible-navbar';

const Navbar: React.FC<{}> = () => {
  const { t } = useTranslation();
  const [showCollapsibleNavbar, setShowCollapsibleNavbar] = useState(false);
  const [innerWidth, setInnerWidth] = useState(0);

  const navigation = [
    { name: t('experience'), href: '#experience' },
    { name: t('projects'), href: '#projects' },
    { name: t('skills'), href: '#skills' },
    { name: t('contact'), href: '#contact' },
  ] as INavigation;

  const handleScroll = () => {
    const position = window.pageYOffset;
    setShowCollapsibleNavbar(position > 80);
  };

  const handleResize = () => {
    setInnerWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    setInnerWidth(window.innerWidth);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <nav className="absolute w-screen hidden md:block">
        <FixedNavbar navigation={navigation} />
      </nav>
      <Transition
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        show={innerWidth < 768 || showCollapsibleNavbar}
      >
        <nav className="fixed z-40 w-screen">
          <CollapsibleNavbar navigation={navigation} />
        </nav>
      </Transition>
    </>
  );
};

export default Navbar;
