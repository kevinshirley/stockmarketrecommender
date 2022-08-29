import '../src/styles/app.scss'
import React, { useEffect } from 'react';
import type { AppProps } from 'next/app'
import Head from 'next/head'
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
      <Head>
        <title>Stock Market Recommender | kevinshirley.com</title>
        <meta name="description" content="App that can provide a buy, hold or sell recommendation when given a stock symbol. The recommendation adjusts itself based on data." />
        <meta name="author" content="Kevin Shirley" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}

export default wrapper.withRedux(Root)
