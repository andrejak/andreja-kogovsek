import { ProjectType } from "../types";
import RichText from "./RichText";
import SocialIconLink from "./SocialIconLink";
import { Flex, Text, Heading, Box } from "theme-ui";

const Project = ({ item }: { item: ProjectType }): JSX.Element => (
  <Box py={4}>
    <Flex sx={{ alignItems: "center" }}>
      <Heading as="h3">{item.title}</Heading>
      <Box px={2}>
        <SocialIconLink link={item.link} />
        {item.source && (
          <SocialIconLink socialType="GitHub" link={item.source} />
        )}
      </Box>
    </Flex>
    {item.job && (
      <Text variant="detail">
        <i>Built with the rest of the team at {item.job.fields.company}</i>
      </Text>
    )}
    <RichText text={item.description} />
    Technologies used: {item.technologies.join(", ")}
  </Box>
);

export default Project;
