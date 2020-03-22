import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static getInitialProps(ctx) {
    return Document.getInitialProps(ctx)
  }

  render() {
    return (
      <html>
        <Head>
          <link
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            rel="stylesheet"
          />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js" />  
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" />  
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" />
          
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
