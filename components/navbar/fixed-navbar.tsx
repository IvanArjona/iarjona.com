import ThemeSwitch from './theme-switch';
import FixedNavbarItem from './fixed-navbar-item';
import { INavigation } from '../../types';
import LocaleSwitch from './locale-switch';

type Props = {
  navigation: INavigation,
};

const FixedNavbar: React.FC<Props> = ({ navigation }: Props) => (
  <ul className="h-16 container mx-auto flex gap-8 place-items-center justify-evenly">
    {navigation.map((item, index) => (
      <FixedNavbarItem key={item.name} item={item} index={index} />
    ))}
    <li className="flex items-center">
      <LocaleSwitch />
      <ThemeSwitch />
    </li>
  </ul>
);

export default FixedNavbar;
