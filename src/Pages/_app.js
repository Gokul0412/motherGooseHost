import '../../styles/global.css'
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import Script from "next/script";
// import { store } from "../redux/store";
import { Provider } from 'react-redux';
import store from 'redux/store';
import { useLayoutEffect, useState } from 'react';
import LoaderState from '<prefix>/Components/Loader';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

// import store 

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState();
  // useLayoutEffect(() => {
  //   setTimeout(() => setIsLoading(false), 800);
  // }, []);
  const getLayout = Component.getLayout ?? ((page) => page);  return (
    <>
      {/* {isLoading ? <LoaderState /> : ""} */}
      <ToastContainer />
      <Provider store={store}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
            crossorigin="anonymous"
          ></link>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"
          ></link>
        </Head>
        <Script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
          crossorigin="anonymous"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
          crossorigin="anonymous"
        />
        {getLayout(<Component {...pageProps} />)}
      </Provider>
    </>
  )
}
