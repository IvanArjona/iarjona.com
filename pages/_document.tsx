import { Html, Head, Main, NextScript, DocumentProps } from 'next/document'

export default function MyDocument(props: DocumentProps) {
  return (
    <Html>
      <Head />
      <body className="bg-white dark:bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
