import { useTranslation } from 'next-export-i18n';
import { useState } from 'react';
import { ISkillGroup } from '../types';
import SkillGroupItem from './skills-groups-items';

type Props = {
  item: ISkillGroup,
};

const SkillGroup: React.FC<Props> = ({ item }: Props) => {
  const [seeMore, setSeeMore] = useState(true);
  const { t } = useTranslation();

  const skills = item.skills
    .map((skill, index) => (
      <SkillGroupItem skill={skill} key={skill.name} hide={seeMore && index >= 5} />
    ));

  const toggleSeeMore = () => {
    setSeeMore(!seeMore);
  };

  return (
    <div className="p-4 text-center">
      <h3 className="text-2xl">
        {item.title}
      </h3>
      <div className="my-4 flex flex-col justify-center gap-4">
        {skills}
      </div>
      <button type="button" className="text-sm p-2 lg:hidden" onClick={toggleSeeMore}>
        {t(seeMore ? 'see-more' : 'see-less')}
      </button>
    </div>
  );
};

export default SkillGroup;
