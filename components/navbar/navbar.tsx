import { INavigation } from '../../types';
import FixedNavbar from './fixed-navbar';
import CollapsableNavbar from './collapsable-navbar';

const navigation = [
  { name: 'About', href: '#home' },
  { name: 'Experience', href: '#' },
  { name: 'Projects', href: '#' },
  { name: 'Contact', href: '#' },
] as INavigation;

const Navbar: React.FC<{}> = () => (
  <>
    <div className="hidden md:block">
      <FixedNavbar navigation={navigation} />
    </div>
    <div className="md:hidden">
      <CollapsableNavbar navigation={navigation} />
    </div>
  </>
);

export default Navbar;
