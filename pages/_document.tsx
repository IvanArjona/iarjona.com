import {
  Html, Head, Main, NextScript, DocumentProps,
} from 'next/document';

const MyDocument: React.FC<DocumentProps> = () => (
  <Html className="scroll-smooth">
    <Head />
    <body className="bg-yellow-500 dark:bg-purple-900 text-gray-100">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;
