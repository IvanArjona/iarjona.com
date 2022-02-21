import Link from 'next/link';

type Props = {
  href: string,
  name: string,
  onClose: () => unknown
};

const MobileMenuItem: React.FC<Props> = ({ href, name, onClose }: Props) => (
  <li key={name} className="p-4 bg-white dark:bg-black bg-opacity-0 dark:bg-opacity-0 hover:bg-opacity-50 hover:dark:bg-opacity-50 hover:underline transition-colors duration-500">
    <Link href={href}>
      <a
        role="link"
        onClick={onClose}
        onKeyPress={onClose}
        tabIndex={0}
        className="uppercase text-5xl"
      >
        {name}
      </a>
    </Link>
  </li>
);

export default MobileMenuItem;
