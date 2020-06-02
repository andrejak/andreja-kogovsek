import Head from "next/head";
import Link from "next/link";
import { GitHub, Linkedin, Mail, Twitter } from "react-feather";

export default () => (
  <div className="container">
    <Head>
      <title>Andreja Kogovsek</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 className="title">Andreja Kogovsek</h1>
      <p>Full stack engineer with emphasis on front-end.</p>
      <p>Impact and user-focused.</p>
      <p>Also interested in analytics, design & organisation.</p>

      <Link href="/cv">
        <a>CV</a>
      </Link>
      <Link href="/projects">
        <a>Projects</a>
      </Link>
    </main>

    <footer>
      <a href="mailto:andreja.kogovsek1@gmail.com">
        <Mail />
      </a>
      <a
        href="https://www.linkedin.com/in/andrejakogovsek/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin />
      </a>
      <a
        href="https://github.com/andrejak"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHub />
      </a>
      <a
        href="https://twitter.com/andreja_kk"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter />
      </a>
    </footer>

    <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer img {
        margin-left: 0.5rem;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      .title a {
        color: #0070f3;
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }

      .title,
      .description {
        text-align: center;
      }
    `}</style>
  </div>
);
