import { useContentfulEntries } from "../lib/contentful";
import Project from "../components/Project";
import { Spinner, Heading, Box } from "theme-ui";
import InternalLink from "../components/InternalLink";
import { LoadingValue, ProjectType } from "../types";

const Projects: React.FC = () => {
  const projects: LoadingValue<ProjectType[]> = useContentfulEntries("project");

  return (
    <Box p={4} sx={{ maxWidth: "800px", width: "calc(min(800px, 100vw))" }}>
      <Heading as="h1">
        <InternalLink href="/">Home</InternalLink> / Projects
      </Heading>
      {projects.loading ? (
        <Spinner />
      ) : (
        projects.data.map((item, index) => (
          <Project project={item} key={index} />
        ))
      )}
    </Box>
  );
};

export default Projects;
