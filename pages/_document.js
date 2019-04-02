import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

class MyDocument extends Document {
  static async getInitialProps (ctx) {

    const isProduction = process.env.NODE_ENV === 'production';
    const initialProps = await Document.getInitialProps(ctx);
    // Pass isProduction flag back through props
    return { ...initialProps, isProduction };
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
MyDocument.getInitialProps = ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const page = ctx.renderPage(Component => {
    const WrappedComponent = props => {
      return <Component {...props} />;
    };

    return WrappedComponent;
  });

  let css;

  return {
    ...page,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: (
      <React.Fragment>
        <style
          id="jss-server-side"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: css }}
        />
        {flush() || null}
      </React.Fragment>
    ),
  };
};

export default MyDocument;