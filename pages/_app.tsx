import '../src/styles/app.scss'
import type { AppProps } from 'next/app'
import { wrapper } from '../src/store';
import Header from '../src/components/header'
import Footer from '../src/components/footer'

const BEM_BLOCK = 'c-main'

function Root({ Component, pageProps }: AppProps) {
  return (
    <main className={BEM_BLOCK}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}

export default wrapper.withRedux(Root)
