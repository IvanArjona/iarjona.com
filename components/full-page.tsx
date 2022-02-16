import { ChevronDownIcon } from '@heroicons/react/outline'
import Link from 'next/link';

function nextSectionButton(nextSection?: string) {
  if (!nextSection)
    return;
  return (
    <Link href={`#${nextSection}`}>
      <a className="absolute bottom-20 p-10">
        <ChevronDownIcon className="h-12 w-12 font-bold animate-bounce" aria-hidden="true" />
      </a>
    </Link>
  );
}

export default function FullPage({ nextSection, children }: { nextSection?: string, children: React.ReactNode }) {
  return (
    <div className="bg-blue-300 flex justify-center items-center h-screen align-middle">
      {children}
      {nextSectionButton(nextSection)}
    </div>
  );
}
