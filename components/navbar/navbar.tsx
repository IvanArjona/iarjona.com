import { INavigation } from '../../types';
import FixedNavbar from './fixed-navbar';
import CollapsibleNavbar from './collapsible-navbar';

const navigation = [
  { name: 'About', href: '#home' },
  { name: 'Experience', href: '#' },
  { name: 'Projects', href: '#' },
  { name: 'Contact', href: '#' },
] as INavigation;

const Navbar: React.FC<{}> = () => (
  <>
    <div className="fixed w-screen hidden md:block">
      <FixedNavbar navigation={navigation} />
    </div>
    <div className="fixed z-40 w-screen md:hidden">
      <CollapsibleNavbar navigation={navigation} />
    </div>
  </>
);

export default Navbar;
