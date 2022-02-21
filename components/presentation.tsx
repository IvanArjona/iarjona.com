import Link from 'next/link';

const welcomeMessage = [
  { text: 'console', className: 'text-purple-500' },
  { text: '.' },
  { text: 'log', className: 'text-green-500' },
  { text: '(' },
  { text: '"Hey!"', className: 'text-yellow-400' },
  { text: ')' },
];

const Presentation: React.FC<{}> = () => {
  const welcome = welcomeMessage.map(({ text, className }) => (
    <span className={className} key={text}>
      {text}
    </span>
  ));

  return (
    <section className="px-5 py-10 lg:py-14 lg:px-10 shadow-2xl bg-white dark:bg-gray-900">
      <h1 className="font-mono font-black text-2xl md:text-3xl lg:text-5xl">
        {welcome}
      </h1>
      <p className="text-lg md:text-xl lg:text-xl mb-8 font-bold text-gray-500 dark:text-gray-400 ml-1">
        My name is Iván
      </p>
      <div className="text-sm text-gray-700 font-semibold font-mono">
        <Link href="#contact">
          <a className="px-4 py-1 mr-3 lg:ml-1 inline-block bg-green-200 shadow-green-300/20 shadow-lg border rounded-sm border-green-400  hover:bg-green-300">
            Let&apos;s Talk
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Presentation;
