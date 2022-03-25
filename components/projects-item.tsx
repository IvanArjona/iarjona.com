/* eslint-disable @next/next/no-img-element */
import { ExternalLinkIcon } from '@heroicons/react/outline';
import { IProjectItem } from '../types';
import GithubIcon from '../assets/icons/github.svg';

type Props = {
  item: IProjectItem,
  index: number
};

const ProjectItem: React.FC<Props> = ({ item, index }: Props) => {
  const tags = item.tags.map((tag) => (
    <span key={tag} className="font-mono bg-yellow-400 dark:bg-gray-600 px-3 py-1 rounded-sm">
      {tag}
    </span>
  ));

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-14">
      <aside className="lg:max-w-1/2 w-fit shrink">
        <a href={item.link || item.github} className="block mb-4 max-h-80 w-fit rounded-sm">
          <img src={item.image} alt={item.name} className="max-h-[inherit] w-auto border-8 border-purple-500 dark:border-yellow-500" />
        </a>
        <div className="flex items-center justify-center gap-4 font-mono">
          <a href={item.github} target="_blank" className="flex items-center gap-3 shadow-md rounded-lg px-5 py-3 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 transition-colors dark:bg-yellow-500 dark:hover:bg-yellow-700 dark:focus:ring-purple-900" rel="noreferrer">
            Github
            <GithubIcon className="h-6 w-6 fill-white" />
          </a>
          {item.link ? (
            <a href={item.link} target="_blank" className="flex items-center gap-3 shadow-md rounded-lg px-5 py-3 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 transition-colors dark:bg-yellow-500 dark:hover:bg-yellow-700 dark:focus:ring-purple-900" rel="noreferrer">
              Link
              <ExternalLinkIcon className="h-6 w-6" />
            </a>
          ) : ''}
        </div>
      </aside>
      <div className={`flex-1 ${index % 2 === 0 ? '' : 'md:order-first'}`}>
        <h3 className="text-2xl lg:text-3xl font-bold font-mono">{item.name}</h3>
        <hr className="mt-2 mb-4 border-gray-200 dark:border-gray-500" />
        {item.description.map((paragraph) => (
          <p key={paragraph} className="leading-relaxed">
            {paragraph}
          </p>
        ))}
        <div className="flex flex-row gap-4 mt-4">
          {tags}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
