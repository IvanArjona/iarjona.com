import Link from 'next/link';

export default function NavbarItem({ href, name }: { href: string, name: string }) {
  return (
    <Link href={href} key={name}>
      <a className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">{name}</a>
    </Link>
  );
}