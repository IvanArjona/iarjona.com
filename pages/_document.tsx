import {
  Html, Head, Main, NextScript, DocumentProps,
} from 'next/document';

const MyDocument: React.FC<DocumentProps> = () => (
  <Html className="scroll-smooth">
    <Head />
    <body className="bg-orange-500 dark:bg-black transition-colors duration-500">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;
