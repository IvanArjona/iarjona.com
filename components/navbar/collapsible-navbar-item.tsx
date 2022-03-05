import Link from 'next/link';
import { INavigationItem } from '../../types';

type Props = {
  item: INavigationItem
};

const CollapsibleNavbarItem: React.FC<Props> = ({ item }: Props) => (
  <li>
    <Link href={item.href}>
      <a
        className="text-3xl text-white hover:underline underline-offset-2 decoration-purple-500 tracking-wide px-3 py-2 rounded-md font-medium"
      >
        {item.name}
      </a>
    </Link>
  </li>
);

export default CollapsibleNavbarItem;