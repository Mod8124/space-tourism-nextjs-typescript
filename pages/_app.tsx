import '../styles/globals.css';
import Layout from '../src/layout/Layout';
import type { AppProps } from 'next/app';
import { apiSlice } from '../src/features/apiSlice';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import 'normalize.css/normalize.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <ApiProvider api={apiSlice}>
        <Component {...pageProps} />
      </ApiProvider>
    </Layout>
  );
}

export default MyApp;
