import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet();
    const page = ctx.renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    const isProduction = process.env.NODE_ENV === 'production';
    const initialProps = await Document.getInitialProps(ctx);
    // Pass isProduction flag back through props
    return { ...initialProps, ...page, styleTags, isProduction };
  }

  setGoogleTags() {
    return {
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-XXXXXXXX-X');
      `
    };
  }
  render() {
    const { isProduction} = this.props;
    return (
      <html lang="en" dir="ltr">
      <Head>
        {this.props.styleTags}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Head>
      <body>
      <Main />
      <NextScript />
      {isProduction && (
        <div>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXXX-X"
          />
          <script dangerouslySetInnerHTML={this.setGoogleTags()} />
        </div>
      )}
      </body>
      </html>
    );
  }
}


export default MyDocument;