import { ISkillItem } from '../types';

type Props = {
  skill: ISkillItem,
  hide: boolean
};

const SkillGroupItem: React.FC<Props> = ({ skill, hide }: Props) => {
  const { Icon } = skill;

  return (
    <div
      key={skill.name}
      className={`bg-gray-800 text-white fill-white p-4 flex gap-2 justify-center place-items-center hover:scale-105 transition-transform ${hide ? 'hidden lg:flex' : ''}`}
    >
      <Icon className="h-10 w-10" />
      {skill.name}
    </div>
  );
};

export default SkillGroupItem;
