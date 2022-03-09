import type { NextPage } from 'next';
import Head from 'next/head';
import FullPage from '../../components/full-page';
import Presentation from '../../components/presentation';
import Experience from '../../components/experience';
import Skills from '../../components/skills';
import Contact from '../../components/contact';
import Separator from '../../components/separator';
import { getStaticPaths, getStaticProps } from '../../lib/locale';

export { getStaticPaths, getStaticProps };

const Home: NextPage = () => (
  <>
    <Head>
      <title>Home</title>
      <meta name="description" content="Description" />
    </Head>
    <FullPage nextSection="experience">
      <Presentation />
    </FullPage>
    <Separator />
    <Experience />
    <Separator />
    <Skills />
    <Separator />
    <Contact />
  </>
);

export default Home;
