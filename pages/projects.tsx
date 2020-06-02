import Link from "next/link";
import { useContentful } from "../lib/contentful";

export default () => {
  const projects = useContentful("project");

  return (
    <>
      <h1>Projects</h1>
      {projects.map((project) => (
        <div>{project.title}</div>
      ))}
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
};
