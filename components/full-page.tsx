import { ChevronDownIcon } from '@heroicons/react/solid';
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
      <a
        className="absolute bottom-2 md:bottom-10 lg:bottom-20 p-2"
        aria-label={nextSection}
      >
        <ChevronDownIcon className="h-20 w-20 animate-bounce" aria-hidden="true" />
      </a>
    </Link>
  );
}

const FullPage: React.FC<Props> = ({ nextSection, children }: Props) => (
  <div className="flex justify-center items-center h-screen">
    {children}
    {nextSectionButton(nextSection)}
  </div>
);

FullPage.defaultProps = {
  nextSection: undefined,
};

export default FullPage;
