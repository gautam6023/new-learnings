import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      {/* <footer>Copyright 2022 Gautam</footer> */}
    </>
  );
}

export default MyApp;
