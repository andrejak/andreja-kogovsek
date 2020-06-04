import "../styles/global.css";
import { AppProps } from "next/app";
import Footer from "../components/Footer";
import { ThemeProvider, Flex } from "theme-ui";
import theme from "../styles/theme";
import Head from "next/head";
import React from "react";
import { InfoProvider, InfoContext } from "../lib/infoContext";
import Header from "../components/Header";

const App = ({ Component, pageProps }: AppProps): any => {
  const info = React.useContext(InfoContext);

  return (
    <>
      <Head>
        <title>{info.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InfoProvider>
        <ThemeProvider theme={theme}>
          <Header />
          <Flex
            sx={{
              flexDirection: "column",
              alignItems: "center",
              minHeight: "100vh",
            }}
          >
            <main
              style={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Component {...pageProps} />
            </main>
            <Footer />
          </Flex>
        </ThemeProvider>
      </InfoProvider>
    </>
  );
};

export default App;
