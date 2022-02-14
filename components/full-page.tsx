import { ChevronDownIcon } from '@heroicons/react/outline'
import Link from 'next/link';

export default function FullPage({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-blue-300 flex justify-center items-center h-screen align-middle">
      {children}
      <Link href="#">
        <a className="absolute bottom-20 p-10">
          <ChevronDownIcon className="h-12 w-12 font-bold" aria-hidden="true" />
        </a>
      </Link>
    </div>
  );
}
