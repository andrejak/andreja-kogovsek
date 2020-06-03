import { SkillsType } from "../types";
import RichText from "./RichText";
import { Heading, Box } from "theme-ui";

const Skills = ({ skills }: { skills: SkillsType }): JSX.Element => (
  <Box py={2}>
    <Heading as="h3">{skills.title}</Heading>
    <RichText text={skills.description} />
  </Box>
);

export default Skills;
