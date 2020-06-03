import { ProjectType } from "../types";
import RichText from "./RichText";
import SocialIconLink from "./SocialIconLink";
import { Flex, Text, Heading, Box } from "theme-ui";

const Project = ({ project }: { project: ProjectType }): JSX.Element => (
  <Box py={2}>
    <Flex sx={{ alignItems: "center" }}>
      <Heading as="h3">{project.title}</Heading>
      <Box px={2}>
        <SocialIconLink link={project.link} />
        {project.source && (
          <SocialIconLink socialType="GitHub" link={project.source} />
        )}
      </Box>
    </Flex>
    {project.job && (
      <Text variant="detail">
        <i>Built with the rest of the team at {project.job.fields.company}</i>
      </Text>
    )}
    <RichText text={project.description} />
    Technologies used: {project.technologies.join(", ")}
  </Box>
);

export default Project;
