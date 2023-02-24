import { useEffect, useState, useMemo } from 'react';
import Layout from '../components/Layout/Layout';
import '../styles/globals.css';
import { Amplify } from 'aws-amplify';
import { Context } from '../data/context';

import awsExports from '../src/aws-exports';
Amplify.configure(awsExports);

const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT;
const GRAPHQL_API_KEY = process.env.GRAPHQL_API_KEY;

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)')) {
      toggleDark(true);
    } else toggleDark(false);
  }, []);

  const [dark, toggleDark] = useState(false);
  const value = useMemo(() => ({ dark, toggleDark }), [dark]);

  return (
    <Context.Provider value={value}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Context.Provider>
  );
}
