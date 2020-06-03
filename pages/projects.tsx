import { useContentfulEntries } from "../lib/contentful";
import Project from "../components/Project";
import { Heading, Box } from "theme-ui";
import InternalLink from "../components/InternalLink";
import { LoadingValue, ProjectType } from "../types";
import { maxWidth, footerHeight } from "../styles";
import TrailingList from "../components/TrailingList";

const Projects: React.FC = () => {
  const projects: LoadingValue<ProjectType[]> = useContentfulEntries("project");

  return (
    <Box p={4} sx={{ maxWidth }}>
      <Heading as="h1">
        <InternalLink href="/">Home</InternalLink> / Projects
      </Heading>
      <Box
        sx={{
          width: ["300px", `calc(min(${maxWidth}, 100vw))`],
          minHeight: `calc(100vh - ${footerHeight})`,
        }}
      >
        <TrailingList items={projects.data || []} Component={Project} />
      </Box>
    </Box>
  );
};

export default Projects;
