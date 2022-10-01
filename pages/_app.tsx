import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>농산물 실시간/경락가격 정보</title>
      </Head>
      <Component {...pageProps} />)
    </>
  );
}

export default MyApp;
