import { useTranslation } from 'next-i18next';
import skills from '../data/skills';
import Header from './Header';
import SkillsGroup from './skills-groups';

const Skills: React.FC<{}> = () => {
  const { t } = useTranslation();

  const skillsItems = skills.map((item) => <SkillsGroup item={item} key={item.title} />);

  return (
    <div id="skills" className="py-28">
      <Header>
        {t('skills')}
      </Header>
      <div className="container mx-auto">
        <div className="m-8 md:my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-12">
          {skillsItems}
        </div>
      </div>
    </div>
  );
};

export default Skills;
