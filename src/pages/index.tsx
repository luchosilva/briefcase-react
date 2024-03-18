import { Layout } from 'layouts/Layout';
import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import Briefcase from './briefcase';

const Home: NextPageWithLayout = () => {
  return <Briefcase />;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
