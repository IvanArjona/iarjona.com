/* eslint-disable @next/next/no-img-element */
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { IExperienceItem } from '../types';

type Props = {
  item: IExperienceItem,
  index: number
};

const formatDates = (item: IExperienceItem, locale?: string, defaultDate?: string): string => {
  const dateTimeFormat = new Intl.DateTimeFormat(locale, {
    month: 'long',
    year: 'numeric',
  });

  return [
    dateTimeFormat.format(new Date(item.from)),
    item.to ? dateTimeFormat.format(new Date(item.to)) : defaultDate,
  ].join(' - ');
};

const ExperienceItem: React.FC<Props> = ({ item, index }: Props) => {
  const { locale } = useRouter();
  const { t } = useTranslation();
  const dates = formatDates(item, locale, t('now'));

  return (
    <div className={`my-12 flex justify-between items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
      <div className="order-1 w-5/12 hidden lg:block" />
      <div className="z-20 flex items-center order-1 bg-purple-800 dark:bg-yellow-400 shadow-xl w-8 h-8 rounded-full">
        <div className="mx-auto font-semibold text-lg text-white" />
      </div>
      <div
        className="order-1 bg-gray-100 dark:bg-transparent rounded-lg shadow-xl w-10/12 lg:w-5/12 px-8 py-6"
        data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}
      >
        <div className="float-right m-2 p-2 rounded dark:bg-gray-200">
          <img src={item.logo} height={64} width={64} alt={item.company} />
        </div>
        <time className="text-sm capita text-purple-500 dark:text-yellow-300">
          {dates}
        </time>
        <h3 className="mb-3 font-bold text-lg lg:text-2xl text-gray-800 dark:text-gray-100">
          {item.title}
          <span className="block font-semibold">
            {`${t('at')} ${item.company}`}
          </span>
        </h3>
        <p className="text-sm leading-snug tracking-wide text-opacity-100">
          {item.description}
        </p>
        <a href={item.website} className="mt-2 mr-3 text-sm float-right text-purple-600 dark:text-yellow-300">
          {item.company}
        </a>
      </div>
    </div>
  );
};

export default ExperienceItem;
