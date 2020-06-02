import Link from "next/link";
import { useContentful } from "../lib/contentful";
import Project from "../components/Project";

export default () => {
  const projects = useContentful("project");

  return (
    <>
      <h1>Projects</h1>
      {projects.map((item, index) => (
        <Project project={item} key={index} />
      ))}
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
};
