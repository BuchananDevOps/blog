import type { AppProps } from "next/app"
import dynamic from "next/dynamic"
import { FC } from "react"

import "../css/fonts.css"
import "../css/main.css"

const Page = dynamic(() => import("@/components/layout/page"))

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  )
}

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
})
