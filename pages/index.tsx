import type { NextPage } from 'next';
import Head from 'next/head';
import FullPage from '../components/full-page';
import Presentation from '../components/presentation';
import Experience from '../components/experience';
import Skills from '../components/skills';
import Contact from '../components/contact';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Home</title>
      <meta name="description" content="Description" />
    </Head>
    <FullPage nextSection="experience">
      <Presentation />
    </FullPage>
    <div className="h-4 w-full bg-purple-400" />
    <Experience />
    <div className="h-4 w-full bg-purple-400" />
    <Skills />
    <div className="h-4 w-full bg-purple-400" />
    <Contact />
  </>
);

export default Home;
