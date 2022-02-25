import Link from 'next/link';

type Props = {
  href: string,
  name: string
};

const NavbarItem: React.FC<Props> = ({ href, name }: Props) => (
  <li>
    <Link href={href}>
      <a
        className="text-gray-100 hover:underline underline-offset-2 decoration-purple-500 tracking-wide px-3 py-2 rounded-md font-medium"
      >
        {name}
      </a>
    </Link>
  </li>
);

export default NavbarItem;
