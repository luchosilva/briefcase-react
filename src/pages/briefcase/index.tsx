import { ReactElement } from 'react';
import { NextPageWithLayout } from '@pages/_app';
import Timeline from './Timeline';
import { Layout } from 'layouts/Layout';
import Profile from './Profile';

const Briefcase: NextPageWithLayout = () => {
  return (
    <div className="hero min-h-full">
      <div className="px-5 w-full">
        <div className="flex flex-col gap-5 w-full items-center justify-items-center">
          <div className="text-center">
            <Profile />
          </div>
          <div>
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
