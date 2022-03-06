import { useTranslation } from 'next-export-i18n';
import skills from '../data/skills';
import SkillsGroup from './skills-groups';

const Skills: React.FC<{}> = () => {
  const { t } = useTranslation();

  const skillsItems = skills.map((item) => <SkillsGroup item={item} key={item.title} />);

  return (
    <div id="skills" className="py-28">
      <div className="container mx-auto">
        <h2 className="text-3xl">{t('skills')}</h2>
        <div className="m-8 md:my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-12">
          {skillsItems}
        </div>
      </div>
    </div>
  );
};

export default Skills;
