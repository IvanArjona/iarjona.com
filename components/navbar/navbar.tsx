import { useTranslation } from 'next-export-i18n';
import { INavigation } from '../../types';
import FixedNavbar from './fixed-navbar';
import CollapsibleNavbar from './collapsible-navbar';

const Navbar: React.FC<{}> = () => {
  const { t } = useTranslation();

  const navigation = [
    { name: t('experience'), href: '#experience' },
    { name: t('skills'), href: '#skills' },
    { name: t('projects'), href: '#projects' },
    { name: t('contact'), href: '#contact' },
  ] as INavigation;

  return (
    <>
      <div className="absolute w-screen hidden md:block">
        <FixedNavbar navigation={navigation} />
      </div>
      <div className="fixed z-40 w-screen md:hidden">
        <CollapsibleNavbar navigation={navigation} />
      </div>
    </>
  );
};

export default Navbar;
