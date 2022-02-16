import Link from 'next/link';

export default function MobileMenuItem({ href, name, onClose }: { href: string, name: string, onClose: () => any }) {
  return (
    <li key={name} className="p-2 hover:bg-black hover:underline transition-colors duration-500">
      <Link href={href}>
        <a onClick={onClose} className="uppercase text-6xl">
          {name}
        </a>
      </Link>
    </li>
  );
}