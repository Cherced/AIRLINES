import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" >
        <Head >
          <title>AIRLINE || CHERCED</title>
          
        </Head>
        <body>
          <Main />
          <div id="myportal"></div>
          <NextScript />
        </body>
      </Html>
    )
  }
}