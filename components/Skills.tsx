import { SkillsType } from "../types";
import RichText from "./RichText";
import { Heading, Box } from "theme-ui";

const Skills = ({ item }: { item: SkillsType }): JSX.Element => (
  <Box py={3}>
    <Heading as="h3">{item.title}</Heading>
    <RichText text={item.description} />
  </Box>
);

export default Skills;
