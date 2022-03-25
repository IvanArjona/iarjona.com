import Head from 'next/head';
import { useEffect } from 'react';
import AOS from 'aos';
import Footer from './footer';
import Navbar from './navbar/navbar';
import 'aos/dist/aos.css';

type Props = {
  children: React.ReactNode
};

const Layout: React.FC<Props> = ({ children }: Props) => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
