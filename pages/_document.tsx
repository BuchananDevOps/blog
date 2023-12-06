import NextDocument, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document"

import clsx from "clsx"

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html
        className=" [--scroll-mt:9.875rem] lg:[--scroll-mt:6.3125rem]"
        lang="en"
      >
        <Head />
        <body className={clsx("antialiased text-slate-400")}>
          <Main />
          <NextScript />
          <script> </script>
        </body>
      </Html>
    )
  }
}
