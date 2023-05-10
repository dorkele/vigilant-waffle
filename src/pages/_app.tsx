// import "sanitize.css";
import "../styles/variables.css";
import "../styles/fonts.css";
import "../styles/base.scss";
import { AppProps } from "next/app";
import { MediaContextProvider } from "../components/MediaQuery";
import Head from "next/head";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

// https://nextjs.org/docs/basic-features/layouts#with-typescript
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement, pageProps: any) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MediaContextProvider>
        {getLayout(<Component {...pageProps} />, pageProps)}
      </MediaContextProvider>
    </>
  );
}
