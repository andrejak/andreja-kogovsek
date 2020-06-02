import { SkillsType } from "../types";
import RichText from "./RichText";
import { Heading, Box } from "theme-ui";

export default ({ skills }: { skills: SkillsType }) => (
  <Box py={2}>
    <Heading as="h3">{skills.title}</Heading>
    <RichText text={skills.description} />
  </Box>
);
