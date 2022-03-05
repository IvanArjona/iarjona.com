import {
  Html, Head, Main, NextScript, DocumentProps,
} from 'next/document';

const MyDocument: React.FC<DocumentProps> = () => (
  <Html className="scroll-smooth">
    <Head />
    <body className="bg-yellow-300 dark:bg-purple-900">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;
