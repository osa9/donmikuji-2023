import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ja">
      <Head />
      <body className="h-full bg-blue-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
