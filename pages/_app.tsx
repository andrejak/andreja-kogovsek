import "../styles/global.css";
import { AppProps } from "next/app";
import Footer from "../components/Footer";
import { Info } from "../types";
import { useContentful } from "../lib/contentful";
import { ThemeProvider, Flex } from "theme-ui";
import theme from "../styles/theme";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const info: Info = useContentful("info", { limit: 1 })[0];

  return (
    <>
      <Head>
        <title>{info ? info.name : "Andreja Kogovsek"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <Flex sx={{ flexDirection: "column", alignItems: "center" }}>
          <main>
            <Component {...pageProps} />
          </main>
          <Footer email={info && info.email} />
        </Flex>
      </ThemeProvider>
    </>
  );
}
