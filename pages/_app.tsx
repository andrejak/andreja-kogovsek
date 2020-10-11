import { AppProps } from "next/app";
import Footer from "../components/Footer";
import { ThemeProvider, Flex } from "theme-ui";
import theme from "../styles/theme";
import Head from "next/head";
import React from "react";
import { InfoProvider, InfoContext } from "../lib/infoContext";
import Header from "../components/Header";
import { Global } from "@emotion/core";

const App = ({ Component, pageProps }: AppProps): any => {
  const info = React.useContext(InfoContext);
  const imageUrl = "/favicon.ico";
  const title = info.name;
  const url = info.link;
  const description = `Personal website/CV/portfolio`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={title} />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:image" content={imageUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:site" content="@andrejak" />
        <meta name="twitter:creator" content="@andrejak" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image" content={imageUrl} />
        <meta
          name="google-site-verification"
          content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}
        />
        <link rel="canonical" href={url} />
        <link rel="icon" href={imageUrl} />
      </Head>
      <InfoProvider>
        <ThemeProvider theme={theme}>
          <Global
            styles={() => ({
              "*": {
                boxSizing: "border-box",
              },
            })}
          />
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
