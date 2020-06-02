import Link from "next/link";
import { useContentful } from "../lib/contentful";
import Project from "../components/Project";

export default () => {
  const projects = useContentful("project");

  return (
    <>
      <h1>
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        / Projects
      </h1>
      {projects.map((item, index) => (
        <Project project={item} key={index} />
      ))}
    </>
  );
};
