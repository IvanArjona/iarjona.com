import Link from 'next/link';

type Props = {
  href: string,
  name: string
};

const NavbarItem: React.FC<Props> = ({ href, name }: Props) => (
  <li>
    <Link href={href}>
      <a
        className="text-gray-700 dark:text-gray-300 hover:bg-gray-700 hover:text-white dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      >
        {name}
      </a>
    </Link>
  </li>
);

export default NavbarItem;
