import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Header from './Header';
import projectsItems from '../data/projects';
import ProjectItem from './projects-item';
import i18nextConfig from '../next-i18next.config';

const Projects: React.FC<{}> = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const { defaultLocale } = i18nextConfig.i18n;
  const locale = router.query.locale || defaultLocale;

  const projectItemsLang = projectsItems[locale === 'es' ? 'es' : 'en'];
  const projects = projectItemsLang.map((item, index) => (
    <ProjectItem item={item} index={index} key={item.name} />
  ));

  return (
    <div id="projects" className="px-8 py-28">
      <Header>
        {t('projects')}
      </Header>
      <div className="container mx-auto mt-12 flex flex-col gap-28">
        {projects}
      </div>
    </div>
  );
};

export default Projects;
