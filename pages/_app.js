import { ThemeProvider } from "theme-ui";
import Head from "next/head";

import theme from "../lib/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Happy Birthday Annlee 🎉</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
