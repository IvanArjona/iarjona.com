import Head from 'next/head';
import Navbar from './navbar/navbar';

type Props = {
  children: React.ReactNode
};

const Layout: React.FC<Props> = ({ children }: Props) => (
  <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    <main>{children}</main>
    <footer>Footer</footer>
  </>
);

export default Layout;
