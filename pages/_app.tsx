import "../styles/global.css";
import { AppProps } from "next/app";
import Footer from "../components/Footer";
import { Info } from "../types";
import { useContentful } from "../lib/contentful";

export default function App({ Component, pageProps }: AppProps) {
  const info: Info = useContentful("info", { limit: 1 })[0] || {
    name: "Andreja Kogovsek",
  };

  return (
    <>
      <Component {...pageProps} />
      <Footer email={info.email} />
    </>
  );
}
