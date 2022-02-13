import Head from 'next/head';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
}