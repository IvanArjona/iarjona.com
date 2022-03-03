import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import ExperienceItem from './experience-item';
import experienceItems from '../data/experience';

const Experience: React.FC<{}> = () => {
  const { locale } = useRouter();
  const { t } = useTranslation('common');

  const experienceItemsLang = experienceItems[locale === 'es' ? 'es' : 'en'];
  const experienceList = experienceItemsLang.map((item, index) => (
    <ExperienceItem item={item} index={index} key={item.title + item.company} />
  ));

  return (
    <div id="experience" className="py-28 bg-yellow-300 dark:bg-black">
      <div className="container mx-auto">
        <h2 className="text-3xl">{t('experience')}</h2>
        <div className="relative wrap overflow-hidden p-10">
          <div
            className="border-2-2 absolute border-opacity-20 border-gray-700 border-dashed dark:border-yellow-500 h-full border ml-4 lg:ml-0 lg:left-1/2"
          />
          {experienceList}
        </div>
      </div>
    </div>
  );
};

export default Experience;
