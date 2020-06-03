import { EducationType } from "../types";
import { getYear } from "../lib/utils";
import { Flex, Heading, Box } from "theme-ui";

const Education = ({
  education,
}: {
  education: EducationType;
}): JSX.Element => (
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

export default Education;
