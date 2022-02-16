import Head from 'next/head';
import Navbar from './navbar/navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
}