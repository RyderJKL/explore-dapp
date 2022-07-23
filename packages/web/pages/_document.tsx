import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import * as React from "react";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  // static async getInitialProps(ctx: DocumentContext) {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      // const spriteContent = sprite.stringify();
      return {
        // spriteContent,
        ...initialProps,
        styles: [
          <>{initialProps.styles}</>,
          <>{sheet.getStyleElement()}</>,
          <></>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
        </Head>
        <body
          data-commit={(process.env.LATEST_GIT_HASH || "").slice(0, 8)}
          data-commit-time={process.env.LATEST_GIT_TIME || ""}
        >
          {/* <div dangerouslySetInnerHTML={{ __html: this.props.spriteContent }} /> */}
          <Main />
          <NextScript />
          {/* <script src="https://unpkg.com/vconsole@latest/dist/vconsole.min.js"></script>
          <script> var vConsole = new window.VConsole();</script> */}
        </body>
      </Html>
    );
  }
}
