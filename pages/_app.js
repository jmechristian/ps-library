import { useEffect, useState, useMemo } from 'react';
import Layout from '../components/Layout/Layout';
import '../styles/globals.css';
import { Amplify } from 'aws-amplify';
import { Context } from '../data/context';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-hooks-web';

const searchClient = algoliasearch(
  'W0TY58JH2W',
  '1a1941245a399e4509af58aa6a30ad1a'
);

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
