import {
  Html, Head, Main, NextScript, DocumentProps,
} from 'next/document';

const MyDocument: React.FC<DocumentProps> = () => (
  <Html className="scroll-smooth">
    <Head />
    <body className="bg-light dark:bg-dark">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;
