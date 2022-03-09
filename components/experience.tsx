import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import ExperienceItem from './experience-item';
import experienceItems from '../data/experience';
import Header from './Header';

const Experience: React.FC<{}> = () => {
  const { locale } = useRouter();
  const { t } = useTranslation();

  const experienceItemsLang = experienceItems[locale === 'es' ? 'es' : 'en'];
  const experienceList = experienceItemsLang.map((item, index) => (
    <ExperienceItem item={item} index={index} key={item.title + item.company} />
  ));

  return (
    <div id="experience" className="py-28 bg-emerald-500 dark:bg-black">
      <Header>
        {t('experience')}
      </Header>
      <div className="container mx-auto">
        <div className="relative wrap overflow-hidden p-10">
          <div
            className="border-2-2 absolute border-opacity-20 border-purple-600 border-dashed dark:border-yellow-500 h-full border ml-4 lg:ml-0 lg:left-1/2"
          />
          {experienceList}
        </div>
      </div>
    </div>
  );
};

export default Experience;
