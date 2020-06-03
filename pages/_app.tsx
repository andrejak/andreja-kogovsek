import "../styles/global.css";
import { AppProps } from "next/app";
import Footer from "../components/Footer";
import { ThemeProvider, Flex } from "theme-ui";
import theme from "../styles/theme";
import Head from "next/head";
import React from "react";
import { InfoProvider, InfoContext } from "../lib/infoContext";

const App = ({ Component, pageProps }: AppProps): React.FC => {
  const info = React.useContext(InfoContext);

  return (
    <>
      <Head>
        <title>{info.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InfoProvider>
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
            <Footer />
          </Flex>
        </ThemeProvider>
      </InfoProvider>
    </>
  );
};

export default App;
