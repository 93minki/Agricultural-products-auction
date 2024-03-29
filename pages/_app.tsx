import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "../src/store";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Head>
        <title>농산물 실시간/경락가격 정보</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
