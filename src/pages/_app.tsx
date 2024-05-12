import '../styles/globals.scss';
import '../../i18n.js';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode, StrictMode } from 'react';
import type { NextPage } from 'next';
import { Provider } from 'react-redux';
import { store } from '../redux/store/store';

export type NextPageWithLayout = NextPage & { getLayout?: (page: ReactElement) => ReactNode };

type AppPropsWithLayout = AppProps & { Component: NextPageWithLayout };

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <StrictMode>
      <Provider store={store}>{getLayout(<Component {...pageProps}></Component>)}</Provider>
    </StrictMode>
  );
};

export default MyApp;
