import ThemeSwitch from './theme-switch';
import FixedNavbarItem from './fixed-navbar-item';
import { INavigation } from '../../types';

type Props = {
  navigation: INavigation,
};

const FixedNavbar: React.FC<Props> = ({ navigation }: Props) => (
  <nav className="fixed w-screen">
    <ul className="h-16 container mx-auto flex gap-8 place-items-center justify-evenly">
      <ThemeSwitch />
      {navigation.map((item) => (
        <FixedNavbarItem key={item.name} item={item} />
      ))}
    </ul>
  </nav>
);

export default FixedNavbar;
