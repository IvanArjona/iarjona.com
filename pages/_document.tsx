import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import i18nextConfig from '../next-i18next.config';

class MyDocument extends Document {
  render() {
    // eslint-disable-next-line no-underscore-dangle
    const { locale } = this.props.__NEXT_DATA__.query;
    const currentLocale = (locale || i18nextConfig.i18n.defaultLocale) as string;

    return (
      <Html lang={currentLocale} className="scroll-smooth">
        <Head />
        <body className="bg-yellow-500 dark:bg-purple-900 text-gray-100 overflow-x-hidden">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
