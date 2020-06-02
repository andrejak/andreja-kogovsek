import { useContentful } from "../lib/contentful";
import Project from "../components/Project";
import { Spinner, Heading, Box } from "theme-ui";
import InternalLink from "../components/InternalLink";

export default () => {
  const projects = useContentful("project");

  return (
    <Box p={4}>
      <Heading as="h1">
        <InternalLink href="/">Home</InternalLink> / Projects
      </Heading>
      {projects ? (
        projects.map((item, index) => <Project project={item} key={index} />)
      ) : (
        <Spinner />
      )}
    </Box>
  );
};
