import { ReactElement } from 'react';
import { NextPageWithLayout } from '@pages/_app';
import Timeline from './Timeline';
import { Layout } from 'layouts/Layout';
import Profile from './Profile';

const Briefcase: NextPageWithLayout = () => {
  return (
    <div className="hero min-h-full">
      <div className="px-5 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 w-full items-center justify-items-center">
          <div className="col-span-1 md:col-span-4 max-w-md text-center">
            <Profile />
          </div>
          <div className="col-span-1 md:col-span-8 max-h-[80dvh] overflow-auto scroll-m-1">
            <Timeline />
          </div>
        </div>
      </div>
    </div>
  );
};

Briefcase.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Briefcase;
