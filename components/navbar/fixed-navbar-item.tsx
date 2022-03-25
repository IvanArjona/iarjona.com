import Link from 'next/link';
import { INavigationItem } from '../../types';

type Props = {
  item: INavigationItem,
  index: number
};

const FixedNavbarItem: React.FC<Props> = ({ item, index }: Props) => (
  <li>
    <Link href={item.href}>
      <a
        className="hover:underline underline-offset-2 decoration-purple-500 tracking-wide px-3 py-2 rounded-md font-medium"
        data-aos="zoom-in"
        data-aos-delay={`${index + 1}00`}
        data-aos-duration="700"
      >
        {item.name}
      </a>
    </Link>
  </li>
);

export default FixedNavbarItem;
