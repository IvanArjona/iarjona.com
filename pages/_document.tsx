import { Html, Head, Main, NextScript, DocumentProps } from 'next/document'

export default function MyDocument(props: DocumentProps) {
  return (
    <Html className="scroll-smooth">
      <Head />
      <body className="bg-orange-500 dark:bg-black scroll-smooth transition-colors duration-500">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
