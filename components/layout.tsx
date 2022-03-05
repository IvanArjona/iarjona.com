import Head from 'next/head';
import Footer from './footer';
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
    <Footer />
  </>
);

export default Layout;
