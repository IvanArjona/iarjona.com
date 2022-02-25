import ThemeSwitch from './theme-switch';
import NavbarItem from './navbar-item';
import { INavigation } from '../../types';

type Props = {
  navigation: INavigation,
};

const FixedNavbar: React.FC<Props> = ({ navigation }: Props) => (
  <nav className="fixed w-screen">
    <ul className="h-16 container mx-auto flex gap-8 place-items-center justify-evenly">
      <ThemeSwitch />
      {navigation.map(({ name, href }) => (
        <NavbarItem key={name} name={name} href={href} />
      ))}
    </ul>
  </nav>
);

export default FixedNavbar;
