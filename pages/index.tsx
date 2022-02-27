import type { NextPage } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import FullPage from '../components/full-page';
import Presentation from '../components/presentation';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Home</title>
      <meta name="description" content="Description" />
    </Head>
    <FullPage nextSection="home">
      <Presentation />
    </FullPage>
    <h1 id="home">Home</h1>
  </>
);

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
});

export default Home;
