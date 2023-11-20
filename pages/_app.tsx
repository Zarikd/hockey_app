import {store} from '@/store';
import {Layout} from 'features';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import {Provider} from 'react-redux';
import '../src/style/global.scss'

export default function App({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>Monolit</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}
