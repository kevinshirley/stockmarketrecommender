import '../src/styles/app.scss'
import React, { useEffect } from 'react';
import type { AppProps } from 'next/app'
import { wrapper } from '../src/store';
import { useAction } from '../src/store/hooks';
import * as actions from '../src/store/actions';
import Header from '../src/components/header'
import Footer from '../src/components/footer'

const BEM_BLOCK = 'c-main'

function Root({ Component, pageProps }: AppProps) {
  const initialLoad = useAction(actions.root.initialLoad);

  useEffect(() => {
    initialLoad();
  }, []);

  return (
    <main className={BEM_BLOCK}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}

export default wrapper.withRedux(Root)
