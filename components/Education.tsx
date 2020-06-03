import { EducationType } from "../types";
import { getYear } from "../lib/utils";
import { Flex, Heading, Box } from "theme-ui";

const Education = ({ item }: { item: EducationType }): JSX.Element => (
  <Box py={2}>
    <Flex sx={{ justifyContent: "space-between" }}>
      <Heading as="h3">
        {item.institution} - {item.course} {item.grade}
      </Heading>
      <span>
        {getYear(item.start)} - {getYear(item.end)}
      </span>
    </Flex>
  </Box>
);

export default Education;
