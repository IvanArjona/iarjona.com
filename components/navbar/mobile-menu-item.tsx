import Link from 'next/link';

export default function MobileMenuItem({ href, name, onClose }: { href: string, name: string, onClose: () => any }) {
  return (
    <li key={name} className="p-4 bg-white dark:bg-black bg-opacity-0 dark:bg-opacity-0 hover:bg-opacity-50 hover:dark:bg-opacity-50 hover:underline transition-colors duration-500">
      <Link href={href}>
        <a onClick={onClose} className="uppercase text-5xl">
          {name}
        </a>
      </Link>
    </li>
  );
}