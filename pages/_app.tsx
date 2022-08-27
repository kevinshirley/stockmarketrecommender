import '../src/styles/app.scss'
import type { AppProps } from 'next/app'
import Header from '../src/components/header'

const BEM_BLOCK = 'c-main'

function Root({ Component, pageProps }: AppProps) {
  return (
    <main className={BEM_BLOCK}>
      <Header />
      <Component {...pageProps} />
    </main>
  )
}

export default Root
