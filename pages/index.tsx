import Head from "next/head";
import Link from "next/link";
import { useContentful } from "../lib/contentful";
import { Info } from "../types";
import RichText from "../components/RichText";

export default () => {
  const info: Info = useContentful("info", { limit: 1 })[0] || {};

  return (
    <div>
      <h1>{info.name || "Andreja Kogovsek"}</h1>
      <RichText text={info.description} />
      <p>
        <Link href="/cv">
          <a>CV</a>
        </Link>
      </p>
      <p>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
      </p>
    </div>
  );
};
