import Link from "next/link";
import { useContentful } from "../lib/contentful";
import Project from "../components/Project";
import { Link as ThemeUILink, Spinner } from "theme-ui";
import InternalLink from "../components/InternalLink";

export default () => {
  const projects = useContentful("project");

  return (
    <>
      <h1>
        <InternalLink href="/">Home</InternalLink> / Projects
      </h1>
      {projects ? (
        projects.map((item, index) => <Project project={item} key={index} />)
      ) : (
        <Spinner />
      )}
    </>
  );
};
