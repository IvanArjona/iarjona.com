import type { NextPage } from 'next';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import FullPage from '../../components/full-page';
import Presentation from '../../components/presentation';
import Experience from '../../components/experience';
import Skills from '../../components/skills';
import Contact from '../../components/contact';
import Separator from '../../components/separator';
import { getStaticPaths, getStaticProps } from '../../lib/locale';
import Projects from '../../components/projects';

export { getStaticPaths, getStaticProps };

const Home: NextPage = () => {
  const { t } = useTranslation();

  const sections: React.ReactNode[] = [
    <FullPage key="presentation" nextSection="experience">
      <Presentation />
    </FullPage>,
    <Experience key="experience" />,
    <Projects key="projects" />,
    <Skills key="skills" />,
    <Contact key="contact" />,
  ];

  const sectionsWithSeparator = sections.reduce((prev, curr, index) => (
    // eslint-disable-next-line react/no-array-index-key
    [prev, <Separator key={index} />, curr]
  ));

  const title = `${process.env.fullName} - ${t('title-1')} ${t('title-2')}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Description" />
      </Head>
      {sectionsWithSeparator}
    </>
  );
};

export default Home;
