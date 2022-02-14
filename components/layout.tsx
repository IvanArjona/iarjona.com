import Head from 'next/head';
import Header from './header/header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
}