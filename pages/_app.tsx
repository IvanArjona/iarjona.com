/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Layout from '../components/layout';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider attribute="class">
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
);

export default MyApp;
