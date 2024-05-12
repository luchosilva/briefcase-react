import { Layout } from 'layouts/Layout';
import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import Briefcase from './briefcase';
import Head from 'next/head';

const Home: NextPageWithLayout = () => {
  return <Briefcase />;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon?<generated>" type="image/<generated>" sizes="<generated>" />
        <title>Luis Silva - Briefcase React</title>
        <meta name="description" content="Luis Silva - Briefcase React" />
        <meta name="keywords" content="Luis Silva, Briefcase React" />
        <meta name="author" content="Luis Silva" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="generator" content="React" />
        <meta name="application-name" content="Briefcase React" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      </Head>
      <Layout>{page}</Layout>
    </>
  );
};

export default Home;
