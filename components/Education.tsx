import { EducationType } from "../types";
import { getYear } from "../lib/utils";
import { Flex, Heading, Box } from "theme-ui";

export default ({ education }: { education: EducationType }) => (
  <Box py={2}>
    <Flex sx={{ justifyContent: "space-between" }}>
      <Heading as="h3">
        {education.institution} - {education.course} {education.grade}
      </Heading>
      <span>
        {getYear(education.start)} - {getYear(education.end)}
      </span>
    </Flex>
  </Box>
);
