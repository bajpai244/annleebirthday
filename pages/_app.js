import { ThemeProvider } from "theme-ui";
import Head from "next/head";

import theme from "../lib/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Happy Birthday Annlee 🎉</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
