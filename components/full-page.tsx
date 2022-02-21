import { ChevronDownIcon } from '@heroicons/react/outline';
import Link from 'next/link';

type Props = {
  nextSection?: string,
  children: React.ReactNode
};

function nextSectionButton(nextSection?: string): JSX.Element | null {
  if (!nextSection) {
    return null;
  }

  return (
    <Link href={`#${nextSection}`}>
      <a className="absolute bottom-20 p-10">
        <ChevronDownIcon className="h-12 w-12 font-bold animate-bounce" aria-hidden="true" />
      </a>
    </Link>
  );
}

const FullPage: React.FC<Props> = ({ nextSection, children }: Props) => (
  <div className="flex justify-center items-center h-screen align-middle">
    {children}
    {nextSectionButton(nextSection)}
  </div>
);

FullPage.defaultProps = {
  nextSection: undefined,
};

export default FullPage;
