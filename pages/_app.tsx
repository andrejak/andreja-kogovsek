import "../styles/global.css";
import { AppProps } from "next/app";
import Footer from "../components/Footer";
import { Info } from "../types";
import { useContentful } from "../lib/contentful";
import { ThemeProvider, Flex } from "theme-ui";
import theme from "../styles/theme";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const info: Info[] = useContentful("info", { limit: 1 });

  return (
    <>
      <Head>
        <title>{info[0] ? info[0].name : "Andreja Kogovsek"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <Flex
          sx={{
            flexDirection: "column",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <main style={{ flexGrow: 1 }}>
            <Component {...pageProps} />
          </main>
          <Footer email={info[0] && info[0].email} />
        </Flex>
      </ThemeProvider>
    </>
  );
}
