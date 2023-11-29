// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

const MyDocument = () => {
  return (
    <Html>
      <Head>
      <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Icons+Outlined&display=optional"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const initialProps = await Document.getInitialProps(ctx)
  return initialProps
}

export default MyDocument