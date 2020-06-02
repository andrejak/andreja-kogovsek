import Head from "next/head";
import Link from "next/link";
import { useContentful } from "../lib/contentful";
import { Info } from "../types";
import RichText from "../components/RichText";

export default () => {
  const info: Info = useContentful("info", { limit: 1 })[0] || {
    name: "Andreja Kogovsek",
  };

  return (
    <div className="container">
      <Head>
        <title>{info.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">{info.name}</h1>
        <RichText text={info.description} />
        <Link href="/cv">
          <a>CV</a>
        </Link>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
      </main>
    </div>
  );
};
